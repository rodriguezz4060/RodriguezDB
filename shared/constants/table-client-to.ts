import { useIntl } from 'react-intl'

export const MaintenanceDataTable = (clientCarTo: any) => {
  const { formatMessage } = useIntl()

  // Функция для проверки, является ли значение пустым
  const isEmpty = (value: string) => {
    return value === null || value === undefined || value.trim() === ''
  }

  const tableMaintenanceData = [
    {
      type: 'Масло ДВС',
      partNumber: clientCarTo.engineOilPartNumber,
      viscosityIndex: clientCarTo.engineOil,
      volume: clientCarTo.engineOilVolume,
    },
    {
      type: 'Масло АКПП',
      partNumber: clientCarTo.automaticTransmissionOilPartNumber,
      viscosityIndex: clientCarTo.automaticTransmissionOil,
      volume: clientCarTo.automaticTransmissionOilVolume1,
    },
    {
      type: 'Масло МКПП',
      partNumber: clientCarTo.mechanicTransmissionOilPartNumber,
      viscosityIndex: clientCarTo.mechanicTransmissionOil,
      volume: clientCarTo.mechanicTransmissionOilVolume,
    },
    {
      type: 'Масло раздаточной коробки',
      partNumber: clientCarTo.transferCaseOilPartNumber,
      viscosityIndex: clientCarTo.transferCaseOil,
      volume: clientCarTo.transferCaseOilVolume,
    },
    {
      type: 'Масло редуктора переднего моста',
      partNumber: clientCarTo.frontAxleGearboxOilPartNumber,
      viscosityIndex: clientCarTo.frontAxleGearboxOil,
      volume: clientCarTo.frontAxleGearboxOilVolume,
    },
    {
      type: 'Масло редуктора заднего моста',
      partNumber: clientCarTo.rearAxleGearboxOilPartNumber,
      viscosityIndex: clientCarTo.rearAxleGearboxOil,
      volume: clientCarTo.rearAxleGearboxOilVolume,
    },
    {
      type: 'Антифриз',
      partNumber: clientCarTo.antifreezePartNumber,
      viscosityIndex: clientCarTo.antifreeze,
      volume: clientCarTo.antifreezeVolume,
    },
    {
      type: 'Жидкость ГУР',
      partNumber: clientCarTo.steeringFluidPartNumber,
      viscosityIndex: clientCarTo.steeringFluid,
      volume: clientCarTo.steeringFluidVolume,
    },
  ].filter(item => {
    // Проверяем, что хотя бы одно поле не пустое
    return !isEmpty(item.partNumber) || !isEmpty(item.viscosityIndex) || !isEmpty(item.volume)
  })

  return tableMaintenanceData
}

export const TableColumns = () => {
  const { formatMessage } = useIntl()

  const columns = [
    { key: 'type', label: 'ТО' },
    { key: 'viscosityIndex', label: 'Индекс вязкости' },
    { key: 'volume', label: 'Заправочный объем' },
    { key: 'partNumber', label: 'Каталожный номер' },
    { key: 'actions', label: 'Стоимость масла' },
  ]

  return columns
}
