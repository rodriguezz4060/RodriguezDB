export interface OilFormData {
  id: number

  engineOil: string | null
  engineOilVolume: string | null
  engineOilPartNumber: string | null

  automaticTransmissionOil: string | null
  automaticTransmissionOilVolume1: string | null
  automaticTransmissionOilPartNumber: string | null

  mechanicTransmissionOil: string | null
  mechanicTransmissionOilVolume: string | null
  mechanicTransmissionOilPartNumber: string | null

  transferCaseOil: string | null
  transferCaseOilVolume: string | null
  transferCaseOilPartNumber: string | null

  frontAxleGearboxOil: string | null
  frontAxleGearboxOilVolume: string | null
  frontAxleGearboxOilPartNumber: string | null

  rearAxleGearboxOil: string | null
  rearAxleGearboxOilVolume: string | null
  rearAxleGearboxOilPartNumber: string | null

  antifreeze: string | null
  antifreezeVolume: string | null
  antifreezePartNumber: string | null

  steeringFluid: string | null
  steeringFluidVolume: string | null
  steeringFluidPartNumber: string | null
}

export interface ConsumablesFormData {
  id: number
  frontBrake: string | null
  rearBrake: string | null
  handbrakeBrakePads: string | null
  waterPump: string | null
  thermostat: string | null
  sparkPlug: string | null
  driversWiper: string | null
  passengerWiper: string | null
  oilFilter: string | null
  airFilter: string | null
  fuelFilter: string | null
  cabinFilter: string | null
  automaticTransmissionOilPanGasket: string | null
  automaticTransmissionFilter: string | null
  automaticTransmissionFillerGasket: string | null
  automaticTransmissionOilPanGasket2: string | null
  automaticTransmissionFilter2: string | null
  transmissionDrainPlug: string | null
  transmissionDrainPlugGasket: string | null
  ignitionCoil: string | null
}
