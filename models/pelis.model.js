import { DataTypes } from 'sequelize';
import sequelize from '../db/conect.js';

export const Pelis = sequelize.define(
	'peliculas',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: DataTypes.STRING,
		info: DataTypes.TEXT,
		url: DataTypes.STRING,
		image: DataTypes.STRING,
	},
	{
		tableName: 'peliculas',
		timestamps: true,
	}
);
