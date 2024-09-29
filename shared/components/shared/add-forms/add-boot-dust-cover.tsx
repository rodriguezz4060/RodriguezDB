'use client'

import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { Button, Input, Select } from '../../ui'
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select'
import { Loader, Save } from 'lucide-react'
import toast from 'react-hot-toast'

interface Props {
  className?: string
}

export const AddBootDustCover: React.FC<Props> = ({ className }) => {
  const { formatMessage } = useIntl()

  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [form, setForm] = useState('')
  const [dIn, setDIn] = useState('')
  const [dOut, setDOut] = useState('')
  const [height, setHeight] = useState('')
  const [partNumber, setPartNumber] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false) // Состояние для отслеживания загрузки

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true) // Устанавливаем состояние загрузки в true

    const newBootDustCover = {
      name,
      type,
      form,
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
      setName('')
      setType('')
      setForm('')
      setDIn('')
      setDOut('')
      setHeight('')
      setPartNumber('')
      setImageUrl('')

      // Используем переменные CSS для стилей тостера
      toast.success('Пыльник успешно добавлен')
    } catch (error) {
      toast.error('Не удалось добавить пыльник')
      console.error('Error adding boot dust cover:', error)
    } finally {
      setIsLoading(false) // Возвращаем состояние загрузки в false после завершения запроса
    }
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <Input
          type='text'
          placeholder={formatMessage({ id: 'addForm.brandBoot' })}
          value={name}
          onChange={e => setName(e.target.value)}
          className='border p-2'
        />
        <Select value={form} onValueChange={setForm}>
          <SelectTrigger className='border p-2'>
            <SelectValue placeholder={formatMessage({ id: 'addForm.chooseType' })} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Круглый'>{formatMessage({ id: 'addForm.round' })}</SelectItem>
            <SelectItem value='Тришип'>{formatMessage({ id: 'addForm.triship' })}</SelectItem>
          </SelectContent>
        </Select>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger className='border p-2'>
            <SelectValue placeholder={formatMessage({ id: 'addForm.formBoot' })} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Резиновый'>{formatMessage({ id: 'addForm.rubber' })}</SelectItem>
            <SelectItem value='Пластиковый'>{formatMessage({ id: 'addForm.plastic' })}</SelectItem>
            <SelectItem value='Универсальный'>
              {formatMessage({ id: 'addForm.universal' })}{' '}
            </SelectItem>
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
    </div>
  )
}
