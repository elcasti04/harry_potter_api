import { DataTypes } from 'sequelize';
import db from '../db/conect.js';

export const Pelis = db.define('peliculas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  info: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
