# Instrucciones para agregar el mapa del colegio

## 📍 Cómo agregar la imagen del mapa

1. **Prepara la imagen del plano del colegio**
   - Formato recomendado: PNG, JPG o SVG
   - Tamaño recomendado: 1200x800px o más (mientras más grande, mejor calidad al hacer zoom)
   - La imagen puede ser un dibujo, foto aérea o plano arquitectónico

2. **Guarda la imagen en esta carpeta**
   - Nombre del archivo: `plano-colegio.png` (o `.jpg`, `.svg`)
   - Ruta completa: `public/mapa/plano-colegio.png`

3. **El mapa funcionará automáticamente**
   - Una vez que agregues la imagen, el mapa la detectará y la mostrará
   - Los marcadores se superpondrán sobre la imagen

## 🎯 Ajustar posiciones de los marcadores

Si necesitas ajustar las posiciones de los marcadores después de agregar la imagen:

1. Abre el archivo: `app/mapa/page.tsx`
2. Busca el array `campusLocations`
3. Ajusta los valores `x` e `y` (porcentajes de 0 a 100) para cada ubicación
   - `x: 30` = 30% desde la izquierda
   - `y: 40` = 40% desde arriba

## 📝 Agregar nuevas ubicaciones

Para agregar más ubicaciones al mapa:

1. Abre `app/mapa/page.tsx`
2. Agrega un nuevo objeto al array `campusLocations`:

```typescript
{
  id: 11, // Número único
  name: "Nombre de la ubicación",
  type: "Académico", // o "Administrativo", "Servicios", "Deportivo"
  description: "Descripción detallada",
  x: 50, // Porcentaje horizontal (0-100)
  y: 50, // Porcentaje vertical (0-100)
  building: "Edificio X", // Opcional
  floor: "1er Piso", // Opcional
}
```

## ✨ Funcionalidades del mapa

- ✅ Zoom in/out (50% - 300%)
- ✅ Arrastrar para mover el mapa (pan)
- ✅ Búsqueda de ubicaciones
- ✅ Filtros por tipo
- ✅ Información detallada al hacer clic
- ✅ Tooltips al pasar el mouse sobre los marcadores
- ✅ Centrado automático al seleccionar una ubicación

