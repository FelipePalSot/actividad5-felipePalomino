import _express from "express";
import _bodyParser from "body-parser";
import _cors from "./config/cors.js";

import PUERTO from "./utils/constantes.js";
import api from "./routes.js"
import { configSocket } from "./utils/socket.js";

const app= _express();
app.use(_bodyParser.json());
app.use(_bodyParser.urlencoded({ extended: true, 
    type: 'application/x-www-form-urlencoded' }));
app.use(_cors);

// Servir archivos estáticos (opcional - para la página de bienvenida)
app.use(_express.static('public'));


//... ruta raíz ...
app.get("/", (req, res) => {
    res.json({
        mensaje: "API Backend - Proyecto Final - Felipe Palomino Sotelo PERU",
        version: "1.0",
        endpoints: {
            "raiz": "/api/v1",
            "catalogo": "/api/v1/catalogo",
            "seguridad": "/api/v1/seguridad"
        },
        info: "Para ver los productos, visita: /api/v1/catalogo"
    });
});

//... endpoints ...
app.use("/api/v1", api);

//... servidor ...
const server = app.listen(PUERTO, () => {
    console.log('Listening on '+PUERTO);
});

configSocket(server);
