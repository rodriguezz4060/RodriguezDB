import { BootDustCover, Car, CarBrand, ClientCar, ClientCarTo, Clients } from '@prisma/client'

// Определяем тип для машины с брендом
export type CarWithBrand = Car & {
  carBrand: CarBrand
}

// Определяем тип для пыльника с машинами и брендами
export type BootWithRelation = BootDustCover & {
  cars: CarWithBrand[]
  name: { name: string | null }
  form: {
    id: number
    form: string | null
  }

  type: {
    id: number
    type: string | null
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
  clientCar?: {
    id: number
    gosNumber: string | null
    models: string | null
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
}
