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


//... ruta raíz ...
app.get("/", (req, res) => {
    res.json({
        mensaje: "API Backend - Proyecto Final - Felipe Palomino Sotelo",
        version: "1.0",
        endpoints: "/api/v1"
    });
});

//... endpoints ...
app.use("/api/v1", api);

//... servidor ...
const server = app.listen(PUERTO, () => {
    console.log('Listening on '+PUERTO);
});

configSocket(server);
