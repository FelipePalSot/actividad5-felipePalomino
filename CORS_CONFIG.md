# 🔐 Guía de Configuración CORS

## Problema Resuelto

**Error anterior:**
```
Access to fetch at 'https://felipepalomino.lat/api/v1/catalogo' from origin 
'https://actividad5-grupo-1-finalizado-6qb0j5i32.vercel.app' has been blocked by CORS policy
```

## Solución Implementada

Se actualizó la configuración de CORS para aceptar múltiples orígenes.

### Archivos Modificados

#### 1. `config/cors.js`

Ahora acepta múltiples orígenes:
- `http://localhost:3001` - Desarrollo local (puerto anterior)
- `http://localhost:5173` - Vite dev server
- `http://localhost:5174` - Vite dev server (puerto alternativo)
- `https://actividad5-grupo-1-finalizado-6qb0j5i32.vercel.app` - Vercel
- Cualquier URL configurada en `process.env.FRONTEND_URL`

#### 2. `utils/constantes.js`

La variable `FRONTEND_URL` ahora puede configurarse por variable de entorno.

## 🚀 Pasos para Desplegar

### Paso 1: Configurar Variables de Entorno en Producción

En tu servidor de producción (donde corre el backend), configura la variable de entorno:

```bash
FRONTEND_URL=https://actividad5-grupo-1-finalizado-6qb0j5i32.vercel.app
```

### Paso 2: Actualizar el Backend

```bash
cd actividad5-felipePalomino
git add .
git commit -m "fix: actualizar configuración CORS para Vercel"
git push origin main
```

### Paso 3: Verificar Despliegue

Después de que GitHub Actions despliegue los cambios, verifica:

```bash
curl -I https://felipepalomino.lat/api/v1/catalogo \
  -H "Origin: https://actividad5-grupo-1-finalizado-6qb0j5i32.vercel.app"
```

Deberías ver en los headers:
```
Access-Control-Allow-Origin: https://actividad5-grupo-1-finalizado-6qb0j5i32.vercel.app
```

### Paso 4: Probar el Frontend en Vercel

1. Ve a: `https://actividad5-grupo-1-finalizado-6qb0j5i32.vercel.app`
2. Abre DevTools (F12)
3. Ve a la pestaña Console
4. No deberías ver errores de CORS
5. Los productos deberían cargarse correctamente

## 🔧 Para Desarrollo Local

Si necesitas probar localmente, crea un archivo `.env`:

```bash
cd actividad5-felipePalomino
cp .env.example .env
```

Edita `.env` y configura:
```bash
FRONTEND_URL=http://localhost:5173
```

Luego reinicia el servidor:
```bash
node app.js
```

## 📝 Agregar Nuevos Orígenes

Si despliegas el frontend en otro dominio, edita `config/cors.js`:

```javascript
const allowedOrigins = [
    'http://localhost:3001',
    'http://localhost:5173',
    'http://localhost:5174',
    'https://actividad5-grupo-1-finalizado-6qb0j5i32.vercel.app',
    'https://tu-nuevo-dominio.com',  // ← Agregar aquí
    process.env.FRONTEND_URL,
].filter(Boolean);
```

## ✅ Verificación

Para verificar que CORS funciona correctamente:

### Opción 1: Desde el navegador

1. Abre tu frontend en Vercel
2. Abre DevTools (F12) → Network
3. Busca la petición a `/api/v1/catalogo`
4. Ve los Response Headers
5. Verifica que `Access-Control-Allow-Origin` tenga tu dominio

### Opción 2: Con curl

```bash
curl -v https://felipepalomino.lat/api/v1/catalogo \
  -H "Origin: https://actividad5-grupo-1-finalizado-6qb0j5i32.vercel.app"
```

### Opción 3: Navegador de prueba CORS

Usa esta herramienta online:
https://www.test-cors.org/

- Target URL: `https://felipepalomino.lat/api/v1/catalogo`
- Method: GET

## 🐛 Troubleshooting

### Error: "No permitido por CORS"

**Causa:** El origin no está en la lista de permitidos

**Solución:** Agrega tu dominio a `allowedOrigins` en `config/cors.js`

---

### Error: Sigue apareciendo localhost en los headers

**Causa:** El servidor no se reinició después de los cambios

**Solución:** 
```bash
# Si usas PM2
pm2 restart all

# Si es servidor manual
# Detén el proceso y vuelve a ejecutar node app.js
```

---

### Error: Funciona en local pero no en producción

**Causa:** Variables de entorno no configuradas en producción

**Solución:** Configura `FRONTEND_URL` en tu servidor de producción

---

## 📚 Referencias

- [MDN - CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS)
- [Express CORS middleware](https://expressjs.com/en/resources/middleware/cors.html)
- [Vercel Domains](https://vercel.com/docs/concepts/projects/domains)

## 🎉 ¡Listo!

Después de hacer push de estos cambios y esperar a que GitHub Actions despliegue, tu frontend en Vercel podrá consumir la API sin problemas de CORS.
