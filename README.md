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

## Vistas implementadas

- Auth
  - Inicio de sesión
  - Registro
- Cliente
  - Eventos disponibles
  - Mis reservas
- Agente
  - Registrar evento
  - Eventos registrados
  - Administrar reservas
- Administrador
  - Dashboard con métricas y datos resumidos

## Servicios mockeados incluidos

- Ubicación: ciudades y departamentos
- Eventos
- Reservas
- Dashboard con métricas
- Autenticación básica

## Recomendación para el equipo

Para una entrega grupal y trabajo paralelo, cada integrante puede asumir una parte del proyecto, por ejemplo:

- Integrante 1: Autenticación y registro
- Integrante 2: Cliente y reservas
- Integrante 3: Agente y gestión de eventos
- Integrante 4: Admin y dashboard

La estructura base ya quedó preparada para que cada integrante haga pull del proyecto y desarrolle su módulo sin romper la arquitectura existente.

## Nota

Este avance utiliza información mockeada, tal como lo exige el enunciado del proyecto, sin conexión aún a backend ni base de datos relacional.
