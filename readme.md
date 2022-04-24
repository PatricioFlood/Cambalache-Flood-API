# Reto Técnico Cambalache - Patricio Flood

API que permite consultar Usuarios, Historial de Login, y Repositorios. 

## Enlaces

Servidor: Heroku

Documentación: https://cambalache.flood.ar/v1/api-docs

URL Base: https://cambalache.flood.ar/v1/

## Guía Rápida

Existen 2 endpoints que no requieren autenticación:
* `POST` /users
* `POST` /login

El primero para crear un nuevo usuario y el segundo para iniciar sesión.

Al iniciar sesión se le proveerá un token que debe utilizar en el encabezado de sus solicitudes `Authorization: Bearer <token>`

El token expira en 5 minutos (configurado en Heroku)

Al iniciar sesión se genera una nueva entrada en la tabla `LoginHistories`

Una vez autenticado puede ver, crear, editar y borrar entradas de cualquiera de las tablas `Users`, `LoginHistories` y `Repositories`.

Para revocar un token utilice el endpoint `POST` /logout

## Requisitos para ejecutar el servidor

* Node.js v14.0+
* PostgreSQL v9.5+
* Redis v5.0+

Para configurar el servidor por primera vez instale las dependencias necesarias utilizando el comando `npm install` y posteriormente cree un archivo `.env` en el directorio principal siguiendo el modelo del archivo `.env.example`

Para ejecutar el servidor utilice el comando `npm start`

## Variables de Entorno (.env)

* `PORT` (Puerto a utilizar para ejecutar el servidor)
* `DATABASE_URL` (URL de conexión a PostgreSQL)
* `TEST_DATABASE_URL` (URL de conexión a PostgreSQL en Tests)
* `JWT_SECRET` (String secreto para Json Web Token)
* `JWT_ACCESS_TIME` (Tiempo de expiracion de los Tokens, ej: "5m" (5 minutos))
* `REDIS_URL` (URL de conexión a Redis)
* `TEST_REDIS_URL` (URL de conexión a Redis en Tests)


## Testing

Los tests se ejecutan con el comando `npm run test` *

\* Esta creado el test automático de los endpoints de autenticación, el resto de los endpoints fueron testeados de forma manual mediante Postman y mediante la interfaz de la documentación.
## Autor

Patricio Tomas Flood

Sitio Web: https://patricio.flood.ar