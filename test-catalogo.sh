#!/bin/bash

# Script para probar el endpoint de catálogo
# Uso: ./test-catalogo.sh

echo "🧪 Probando endpoint de catálogo..."
echo ""

# URL del endpoint
URL="https://felipepalomino.lat/api/v1/catalogo"

# Alternativa para desarrollo local:
# URL="http://localhost:3000/api/v1/catalogo"

echo "📡 Consultando: $URL"
echo ""

# Hacer petición GET
response=$(curl -s -w "\n%{http_code}" "$URL")

# Separar body y status code
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | sed '$d')

echo "📊 Status Code: $http_code"
echo ""

if [ "$http_code" -eq 200 ]; then
    echo "✅ Respuesta exitosa!"
    echo ""
    echo "📦 Productos obtenidos:"
    echo "$body" | jq '.' 2>/dev/null || echo "$body"
    echo ""
    echo "📈 Total de productos:"
    echo "$body" | jq '. | length' 2>/dev/null || echo "N/A"
else
    echo "❌ Error en la petición"
    echo ""
    echo "Respuesta:"
    echo "$body"
fi

echo ""
echo "✨ Prueba completada"
