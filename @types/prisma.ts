import { BootDustCover, Car, CarBrand, ClientCar, ClientCarTo, Clients } from '@prisma/client'

// Определяем тип для машины с брендом
export type CarWithBrand = Car & {
  carBrand: CarBrand
}

// Определяем тип для пыльника с машинами и брендами
export type BootWithRelation = BootDustCover & {
  cars: CarWithBrand[]
  name: { name: string }
  form: {
    id: number
    form: string
  }

  type: {
    id: number
    type: string
  }
}

export type CarWithBoot = Car & {
  carBrand: CarBrand
  bootDustCoverId?: number
  bootDustCover: BootDustCover[]
}

export type BootWithCar = BootDustCover & {
  bootDustCoverId?: number
  cars: CarWithBrand[]
}

export type ClientsCar = ClientCar & {}

export type ClientsWithCar = Clients & {
  clientCar?: ClientCar | null
  clientCarTo?: ClientCarTo | null
}

export type ClientsInfo = Clients & {
  clientCarTo?: ClientCarTo | null
  clientCar: {
    id: number
    gosNumber: string
    models: string
    frontBrake: string
    rearBrake: string
    handbrakeBrakePads: string
    waterPump: string
    thermostat: string
    sparkPlug: string
    driversWiper: string
    passengerWiper: string
    oilFilter: string
    airFilter: string
    fuelFilter: string
    cabinFilter: string
    automaticTransmissionOilPanGasket: string
    automaticTransmissionFilter: string
    automaticTransmissionFillerGasket: string
    automaticTransmissionOilPanGasket2: string
    automaticTransmissionFilter2: string
    transmissionDrainPlug: string
    transmissionDrainPlugGasket: string
    ignitionCoil: string
  }
}
