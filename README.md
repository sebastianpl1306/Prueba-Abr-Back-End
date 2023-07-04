# Prueba-Abr-Back-End
Desarrollo de prueba técnica para sinco abr

## Proyecto Back End
Se debe seguir los siguientes pasos para ejecutar la api:</br>
1. Crear la base de datos, las consultas para crearla se encuentran en la carpeta Back End/SchoolDB.sql
2. Configurar la cadena de conexión en el archivo appsettings.json
3. Ejecutar los comandos para compilar y correr el proyecto
```
dotnet build
dotnet run
```
Versión de .net: 7.0.304</br>
NOTA: Dentro de Back End/ABR.postman_collection.json, se encuentra una colección de postman que contiene todas las rutas creadas con ejemplos de su uso.

### Procedimiento Almacenado calculo de IVA
Este procedimiento se encuentra en la carpeta raiz con nombre SP_IVA, este contiene la creación del SP y tambien tiene la forma para poder ejecutar el SP.

## Proyecto Front End
Se debe seguir los siguientes pasos: </br>
1. Ejecutar la api para correr el Back End.
2. Agregar y configurar el .env.
2. Ejecutar los siguientes comandos.
```
npm install
npm run dev
```
Versión de Node.JS: v14.21.1