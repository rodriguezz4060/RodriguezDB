import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {
  const cars = await prisma.clientCarTo.findMany()

  return NextResponse.json(cars)
}

export async function PUT(req: Request) {
  const { id, ...data } = await req.json()

  console.log('Received data:', { id, data }) // Логирование данных

  try {
    // Разделяем данные на две части
    const {
      frontBrake,
      rearBrake,
      handbrakeBrakePads,
      waterPump,
      thermostat,
      sparkPlug,
      driversWiper,
      passengerWiper,
      oilFilter,
      airFilter,
      fuelFilter,
      cabinFilter,
      automaticTransmissionOilPanGasket,
      automaticTransmissionFilter,
      automaticTransmissionFillerGasket,
      automaticTransmissionOilPanGasket2,
      automaticTransmissionFilter2,
      transmissionDrainPlug,
      transmissionDrainPlugGasket,
      ...clientCarToData
    } = data

    // Обновление данных в таблице ClientCarTo
    const updateClientCarTo = await prisma.clientCarTo.update({
      where: { id: Number(id) },
      data: clientCarToData,
    })

    console.log('Updated ClientCarTo:', updateClientCarTo) // Логирование обновленных данных

    // Обновление данных в таблице ClientCar
    const updateClientCar = await prisma.clientCar.update({
      where: { id: Number(id) }, // Используем тот же id для обновления ClientCar
      data: {
        frontBrake,
        rearBrake,
        handbrakeBrakePads,
        waterPump,
        thermostat,
        sparkPlug,
        driversWiper,
        passengerWiper,
        oilFilter,
        airFilter,
        fuelFilter,
        cabinFilter,
        automaticTransmissionOilPanGasket,
        automaticTransmissionFilter,
        automaticTransmissionFillerGasket,
        automaticTransmissionOilPanGasket2,
        automaticTransmissionFilter2,
        transmissionDrainPlug,
        transmissionDrainPlugGasket,
      },
    })

    console.log('Updated ClientCar:', updateClientCar) // Логирование обновленных данных

    return NextResponse.json({ updateClientCarTo, updateClientCar }, { status: 200 })
  } catch (error) {
    console.error('Error updating client car to:', error)
    return NextResponse.json({ message: 'Failed to update car' }, { status: 500 })
  }
}
