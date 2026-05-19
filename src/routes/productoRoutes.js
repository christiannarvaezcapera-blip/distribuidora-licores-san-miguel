const express = require('express');

const router = express.Router();

const {
    crearProducto,
    obtenerProductos
} = require('../controllers/productoController');

// Ruta para crear producto
router.post('/', crearProducto);

// Ruta para obtener productos
router.get('/', obtenerProductos);

module.exports = router;