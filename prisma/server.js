const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// cORS
const cors = require('cors');

const corsOptions = {
  origin: "https://localhost:8081", optionsSuccessStatus: 200,
};

app.use(cors());
app.options('*',cors());

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

app.get('/mc', async (req, res) => {
    const allmc =  await prisma.missionCommander.findMany({});
    res.json(allmc);
  });

app.get('/mc/:id', async (req, res) => {
    const id = req.params.id;
    const missionCommander = await prisma.missionCommander.findUnique({where: {id: parseInt(id)}});
    res.json(missionCommander);
  });

app.post('/mc', async (req, res) => {
    const missionCommander = {
      name: req.body.name,
      username: req.body.username,
      mainStack: req.body.mainStack
     };
    const message = 'missionCommander creado.';
    await prisma.missionCommander.create({data: missionCommander});
    return res.json({message});
});

app.put('/mc/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.missionCommander.update({
		where: {
			id: id
		},
		data: {
			mc: req.body.mc
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/mc/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.missionCommander.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});