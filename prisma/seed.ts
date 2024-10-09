import {
  bootDustCover,
  car,
  carBrand,
  form,
  type,
  name,
  mainButtonsData,
  clientCarToSeed,
  clientCarSeed,
} from './constants'
import { prisma } from './prisma-client'
import { hashSync } from 'bcrypt'

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User',
        email: 'user@user.ua',
        password: hashSync('userPassword', 10),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'user2@user.ua',
        password: hashSync('adminPassword', 10),
        role: 'ADMIN',
      },
    ],
  })

  await prisma.carBrand.createMany({
    data: carBrand,
  })

  await prisma.car.createMany({
    data: car,
  })

  await prisma.name.createMany({
    data: name,
  })

  await prisma.form.createMany({
    data: form,
  })

  await prisma.type.createMany({
    data: type,
  })

  await prisma.bootDustCover.createMany({
    data: bootDustCover,
  })

  await prisma.mainButton.createMany({
    data: mainButtonsData,
  })

  const oilTo1 = await prisma.oilTo.create({
    data: {
      carBrand: {
        connect: { id: 1 }, //  ID первого бренда автомобиля
      },
      cars: {
        connect: { id: 1 }, //  ID первого автомобиля
      },
    },
  })

  const oilTo2 = await prisma.oilTo.create({
    data: {
      carBrand: {
        connect: { id: 2 }, //  ID второго бренда автомобиля
      },
      cars: {
        connect: { id: 2 }, //  ID второго автомобиля
      },
    },
  })

  const oilToInfo1 = await prisma.oilToInfo.create({
    data: {
      engine: '5W-40',
      automaticTransmission: '111111111111',
      manualTransmission: '222222222222222',
      car: {
        connect: { id: 1 }, // Предположим, что это ID первого автомобиля
      },
    },
  })

  const oilToInfo2 = await prisma.oilToInfo.create({
    data: {
      engine: '5W-30',
      automaticTransmission: '33333333333333333',
      manualTransmission: '4444444444444444444',
      car: {
        connect: { id: 2 }, // Предположим, что это ID второго автомобиля
      },
    },
  })

  await prisma.clients.createMany({
    data: [
      {
        name: 'John',
        lastName: 'Doe',
        VIN: '12345678901234567',
        tel: '38063123820',
      },
      {
        name: 'Jane',
        lastName: 'Smith',
        VIN: '09876543210987654',
        tel: '380730503896',
      },
    ],
  })

  await prisma.clientCar.createMany({
    data: clientCarSeed,
  })

  // Создаем автомобили для клиентов
  const clientCar1 = await prisma.clientCar.create({
    data: {
      client: {
        connect: { id: 1 },
      },
    },
  })

  await prisma.clientCarTo.createMany({
    data: clientCarToSeed,
  })

  const clientCarTo1 = await prisma.clientCarTo.create({
    data: {
      clientTo: {
        connect: { id: 1 },
      },
    },
  })

  const car1 = await prisma.car.update({
    where: { id: 1 },
    data: {
      bootDustCover: {
        connect: { id: 1 },
      },
    },
  })

  const car2 = await prisma.car.update({
    where: { id: 2 },
    data: {
      bootDustCover: {
        connect: { id: 2 }, // Предположим, что это ID второго BootDustCover
      },
    },
  })
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "CarBrand" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Car" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Name" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Form" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Type" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "BootDustCover" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "OilTo" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "OilToInfo" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Clients" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "ClientCar" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "ClientCarTo" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "MainButton" RESTART IDENTITY CASCADE`
}

async function main() {
  try {
    await down()
    await up()
  } catch (e) {
    console.log(e)
  }
}

main().then(async () => {
  await prisma.$disconnect()
})
