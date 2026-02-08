import app from './app.js';
import sequelize from '../db/conect.js';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
	try {
		if (process.env.DB_URL) {
			console.log('conectando base de datos...');
			await sequelize.authenticate();
			await sequelize.sync({ force: false });
			await sequelize.sync({ alter: true });
			console.log('base de datos conectada');
		}
		app.listen(PORT, () => {
			console.log(`servidor corriendo en http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(`error al conectar base de datos ${error}`);
		process.exit(1);
	}
};

startServer();
