# Student Guide

Proyecto Next.js (App Router) con TypeScript y Tailwind CSS.

## Requisitos

- Node.js 18+ (recomendado 20+)
- pnpm 8+ / 10+

## Scripts

- `pnpm dev`: inicia el servidor de desarrollo
- `pnpm build`: construye la aplicación
- `pnpm start`: ejecuta la build en producción
- `pnpm lint`: ejecuta el linter de Next

## Desarrollo

1. Instalar dependencias:
   ```bash
   pnpm install
   ```
2. Iniciar el servidor de desarrollo:
   ```bash
   pnpm dev
   ```
3. Abrir en el navegador: `http://localhost:3000`

## Estructura

- `app/`: rutas y layout del App Router
- `components/`: componentes reutilizables (incluye UI)
- `lib/`: utilidades
- `public/`: assets estáticos
- `styles/`: estilos globales

## Despliegue

- Compatible con Vercel. También puedes servir la build con `pnpm build && pnpm start`.

## Licencia

MIT
