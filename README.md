# JSL Technology - Monorepo

Este es el monorepo inicial para **JSL Technology**, diseñado para ser escalable, mantenible y profesional, utilizando **Nx**, **Angular**, y **NestJS**.

## Arquitectura

El proyecto sigue una arquitectura de microservicios con un API Gateway central.

### Aplicaciones (`apps/`)

- **marketing-web**: Aplicación Angular orientada al público con soporte para SSR (SEO).
- **admin-console**: Panel de administración Angular para gestión interna.
- **api-gateway**: Punto de entrada único para todas las peticiones del backend (NestJS).
- **auth-service**: Microservicio encargado de la autenticación y autorización.
- **notifications-service**: Microservicio para el manejo de notificaciones.
- **content-service**: Microservicio para la gestión de contenido.

### Librerías (`libs/`)

- **shared/ui**: Componentes de UI reutilizables para las aplicaciones frontend.
- **shared/models**: Interfaces y modelos compartidos entre frontend y backend.
- **shared/util**: Utilidades comunes de TypeScript/JavaScript.
- **backend/core**: Lógica compartida para el backend (filtros de excepciones, interceptores, etc.).

## Guía de Creación (Comandos Nx)

Para replicar este monorepo desde cero, se utilizaron los siguientes comandos:

```bash
# 1. Crear el workspace
npx create-nx-workspace@latest jsl-technology --preset=apps --nxCloud=skip

# 2. Instalar plugins necesarios
npm install --save-dev @nx/angular @nx/nest @nx/js

# 3. Generar Aplicaciones Frontend
npx nx generate @nx/angular:application apps/marketing-web --routing --style=scss --ssr
npx nx generate @nx/angular:application apps/admin-console --routing --style=scss

# 4. Generar Aplicaciones Backend
npx nx generate @nx/nest:application --name=api-gateway --directory=apps/api-gateway
npx nx generate @nx/nest:application --name=auth-service --directory=apps/auth-service
npx nx generate @nx/nest:application --name=notifications-service --directory=apps/notifications-service
npx nx generate @nx/nest:application --name=content-service --directory=apps/content-service

# 5. Generar Librerías
npx nx generate @nx/angular:library --name=shared-ui --directory=libs/shared/ui
npx nx generate @nx/js:library --name=shared-models --directory=libs/shared/models
npx nx generate @nx/js:library --name=shared-util --directory=libs/shared/util
npx nx generate @nx/nest:library --name=backend-core --directory=libs/backend/core
```

## Estrategia de Comunicación

Se ha configurado una estructura preparada para evolucionar hacia microservicios. La estrategia recomendada es:
1. **API Gateway**: Actúa como proxy y agregador.
2. **Comunicación**: Inicialmente mediante peticiones HTTP/TCP, con posibilidad de escalar a NATS o Redis para comunicación asíncrona entre servicios.

## Comandos Útiles

### Desarrollo

```bash
# Ejecutar marketing web
npx nx serve marketing-web

# Ejecutar consola de administración
npx nx serve admin-console

# Ejecutar API Gateway
npx nx serve api-gateway
```

### Pruebas

```bash
# Ejecutar todos los tests
npx nx run-many -t test
```

---
Preparado por Jules - Senior Software Architect.
