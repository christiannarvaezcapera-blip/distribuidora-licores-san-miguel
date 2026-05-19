const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
console.log("VARIABLE:", process.env.MONGO_URI);
const express = require('express');
const cors = require('cors');


const connectDB = require('./config/db');
const productoRoutes = require('./routes/productoRoutes');

dotenv.config();

const app = express();

// Conectar MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/productos', productoRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.send('API Distribuidora San Miguel funcionando');
});

// Puerto
const PORT = process.env.PORT || 3000;

// Levantar servidor
app.listen(PORT, () => {
   console.log('Servidor corriendo en el puerto ' + PORT);
});