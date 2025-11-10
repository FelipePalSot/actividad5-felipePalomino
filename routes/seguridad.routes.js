import _express from "express";
import * as cseguridad from "../controllers/seguridad.controller.js";
import * as mauth from "../middleware/auth.middleware.js";
const router = _express.Router();


router.get("/", cseguridad.findAll);

router.get("/:id", cseguridad.findById);

router.post("/login", cseguridad.login);

router.post("/refresh-token", cseguridad.refreshToken);

router.post("/", cseguridad.create);

router.put("/:id", cseguridad.update);

router.get("/edad-promedio", cseguridad.findEdadPromedio);


router.delete("/:id", cseguridad.findEliminarxID);

export default router;
