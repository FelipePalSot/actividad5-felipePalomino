# API de Catálogo - Documentación

## Nuevos Endpoints

### GET /api/v1/catalogo

Obtiene el listado completo de productos del catálogo.

**URL**: `https://felipepalomino.lat/api/v1/catalogo`

**Método**: `GET`

**Autenticación**: No requiere

**Respuesta exitosa (200 OK)**:
```json
[
  {
    "id": 1,
    "nombre": "Detergente Líquido Multiusos 1L",
    "precio": 12.5,
    "stock": 40,
    "id_categoria": 1,
    "activo": true,
    "imagen": "detergente.jpg",
    "categoria": {
      "id": 1,
      "nombre": "Detergentes"
    }
  },
  ...
]
```

**Respuesta de error (500)**:
```json
{
  "mensaje": "Error al obtener el catálogo de productos",
  "error": "Descripción del error"
}
```

## Archivos Nuevos Creados

1. **controllers/catalogo.controller.js**: Controlador para manejar las peticiones de catálogo
2. **services/catalogo.service.js**: Servicio con la lógica de negocio y datos de productos
3. **routes/catalogo.routes.js**: Definición de rutas del catálogo

## Archivos Modificados

1. **routes.js**: Agregada la ruta del catálogo al router principal

## Estructura de Datos

### Producto
- `id` (number): Identificador único del producto
- `nombre` (string): Nombre del producto
- `precio` (number): Precio en soles (PEN)
- `stock` (number): Cantidad disponible
- `id_categoria` (number): ID de la categoría
- `activo` (boolean): Si el producto está activo
- `imagen` (string): Nombre del archivo de imagen
- `categoria` (object): Objeto con datos de la categoría
  - `id` (number): ID de la categoría
  - `nombre` (string): Nombre de la categoría

## Categorías Disponibles

1. **Detergentes** (id: 1)
2. **Lavavajillas** (id: 2)
3. **Desinfectantes** (id: 3)
4. **Multiusos** (id: 4)
5. **Suavizantes** (id: 5)

## Notas para Desarrollo

- Actualmente los datos están en memoria (en el servicio)
- Para producción, se recomienda migrar a una base de datos (MongoDB o PostgreSQL)
- El endpoint filtra automáticamente solo productos activos
- CORS ya está configurado en el backend

## Integración con Frontend

El frontend consume este endpoint en:
- **Archivo**: `src/pages/lista-productos/ListaProductos.jsx`
- **URL**: `https://felipepalomino.lat/api/v1/catalogo`
- **Método**: `fetch()` con React hooks (useState, useEffect)

## Despliegue

Después de hacer push a GitHub:
1. GitHub Actions se ejecutará automáticamente
2. El backend se desplegará con los nuevos endpoints
3. El endpoint estará disponible en `https://felipepalomino.lat/api/v1/catalogo`
