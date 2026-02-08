import { Pelis } from '../models/pelis.model.js';

export const getAllPelis = async (req, res) => {
	const peliculas = await Pelis.findAll();
	res.json(peliculas);
};

export const getOnePeli = async (req, res) => {
	const { id } = req.params;
	try {
		const pelicula = await Pelis.findByPk(id);
		if (pelicula) {
			res.json(pelicula);
		} else {
			res.status(404).send(`pelicula ${id} no encontrada`);
		}
	} catch (error) {
		console.log(error);
        res.status(500).send('error interno del servidor')
	}
};

export const createPeli = async (req, res) => {
    const { name, info, url, image } = req.body
    const pelicula = await Pelis.create({
        name,
        info,
        url,
        image
    })
    res.send({ message: 'pelicula creada', 'pelicula': pelicula})
}

