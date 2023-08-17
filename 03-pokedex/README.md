<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

#Ejecutar en desarrollo

1. Clonar repositorio
2. Ejecutar 
```yarn install```
3. Tener Nest CLI 
```npm i -g @nestjs/cli```
4. Levantar la base de datos 
```docker-compose up -d```
5. Clonar el archivo
```.env.example``` y renombrar la copia a ```.env```
6. Ejecutar la aplicación en dev
```yarn start:dev```
7. Reconstruir la base de datos
```
http:localhost:3000/api/seed
```

##Stack usado
* Mongo DB
* Nest