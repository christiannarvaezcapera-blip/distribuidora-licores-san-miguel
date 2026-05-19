const Producto = require('../models/Producto');

// Crear producto
const crearProducto = async (req, res) => {
    try {

        const producto = new Producto(req.body);

        await producto.save();

        res.status(201).json(producto);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al crear producto',
            error
        });

    }
};

// Obtener productos
const obtenerProductos = async (req, res) => {
    try {

        const productos = await Producto.find();

        res.json(productos);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al obtener productos',
            error
        });

    }
};

module.exports = {
    crearProducto,
    obtenerProductos
};