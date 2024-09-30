'use client'

import React, { useState, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { Button, Input, Select } from '../../ui'
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select'
import { ExternalLink, Loader, Save } from 'lucide-react'
import toast from 'react-hot-toast'
import {
  getBootDustForm,
  getBootDustName,
  getBootDustType,
} from '@/shared/services/boot-dust-cover'
import Link from 'next/link'

interface Props {
  className?: string
}

interface Name {
  id: number
  name: string
}

interface Type {
  id: number
  type: string
}

interface Form {
  id: number
  form: string
}

export const AddBootDustCover: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()

  const [names, setNames] = useState<Name[]>([])
  const [types, setTypes] = useState<Type[]>([])
  const [forms, setForms] = useState<Form[]>([])

  const [newName, setNewName] = useState('')
  const [typeId, setTypeId] = useState<number | null>(null)
  const [formId, setFormId] = useState<number | null>(null)

  const [dIn, setDIn] = useState('')
  const [dOut, setDOut] = useState('')
  const [height, setHeight] = useState('')
  const [partNumber, setPartNumber] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [addedDustCoverId, setAddedDustCoverId] = useState<number | null>(null)
  const [addedDustCoverPartNumber, setAddedDustCoverPartNumber] = useState<string | null>(null)

  useEffect(() => {
    // Загрузка данных для Select компонентов
    const fetchData = async () => {
      try {
        const [names, types, forms] = await Promise.all([
          getBootDustName(),
          getBootDustType(),
          getBootDustForm(),
        ])

        setNames(names)
        setTypes(types)
        setForms(forms)
      } catch (error) {
        console.error('Error fetching data:', error)
        toast.error(formatMessage({ id: 'toast.bootFetchingError' }))
      }
    }

    fetchData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (!typeId || !formId) {
      toast.error(formatMessage({ id: 'toast.bootFormError' }))
      setIsLoading(false)
      return
    }

    let finalNameId = null

    if (newName) {
      // Проверяем, существует ли уже такое имя
      const existingName = names.find(name => name.name === newName)
      if (existingName) {
        finalNameId = existingName.id
      } else {
        // Создаем новое имя
        const newNameResponse = await fetch('/api/boot-dust-cover/boot-firms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: newName }),
        })

        if (!newNameResponse.ok) {
          throw new Error('Failed to create new name')
        }

        const newNameData = await newNameResponse.json()
        finalNameId = newNameData.id
      }
    }

    if (!finalNameId) {
      toast.error(formatMessage({ id: 'toast.bootNameError' }))
      setIsLoading(false)
      return
    }

    const newBootDustCover = {
      nameId: finalNameId,
      typeId,
      formId,
      dIn: parseInt(dIn),
      dOut: parseInt(dOut),
      height: parseInt(height),
      partNumber,
      imageUrl,
    }

    try {
      const response = await fetch('/api/boot-dust-cover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBootDustCover),
      })

      if (!response.ok) {
        throw new Error('Failed to add boot dust cover')
      }

      const data = await response.json()
      console.log('Boot dust cover added:', data)

      // Очищаем форму после успешного добавления
      setNewName('')
      setTypeId(null)
      setFormId(null)
      setDIn('')
      setDOut('')
      setHeight('')
      setPartNumber('')
      setImageUrl('')

      // Сохраняем идентификатор добавленного пыльника
      setAddedDustCoverId(data.id)
      setAddedDustCoverPartNumber(data.partNumber)
      toast
      toast.success(formatMessage({ id: 'toast.bootAddedSuccess' }))
    } catch (error) {
      toast.error(formatMessage({ id: 'toast.bootAddedError' }))
      console.error('Error adding boot dust cover:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <Input
          type='text'
          placeholder={formatMessage({ id: 'addForm.newName' })}
          value={newName}
          onChange={e => setNewName(e.target.value)}
          className='border p-2'
        />
        <Select
          value={formId ? formId.toString() : ''}
          onValueChange={value => setFormId(parseInt(value))}
        >
          <SelectTrigger className='border p-2'>
            <SelectValue placeholder={formatMessage({ id: 'addForm.chooseForm' })} />
          </SelectTrigger>
          <SelectContent>
            {forms.map(form => (
              <SelectItem key={form.id} value={form.id.toString()}>
                {form.form}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={typeId ? typeId.toString() : ''}
          onValueChange={value => setTypeId(parseInt(value))}
        >
          <SelectTrigger className='border p-2'>
            <SelectValue placeholder={formatMessage({ id: 'addForm.chooseType' })} />
          </SelectTrigger>
          <SelectContent>
            {types.map(type => (
              <SelectItem key={type.id} value={type.id.toString()}>
                {type.type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type='number'
          placeholder={formatMessage({ id: 'addForm.dIn' })}
          value={dIn}
          onChange={e => setDIn(e.target.value)}
          className='border p-2 appearance-none'
          inputMode='numeric'
        />
        <Input
          type='number'
          placeholder={formatMessage({ id: 'addForm.dOut' })}
          value={dOut}
          onChange={e => setDOut(e.target.value)}
          className='border p-2 appearance-none'
          inputMode='numeric'
        />
        <Input
          type='number'
          placeholder={formatMessage({ id: 'addForm.height' })}
          value={height}
          onChange={e => setHeight(e.target.value)}
          className='border p-2 appearance-none'
          inputMode='numeric'
        />
        <Input
          type='text'
          placeholder={formatMessage({ id: 'addForm.partNumber' })}
          value={partNumber}
          onChange={e => setPartNumber(e.target.value)}
          className='border p-2'
        />
        <Input
          type='text'
          placeholder={formatMessage({ id: 'addForm.imageUrl' })}
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
          className='border p-2'
        />
        <Button variant='default' type='submit' disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader size={20} className='mr-2 animate-spin' />
              {formatMessage({ id: 'addForm.loading' })}
            </>
          ) : (
            <>
              <Save size={20} className='mr-2' />
              {formatMessage({ id: 'addForm.saveButton' })}
            </>
          )}
        </Button>
      </form>
      {addedDustCoverId && (
        <Link href={`/boot-kit/${addedDustCoverId}`} target='_blank' rel='noopener noreferrer'>
          <Button variant='secondary' className='mt-4 '>
            <ExternalLink size={20} className='mr-2' />
            {formatMessage({ id: 'addForm.openAddBoot' })} #{addedDustCoverPartNumber}
          </Button>
        </Link>
      )}
    </div>
  )
}
