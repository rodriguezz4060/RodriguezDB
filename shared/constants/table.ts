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

export const BootTableColumns = () => {
  const { formatMessage } = useIntl()

  const columns = [
    { key: 'carBrand.name', label: formatMessage({ id: 'bootCars.carBrand' }) },
    { key: 'models', label: formatMessage({ id: 'bootCars.carModel' }) },
    { key: 'carBody', label: formatMessage({ id: 'bootCars.carBody' }) },
    { key: 'modelYear', label: formatMessage({ id: 'bootCars.carYear' }) },
    { key: 'engine', label: formatMessage({ id: 'bootCars.carEngine' }) },
    { key: 'volume', label: formatMessage({ id: 'bootCars.carVolume' }) },
  ]

  return columns
}

export const TableDeleteColumns = () => {
  const { formatMessage } = useIntl()

  const columns = [
    { key: 'carBrand.name', label: formatMessage({ id: 'bootCars.carBrand' }) },
    { key: 'imageUrl', label: formatMessage({ id: 'bootCars.carImage' }) },
    { key: 'models', label: formatMessage({ id: 'bootCars.carModel' }) },
    { key: 'carBody', label: formatMessage({ id: 'bootCars.carBody' }) },
    { key: 'modelYear', label: formatMessage({ id: 'bootCars.carYear' }) },
    { key: 'engine', label: formatMessage({ id: 'bootCars.carEngine' }) },
    { key: 'volume', label: formatMessage({ id: 'bootCars.carVolume' }) },
    { key: 'actions', label: formatMessage({ id: 'bootCars.actions' }) },
  ]

  return columns
}

export const DataTableColumns = () => {
  const { formatMessage } = useIntl()

  const columns = [
    { key: 'carBrand.name', label: formatMessage({ id: 'bootCars.carBrand' }) },
    { key: 'imageUrl', label: formatMessage({ id: 'bootCars.carImage' }) },
    { key: 'models', label: formatMessage({ id: 'bootCars.carModel' }) },
    { key: 'carBody', label: formatMessage({ id: 'bootCars.carBody' }) },
    { key: 'modelYear', label: formatMessage({ id: 'bootCars.carYear' }) },
    { key: 'engine', label: formatMessage({ id: 'bootCars.carEngine' }) },
    { key: 'volume', label: formatMessage({ id: 'bootCars.carVolume' }) },
    { key: 'actions', label: formatMessage({ id: 'bootCars.actions' }) },
  ]

  return columns
}

export const DataTableConnectColumns = () => {
  const { formatMessage } = useIntl()

  const columns = [
    { key: 'carBrand.name', label: formatMessage({ id: 'bootCars.carBrand' }) },
    { key: 'imageUrl', label: formatMessage({ id: 'bootCars.carImage' }) },
    { key: 'models', label: formatMessage({ id: 'bootCars.carModel' }) },
    { key: 'carBody', label: formatMessage({ id: 'bootCars.carBody' }) },
    { key: 'modelYear', label: formatMessage({ id: 'bootCars.carYear' }) },
    { key: 'engine', label: formatMessage({ id: 'bootCars.carEngine' }) },
    { key: 'volume', label: formatMessage({ id: 'bootCars.carVolume' }) },
    { key: 'carConnect', label: formatMessage({ id: 'bootCars.carConnect' }) },
  ]

  return columns
}

export const TableClientsColumns = () => {
  const { formatMessage } = useIntl()

  const columns = [
    { key: 'name', label: formatMessage({ id: 'clients.name' }) },
    { key: 'lastName', label: formatMessage({ id: 'clients.lastName' }) },
    { key: 'VIN', label: formatMessage({ id: 'clients.VIN' }) },
    { key: 'tel', label: formatMessage({ id: 'clients.phone' }) },
    { key: 'clientCar.models', label: formatMessage({ id: 'clients.clientCar' }) },
    { key: 'clientCar.gosNumber', label: formatMessage({ id: 'clients.gosNumber' }) },
  ]

  return columns
}
