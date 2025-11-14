# 🚀 Cómo levantar el Backend en Local

## 📋 Requisitos Previos

Asegúrate de tener instalado:
- ✅ **Node.js** (versión 16 o superior)
- ✅ **npm** o **yarn**

Verifica las versiones:
```bash
node --version  # Debe ser v16+ 
npm --version
```

---

## 🔧 Pasos para Levantar el Backend

### 1️⃣ Navegar al directorio del backend

```bash
cd /Users/felipejeanfrancopalominosotelo/Desktop/Repositorios/entrega-final/actividad5-felipePalomino
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

Esto instalará todas las dependencias listadas en `package.json`:
- express
- cors
- dotenv
- jsonwebtoken
- mongoose
- sequelize
- socket.io
- nodemon
- y más...

### 3️⃣ Crear archivo de variables de entorno

```bash
cp .env.example .env
```

O créalo manualmente con este contenido:

```env
# Variables de entorno para desarrollo local
PORT=4001
JWT_SECRET=f67654cfd723b3990b173ed651b21703cd11b710b8cc843effd665eeacb19a21
JWT_REFRESH_SECRET=045f6addd6c1588922117b1ca54500e17188cba3929114a4d91633ef0a88be22
FRONTEND_URL=http://localhost:5173
```

### 4️⃣ Iniciar el servidor

```bash
npm start
```

Deberías ver algo como:
```
[nodemon] starting `node -r dotenv/config app.js`
Listening on 4001
```

---

## ✅ Verificar que funciona

### Opción 1: En el navegador
Abre: `http://localhost:4001`

Deberías ver:
```json
{
  "mensaje": "API Backend - Proyecto Final - Felipe Palomino Sotelo PERU",
  "version": "1.0",
  "endpoints": "/api/v1"
}
```

### Opción 2: Probar el endpoint de catálogo

En otra terminal:
```bash
curl http://localhost:4001/api/v1/catalogo
```

O en el navegador:
`http://localhost:4001/api/v1/catalogo`

Deberías ver el JSON con los 10 productos.

### Opción 3: Usar el script de test (modificado para local)

```bash
curl http://localhost:4001/api/v1/catalogo | jq '.'
```

---

## 🎯 Endpoints Disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `http://localhost:4001` | Info del API |
| GET | `http://localhost:4001/api/v1/catalogo` | Listado de productos |
| POST | `http://localhost:4001/api/v1/seguridad/...` | Endpoints de autenticación |

---

## 🔄 Desarrollo

El servidor usa **nodemon**, por lo que se reiniciará automáticamente cuando hagas cambios en el código.

Para detener el servidor:
- Presiona `Ctrl + C` en la terminal

Para reiniciar:
```bash
npm start
```

---

## 🐛 Solución de Problemas

### ❌ Error: "Cannot find module 'express'"

**Solución:** Instala las dependencias
```bash
npm install
```

### ❌ Error: "Port 4001 is already in use"

**Solución 1:** Usa otro puerto
```bash
# En .env
PORT=4002
```

**Solución 2:** Mata el proceso que usa el puerto
```bash
# Ver qué proceso usa el puerto 4001
lsof -i :4001

# Matar el proceso (reemplaza PID con el número que viste)
kill -9 PID
```

### ❌ Error: "JWT_SECRET is undefined"

**Solución:** Verifica que el archivo `.env` existe y tiene las variables
```bash
cat .env
```

### ❌ Error de CORS al consumir desde frontend

**Solución:** Verifica `config/cors.js` y asegúrate de que permite `http://localhost:5173`

---

## 🔗 Conectar con el Frontend

### 1. Levanta el backend (puerto 4001)
```bash
cd actividad5-felipePalomino
npm start
```

### 2. En otra terminal, levanta el frontend (puerto 5173)
```bash
cd actividad5_grupo_1_Finalizado
npm run dev
```

### 3. Configura el frontend para usar el backend local

Edita: `actividad5_grupo_1_Finalizado/src/config/api.js`

```javascript
const API_CONFIG = {
  BASE_URL: 'http://localhost:4001/api/v1',  // ← Cambiar a local
  ENDPOINTS: {
    CATALOGO: '/catalogo',
    SEGURIDAD: '/seguridad',
  },
  TIMEOUT: 10000,
};
```

O usa variables de entorno en el frontend (`.env`):
```env
VITE_API_URL=http://localhost:4001/api/v1
```

---

## 📝 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Iniciar servidor (con nodemon)
npm start

# Ver logs (si el servidor ya está corriendo)
# Los logs aparecen en la terminal donde ejecutaste npm start

# Probar endpoints
curl http://localhost:4001/api/v1/catalogo

# Ver procesos de Node
ps aux | grep node

# Matar todos los procesos de Node (cuidado!)
pkill -f node
```

---

## 🎉 ¡Listo!

Tu backend está corriendo en: `http://localhost:4001`

Ahora puedes:
1. ✅ Probar los endpoints con Postman o curl
2. ✅ Conectar el frontend local
3. ✅ Hacer cambios y ver los resultados inmediatamente
4. ✅ Debuggear con `console.log()`

---

## 📚 Estructura del Proyecto

```
actividad5-felipePalomino/
├── app.js                    ← Punto de entrada
├── routes.js                 ← Rutas principales
├── package.json              ← Dependencias
├── .env                      ← Variables de entorno (crear)
├── controllers/              ← Lógica de controladores
│   ├── catalogo.controller.js
│   └── seguridad.controller.js
├── services/                 ← Lógica de negocio
│   ├── catalogo.service.js   ← 10 productos aquí
│   └── seguridad.service.js
├── routes/                   ← Definición de rutas
│   ├── catalogo.routes.js
│   └── seguridad.routes.js
├── config/                   ← Configuración
│   ├── cors.js
│   ├── auth.js
│   └── mongoose.js
└── utils/                    ← Utilidades
    ├── constantes.js
    └── socket.js
```

---

**¿Necesitas ayuda?** Revisa los logs en la terminal donde ejecutaste `npm start` 🚀
