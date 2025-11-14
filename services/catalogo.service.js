// Datos de productos - En producción esto vendría de una base de datos
const PRODUCTOS = [
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
  {
    "id": 2,
    "nombre": "Detergente en Polvo 150g",
    "precio": 8.9,
    "stock": 55,
    "id_categoria": 1,
    "activo": true,
    "imagen": "detergente-polvo-150g.jpg",
    "categoria": {
      "id": 1,
      "nombre": "Detergentes"
    }
  },
  {
    "id": 3,
    "nombre": "Lavavajillas Concentrado 250ml",
    "precio": 6.5,
    "stock": 60,
    "id_categoria": 2,
    "activo": true,
    "imagen": "lavavajillas-250ml.jpg",
    "categoria": {
      "id": 2,
      "nombre": "Lavavajillas"
    }
  },
  {
    "id": 4,
    "nombre": "Lejía Desinfectante 1L",
    "precio": 4.8,
    "stock": 75,
    "id_categoria": 3,
    "activo": true,
    "imagen": "lejia-1l.jpg",
    "categoria": {
      "id": 3,
      "nombre": "Desinfectantes"
    }
  },
  {
    "id": 5,
    "nombre": "Limpiador Multiusos 500ml",
    "precio": 9.9,
    "stock": 45,
    "id_categoria": 4,
    "activo": true,
    "imagen": "multiusos-500ml.jpg",
    "categoria": {
      "id": 4,
      "nombre": "Multiusos"
    }
  },
  {
    "id": 6,
    "nombre": "Limpia Vidrios Spray 750ml",
    "precio": 7.2,
    "stock": 38,
    "id_categoria": 4,
    "activo": true,
    "imagen": "limpia-vidrios.jpg",
    "categoria": {
      "id": 4,
      "nombre": "Multiusos"
    }
  },
  {
    "id": 7,
    "nombre": "Desengrasante Industrial 1L",
    "precio": 15.9,
    "stock": 25,
    "id_categoria": 4,
    "activo": true,
    "imagen": "desengrasante.jpg",
    "categoria": {
      "id": 4,
      "nombre": "Multiusos"
    }
  },
  {
    "id": 8,
    "nombre": "Suavizante de Ropa 2L",
    "precio": 11.5,
    "stock": 50,
    "id_categoria": 5,
    "activo": true,
    "imagen": "suavizante.jpg",
    "categoria": {
      "id": 5,
      "nombre": "Suavizantes"
    }
  },
  {
    "id": 9,
    "nombre": "Limpiador de Baños 500ml",
    "precio": 8.3,
    "stock": 42,
    "id_categoria": 3,
    "activo": true,
    "imagen": "limpiador-banos.jpg",
    "categoria": {
      "id": 3,
      "nombre": "Desinfectantes"
    }
  },
  {
    "id": 10,
    "nombre": "Quitamanchas Pre-lavado 400ml",
    "precio": 13.9,
    "stock": 30,
    "id_categoria": 1,
    "activo": true,
    "imagen": "quitamanchas.jpg",
    "categoria": {
      "id": 1,
      "nombre": "Detergentes"
    }
  }
];

export const obtenerProductos = async () => {
    // Simular delay de red (opcional)
    return new Promise((resolve) => {
        setTimeout(() => {
            // Filtrar solo productos activos
            const productosActivos = PRODUCTOS.filter(p => p.activo);
            resolve(productosActivos);
        }, 100);
    });
};

export const obtenerProductoPorId = async (id) => {
    return new Promise((resolve, reject) => {
        const producto = PRODUCTOS.find(p => p.id === parseInt(id) && p.activo);
        if (producto) {
            resolve(producto);
        } else {
            reject(new Error('Producto no encontrado'));
        }
    });
};
