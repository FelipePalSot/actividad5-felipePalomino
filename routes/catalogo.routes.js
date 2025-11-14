import _express from "express";
import { getProductos } from "../controllers/catalogo.controller.js";

const router = _express.Router();

// GET /api/v1/catalogo - Obtener todos los productos
router.get('/', getProductos);

export default router;
