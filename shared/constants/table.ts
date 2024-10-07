import { useIntl } from 'react-intl'

export const TableColumns = () => {
  const { formatMessage } = useIntl()

  const columns = [
    { key: 'carBrand.name', label: formatMessage({ id: 'bootCars.carBrand' }) },
    { key: 'imageUrl', label: formatMessage({ id: 'bootCars.carImage' }) },
    { key: 'models', label: formatMessage({ id: 'bootCars.carModel' }) },
    { key: 'carBody', label: formatMessage({ id: 'bootCars.carBody' }) },
    { key: 'modelYear', label: formatMessage({ id: 'bootCars.carYear' }) },
    { key: 'engine', label: formatMessage({ id: 'bootCars.carEngine' }) },
    { key: 'volume', label: formatMessage({ id: 'bootCars.carVolume' }) },
  ]

  return columns
}
