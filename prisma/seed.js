const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.missionCommander.upsert({
      where: { name: 'Carlo Gilmar' },
      update: {},
      create: {
        name: 'Carlo Gilmar',
				username: 'CarloGilmar',
				mainStack: 'Node'
      },
    });

    const woopa1 = await prisma.missionCommander.upsert({
      where: { name: 'Fernanda Ochoa' },
      update: {},
      create: {
        name: 'Fernanda Ochoa',
				username: 'Fer8a',
				mainStack: 'Java'
      },
    });

    const woopa2 = await prisma.missionCommander.upsert({
      where: { name: 'Rodrigo Martinez' },
      update: {},
      create: {
        name: 'Rodrigo Martinez',
				username: 'Romarplas',
				mainStack: 'FrontEnd'
      },
    });

    const woopa3 = await prisma.missionCommander.upsert({
      where: { name: 'Zoe Perez' },
      update: {},
      create: {
        name: 'Zoe Perez',
				username: 'ZoePower',
				mainStack: 'DevOps'
      },
    });

    

    console.log('Create 4 mission Commanders');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();