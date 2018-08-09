
require('dotenv').config();

// Credenciales de desarrollo
const mongoose = require('mongoose');
// const DB_NAME = 'iron-street-music';
// const MONGO_URI = `mongodb://localhost:27017/${DB_NAME}`;
//


//   Credenciales de producción
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOSTNAME = process.env.DB_HOSTNAME;
const DB_PORT = process.env.DB_PORT;
const MONGO_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`;


mongoose.connect(MONGO_URI);
mongoose.connection.on('connected', () => {
    console.info(`Connected to database: ${MONGO_URI}`);
});
mongoose.connection.on('error', (error) => {
    console.error('Database connection error:', error);
});
