import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useIntl } from 'react-intl'
import { Car } from '@prisma/client'
import { getCars, getCarsBrands } from '@/shared/services/cars'
import { BootWithCar } from '@/@types/prisma'
import { linkCarToBootDustCover, removeConnection, updateBootDustCover } from '@/app/actions'
import { TFormBootDustCoverSchema } from '../components/shared/add-forms/schemas/edit-boot-schemas'

interface UseEditBootDustCoverFormProps {
  data: BootWithCar
}

export const useEditBootDustCoverForm = ({ data }: UseEditBootDustCoverFormProps) => {
  const { formatMessage } = useIntl()
  const [allCar, setAllCar] = useState<Car[]>([])
  const [connectCars, setConnectCars] = useState<Car[]>(data.cars)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [allCar, carBrands] = await Promise.all([getCars(), getCarsBrands()])

        const carsWithBrands = allCar.map(car => {
          const carBrand = carBrands.find(carBrand => carBrand.id === car.carBrandId)
          return { ...car, carBrand: carBrand! }
        })

        setAllCar(carsWithBrands)
      } catch (error) {
        console.error('Error fetching data:', error)
        toast.error(formatMessage({ id: 'toast.bootFetchingError' }))
      }
    }

    fetchData()
  }, [data.id, formatMessage])

  const onSubmit = async (data: TFormBootDustCoverSchema) => {
    try {
      const formattedData = {
        ...data,
        dIn: Number(data.dIn),
        dOut: Number(data.dOut),
        height: Number(data.height),
      }

      await updateBootDustCover(formattedData)

      toast.success(formatMessage({ id: 'toast.bootEditDataSuccess' }), {
        icon: '✅',
      })
    } catch (error) {
      return toast.error(formatMessage({ id: 'toast.bootEditDataError' }), {
        icon: '❌',
      })
    }
  }

  const handleLinkCar = async (id: number) => {
    try {
      await linkCarToBootDustCover(data.id, id)
      toast.success(formatMessage({ id: 'toast.connectBootAddSuccess' }), {
        icon: '✅',
      })
      setConnectCars(prev => [...prev, allCar.find(car => car.id === id)!])

      setAllCar(prev => prev.filter(car => car.id !== id))
    } catch (error) {
      console.error('Ошибка при связывании машины с пыльником:', error)
      toast.error(formatMessage({ id: 'toast.connectBootAddError' }), {
        icon: '❌',
      })
    }
  }

  const handleRemoveCar = async (carId: number) => {
    try {
      await removeConnection(carId, data.id)
      toast.success(formatMessage({ id: 'toast.connectBootSuccessError' }), {
        icon: '✅',
      })

      setConnectCars(prev => prev.filter(car => car.id !== carId))
    } catch (error) {
      console.error('Ошибка при удалении связи:', error)
      toast.error(formatMessage({ id: 'toast.connectBootError' }), {
        icon: '❌',
      })
    }
  }

  const filteredCars = allCar.filter(
    car => !connectCars.some(connectedCar => connectedCar.id === car.id)
  )

  return {
    allCar,
    connectCars,
    onSubmit,
    handleLinkCar,
    handleRemoveCar,
    filteredCars,
  }
}
