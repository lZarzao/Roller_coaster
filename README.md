# Roller_coaster

En este proyecto se puso en práctica:

- Node.js y MondoDB como Back
- React.js como Front

Para poder ejecutarlo:

- Se debe clonar el repositorio
- Dirigirse a la Carpeta Server y ejecutar el comando: "npm install"
- Dirigirse a la Carpeta Cliente y ejecutar el comando: "npm install"
- Crear el archivos .env para el server.
- Crear el archivo .env.dev para el client

En el archivo .env correspondiente al Server se deben agregar los siguientes datos:

- PORT=5000 (El puerto donde se ejecutará el Servidor)
- DB (Nombre de la base de datos)
- cloudName
- cloudKey
- cloudSecret
  (Estos últimos correspenden a las credenciales de una cuenta en Cloudinary)

En el archivo .env.dev correspondiente al client se debe agregar el siguiente dato:

- REACT_APP_URL=http://localhost:5000/api
  Para poder comunicar las dos partes de la aplicación.
