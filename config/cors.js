import _cors from "cors";
import {FRONTEND_URL} from "../utils/constantes.js";

console.log("CORS: "+FRONTEND_URL);

// Lista de orígenes permitidos
const allowedOrigins = [
    'http://localhost:3001',
    'http://localhost:5173',
    'http://localhost:5174',
    'https://actividad5-grupo-1-finalizado-6qb0j5i32.vercel.app',
    'https://actividad5-grupo-1-finalizado.vercel.app',  
    process.env.FRONTEND_URL, 
].filter(Boolean); 

const corsOptions = {
    origin: function (origin, callback) {
        
        if (!origin) {
            return callback(null, true);
        }
        
        
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log('CORS: Origin no permitido:', origin);
            callback(new Error('No permitido por CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

export default _cors(corsOptions);