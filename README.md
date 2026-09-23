# Sistema de Gestión de Eventos

Proyecto integrador para la asignatura de Ambiente Web 1. Este avance corresponde al frontend inicial de la aplicación, desarrollado con Vite + TypeScript y siguiendo el patrón MVC para mantener una estructura organizada y escalable.

## Objetivo del avance

Desarrollar la estructura inicial del sistema web para la gestión de eventos y reservas, con vistas por perfil, navegación básica y servicios mockeados que simulan la capa de datos del sistema. Este proyecto sirve como base para que cada integrante del equipo pueda continuar en ramas o pull requests separados sin perder la estructura general del proyecto.

## Tecnologías usadas

- Vite
- TypeScript
- HTML5
- Bootstrap
- CSS
- Patrón MVC

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

## Estructura del proyecto

```text
src/
├── controllers/   # Coordinación y navegación entre rutas y vistas
├── models/        # Interfaces y tipos del dominio
├── services/      # Datos mockeados y lógica de acceso a información
├── styles/        # Estilos globales y específicos por vista
├── views/         # Vistas por perfil: auth, cliente, agente, admin
├── main.ts        # Punto de entrada principal
└── ...
```


