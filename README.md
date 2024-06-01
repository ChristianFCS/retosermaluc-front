# Proyecto Angular 17 con Node 18

Este proyecto es una aplicación desarrollada con Angular 17 y Node.js 18.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 18)
- [Angular CLI](https://angular.io/cli) (versión 17)

Puedes verificar las versiones instaladas usando los siguientes comandos:

```bash
node -v
ng version
```

## Instalación

Sigue estos pasos para configurar y levantar el proyecto:

### 1. Clonar el Repositorio

Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/ChristianFCS/retosermaluc-front.git
cd tu-proyecto
```

### 2. Instalar Dependencias

Instala las dependencias necesarias para el proyecto:

```bash
npm install
```

### 3. Configuración del Ambiente

Configura la url del backend que atenderá al proyecto en la linea 11 del archivo `\app\services\http\http.service.ts`
`URL_SERVICIO = 'http://localhost:8080'`;

### 4. Levantar el Servidor de Desarrollo

Levanta el servidor de desarrollo para ver la aplicación en tu navegador:

```bash
ng serve
```

Por defecto, la aplicación estará disponible en `http://localhost:4200/`.

## Scripts Disponibles

En el archivo `package.json`, puedes encontrar varios scripts útiles:

- `ng serve`: Levanta el servidor de desarrollo.
- `ng build`: Construye la aplicación para producción.
- `ng test`: Ejecuta los tests unitarios.
- `ng lint`: Ejecuta el linter para encontrar y arreglar problemas en el código.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o contactarme a través de mi correo electrónico [ccondoris1@gmail.com](mailto:ccondoris1@gmail.com).
