import sequelize from '../db/conect.js';
import { Pelis } from '../models/pelis.model.js';

export const getAllPelis = async (req, res) => {
	try {
		await sequelize.authenticate(); 
		const peliculas = await Pelis.findAll();
		res.json(peliculas);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error interno del servidor' });
	}
};

export const getOnePeli = async (req, res) => {
	const { id } = req.params;
	try {
		await sequelize.authenticate(); 
		const pelicula = await Pelis.findByPk(id);

		if (pelicula) {
			res.json(pelicula);
		} else {
			res.status(404).json({ message: `pelicula ${id} no encontrada` });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error interno del servidor' });
	}
};

export const createPeli = async (req, res) => {
	try {
		await sequelize.authenticate(); 
		const { name, info, url, image } = req.body;

		const pelicula = await Pelis.create({
			name,
			info,
			url,
			image,
		});

		res.status(201).json({
			message: 'pelicula creada',
			pelicula,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error interno del servidor' });
	}
};
