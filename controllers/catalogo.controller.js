import { obtenerProductos } from "../services/catalogo.service.js";

export const getProductos = async (req, res) => {
    try {
        const productos = await obtenerProductos();
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ 
            mensaje: "Error al obtener el catálogo de productos",
            error: error.message 
        });
    }
};
