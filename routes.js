import _express from "express";
import rseguridad from "./routes/seguridad.routes.js";


const router= _express.Router();

//... secciones ...
router.use('/seguridad', rseguridad);
export default router;
