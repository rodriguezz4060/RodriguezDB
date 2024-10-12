import { useIntl } from 'react-intl'

export const MaintenanceDataTable = (clientCarTo: any, clientCar: any) => {
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
    {
      type: 'Масленный фильтр',
      partNumber: clientCar.oilFilter,
    },
    {
      type: 'Воздушный фильтр',
      partNumber: clientCar.airFilter,
    },
    {
      type: 'Топливный фильтр',
      partNumber: clientCar.fuelFilter,
    },
    {
      type: 'Фильтр салона',
      partNumber: clientCar.cabinFilter,
    },
    {
      type: 'Передние колодки',
      partNumber: clientCar.frontBrake,
    },
    {
      type: 'Задние колодки',
      partNumber: clientCar.rearBrake,
    },
    {
      type: 'Колодки ручника',
      partNumber: clientCar.handbrakeBrakePads,
    },
    {
      type: 'Фильтр АКПП',
      partNumber: clientCar.automaticTransmissionFilter,
    },
    {
      type: 'Прокладка поддона АКПП',
      partNumber: clientCar.automaticTransmissionOilPanGasket,
    },
    {
      type: 'Прокладка фильтра АКПП',
      partNumber: clientCar.automaticTransmissionFillerGasket,
    },
    {
      type: 'Прокладка фильтра тонкой очистки АКПП',
      partNumber: clientCar.automaticTransmissionOilPanGasket2,
    },
    {
      type: 'Фильтр тонкой очистки АКПП',
      partNumber: clientCar.automaticTransmissionFilter2,
    },
    {
      type: 'Сливная пробка АКПП',
      partNumber: clientCar.transmissionDrainPlug,
    },
    {
      type: 'Прокладка сливной пробки АКПП',
      partNumber: clientCar.transmissionDrainPlugGasket,
    },
    {
      type: 'Водяная помпа',
      partNumber: clientCar.waterPump,
    },
    {
      type: 'Термостат',
      partNumber: clientCar.thermostat,
    },
    {
      type: 'Свеча зажигания',
      partNumber: clientCar.sparkPlug,
    },
    {
      type: 'Дворник водителя',
      partNumber: clientCar.driversWiper,
    },
    {
      type: 'Дворник пасажира',
      partNumber: clientCar.passengerWiper,
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
