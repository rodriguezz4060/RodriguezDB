import { useIntl } from 'react-intl'

export const MaintenanceDataTable = (clientCarTo: any, clientCar: any) => {
  const { formatMessage } = useIntl()

  // Функция для проверки, является ли значение пустым
  const isEmpty = (value: string) => {
    return value === null || value === undefined || value.trim() === ''
  }

  const tableMaintenanceData = [
    {
      type: formatMessage({ id: 'clientTo.engineOil' }),
      partNumber: clientCarTo.engineOilPartNumber,
      viscosityIndex: clientCarTo.engineOil,
      volume: clientCarTo.engineOilVolume,
    },
    {
      type: formatMessage({ id: 'clientTo.automaticTransmissionOil' }),
      partNumber: clientCarTo.automaticTransmissionOilPartNumber,
      viscosityIndex: clientCarTo.automaticTransmissionOil,
      volume: clientCarTo.automaticTransmissionOilVolume1,
    },
    {
      type: formatMessage({ id: 'clientTo.mechanicTransmissionOil' }),
      partNumber: clientCarTo.mechanicTransmissionOilPartNumber,
      viscosityIndex: clientCarTo.mechanicTransmissionOil,
      volume: clientCarTo.mechanicTransmissionOilVolume,
    },
    {
      type: formatMessage({ id: 'clientTo.transferCaseOil' }),
      partNumber: clientCarTo.transferCaseOilPartNumber,
      viscosityIndex: clientCarTo.transferCaseOil,
      volume: clientCarTo.transferCaseOilVolume,
    },
    {
      type: formatMessage({ id: 'clientTo.axleGearboxFront' }),
      partNumber: clientCarTo.frontAxleGearboxOilPartNumber,
      viscosityIndex: clientCarTo.frontAxleGearboxOil,
      volume: clientCarTo.frontAxleGearboxOilVolume,
    },
    {
      type: formatMessage({ id: 'clientTo.rearAxleGearboxOil' }),
      partNumber: clientCarTo.rearAxleGearboxOilPartNumber,
      viscosityIndex: clientCarTo.rearAxleGearboxOil,
      volume: clientCarTo.rearAxleGearboxOilVolume,
    },
    {
      type: formatMessage({ id: 'clientTo.antifreeze' }),
      partNumber: clientCarTo.antifreezePartNumber,
      viscosityIndex: clientCarTo.antifreeze,
      volume: clientCarTo.antifreezeVolume,
    },
    {
      type: formatMessage({ id: 'clientTo.steeringFluid' }),
      partNumber: clientCarTo.steeringFluidPartNumber,
      viscosityIndex: clientCarTo.steeringFluid,
      volume: clientCarTo.steeringFluidVolume,
    },
    {
      type: formatMessage({ id: 'clientTo.oilFilter' }),
      partNumber: clientCar.oilFilter,
    },
    {
      type: formatMessage({ id: 'clientTo.airFilter' }),
      partNumber: clientCar.airFilter,
    },
    {
      type: formatMessage({ id: 'clientTo.fuelFilter' }),
      partNumber: clientCar.fuelFilter,
    },
    {
      type: formatMessage({ id: 'clientTo.cabinFilter' }),
      partNumber: clientCar.cabinFilter,
    },
    {
      type: formatMessage({ id: 'clientTo.frontBrake' }),
      partNumber: clientCar.frontBrake,
    },
    {
      type: formatMessage({ id: 'clientTo.rearBrake' }),
      partNumber: clientCar.rearBrake,
    },
    {
      type: formatMessage({ id: 'clientTo.handbrakeBrakePads' }),
      partNumber: clientCar.handbrakeBrakePads,
    },
    {
      type: formatMessage({ id: 'clientTab.automaticTransmissionFilter' }),
      partNumber: clientCar.automaticTransmissionFilter,
    },
    {
      type: formatMessage({ id: 'clientTab.automaticTransmissionOilPanGasket' }),
      partNumber: clientCar.automaticTransmissionOilPanGasket,
    },
    {
      type: formatMessage({ id: 'clientTab.automaticTransmissionFillerGasket' }),
      partNumber: clientCar.automaticTransmissionFillerGasket,
    },
    {
      type: formatMessage({ id: 'clientTo.automaticTransmissionOilPanGasket2' }),
      partNumber: clientCar.automaticTransmissionOilPanGasket2,
    },
    {
      type: formatMessage({ id: 'clientTo.automaticTransmissionFilter2' }),
      partNumber: clientCar.automaticTransmissionFilter2,
    },
    {
      type: formatMessage({ id: 'clientTab.transmissionDrainPlug' }),
      partNumber: clientCar.transmissionDrainPlug,
    },
    {
      type: formatMessage({ id: 'clientTab.transmissionDrainPlugGasket' }),
      partNumber: clientCar.transmissionDrainPlugGasket,
    },
    {
      type: formatMessage({ id: 'clientTab.waterPump' }),
      partNumber: clientCar.waterPump,
    },
    {
      type: formatMessage({ id: 'clientTab.thermostat' }),
      partNumber: clientCar.thermostat,
    },
    {
      type: formatMessage({ id: 'clientTo.sparkPlug' }),
      partNumber: clientCar.sparkPlug,
    },
    {
      type: formatMessage({ id: 'clientTo.driversWiperModal' }),
      partNumber: clientCar.driversWiper,
    },
    {
      type: formatMessage({ id: 'clientTo.passengerWiper' }),
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
    { key: 'type', label: formatMessage({ id: 'clientTo.type' }) },
    { key: 'viscosityIndex', label: formatMessage({ id: 'clientTo.viscosityIndex' }) },
    { key: 'volume', label: formatMessage({ id: 'clientTo.volume' }) },
    { key: 'partNumber', label: formatMessage({ id: 'clientTo.partNumber' }) },
    { key: 'actions', label: formatMessage({ id: 'clientTo.actions' }) },
  ]

  return columns
}
