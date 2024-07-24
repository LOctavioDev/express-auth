// * EXPRESS COMO FRAMEWORK DE BACKEND
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();

// * DEFINIMOS EL PUERTO Y HACEMOS UNA INSTANCIA DE EXPRESS
const port = process.env.PORT || 8000;
const app = express();

// * MIDDLEWARES BASICOS
app.use(morgan('dev'));

// * DEFINIMOS UNA RUTA PRICIPAL DE PRUEBA
app.get('/', (req, res) => {
  res.send('Server is ready!');
});

// * HACEMOS ESCUCHAR EL SERVIDOR EN EL PUERTO 3000 Y MANDAMOS UN MENSAJE
app.listen(port, () => console.log(`Server running on port ${port}`));
