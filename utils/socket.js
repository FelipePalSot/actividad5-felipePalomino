import {Server} from 'socket.io';
import {FRONTEND_URL} from "./constantes.js";


let io;

export const configSocket = function(server){
    console.log("io.configSocket");
    io= new Server(server,{
         cors: {origin: FRONTEND_URL} // Permitir conexiones desde cualquier origin (ajuste en producción
    });

io.on("connnection", (socket) => {  // establecemos la conexión al socket

console.log("Usuario conectado al socket" , socket.id);
// Escuchar evento para matricular un usuario especifico

socket.on("matriculado" , (usuario) => {

socket.join(usuario); // Establecemos el tunel de comunicación
console.log(`usaurio ${usuario} matriculado`);

});

socket.on("disconnect", () => {
console.log("Usuario desconectado del socket: ", socket.id);

});

});

// Exportamos io para usarlo en otras partes (ejemplo : envío de notificaciones)

return io;

}

export const getIO = function(){
  if(!io){
     throw new Error("Socket.io no inicializado");
  }
    return io;

}