# Reto Técnico Cambalache - Patricio Flood

API que permite consultar Usuarios, Historial de Login, y Repositorios. 

## Enlaces

Servidor: Heroku

Documentación: https://cambalache.flood.ar/v1/api-docs

URL Base: https://cambalache.flood.ar/v1/

## Requisitos para ejecutar el servidor

* Node.js v14.0+
* PostgreSQL v9.5+
* Redis v5.0+

Para configurar el servidor por primera vez instale las dependencias necesarias utilizando el comando `npm install` y posteriormente cree un archivo `.env` en el directorio principal siguiendo el modelo del archivo `.env.example`

Para ejecutar el servidor utilice el comando `npm start`

## Variables de Entorno (.env)

* `PORT` (Puerto a utilizar para ejecutar el servidor)
* `DATABASE_URL` (URL de conexión a PostgreSQL)
* `JWT_SECRET` (String secreto para Json Web Token)
* `JWT_ACCESS_TIME` (Tiempo de expiracion de los Tokens, ej: "5m" (5 minutos))
* `REDIS_URL` (URL de conexión a Redis)

## Autor

Patricio Tomas Flood

Sitio Web: https://patricio.flood.ar