// * EXPRESS COMO FRAMEWORK DE BACKEND
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import userRoutes from './src/routes/userRoutes.js';

// * CONFIGURAMOS EL DOTENV
dotenv.config();

import connectDB from './src/config/db.js';
import { notFount, errorHandler } from './src/middleware/errorMiddleware.js';

connectDB();

// * DEFINIMOS EL PUERTO Y HACEMOS UNA INSTANCIA DE EXPRESS
const port = process.env.PORT || 8000;
const app = express();

// * DEFINIMOS UNA RUTA PRICIPAL DE PRUEBA
app.get('/', (req, res) => {
  res.send('Server is ready!');
});

// * MIDDLEWARES 
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api/users', userRoutes);
app.use(notFount);
app.use(errorHandler);

// * HACEMOS ESCUCHAR EL SERVIDOR EN EL PUERTO 3000 Y MANDAMOS UN MENSAJE
app.listen(port, () => console.log(`Server running on port ${port}`));
