import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function PUT(request: Request) {
  const data = await request.json()

  try {
    // Обновляем данные клиента
    const updatedClient = await prisma.clients.update({
      where: { id: data.id },
      data: {
        name: data.name,
        lastName: data.lastName,
        VIN: data.VIN,
        tel: data.tel,
      },
    })

    // Обновляем данные связанной машины
    const updatedClientCar = await prisma.clientCar.update({
      where: { clientId: data.id },
      data: {
        gosNumber: data.clientCar.gosNumber,
        models: data.clientCar.models,
      },
    })

    return new Response(JSON.stringify({ updatedClient, updatedClientCar }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update client profile' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
