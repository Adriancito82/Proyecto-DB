# 📋 Proyecto CRUD de Usuarios con Node.js + Express + MySQL

Este es un proyecto simple de gestión de usuarios que implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando Node.js, Express, EJS como motor de plantillas, y MySQL como base de datos.

---

## 🚀 Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [MySQL](https://www.mysql.com/)
- [Body-parser](https://www.npmjs.com/package/body-parser)

---

## 📂 Estructura del proyecto

proyecto-DB/</br>
    ├── public/ │</br>
            └── style.css</br>
    ├── views/ │</br>
        ├── crear.ejs │</br>
        ├── crear_empresa.ejs │</br>
        ├── crear_lenguaje.ejs │</br>
        ├── editar.ejs │</br>
        ├── index.ejs │</br>
        ├── lenguajes.ejs │</br>
        └── empresas.ejs</br>
    ├── server.js</br>
    ├── package.json</br>
    └── README.md</br>

---

## ⚙️ Instalación

1. **Clona el repositorio**:

git clone https://github.com/tuusuario/proyecto-DB.git </br>
cd proyecto-DB


2. **Instala las dependencias**:

npm install

3. **Configura tu base de datos**:

Asegúrate de tener una base de datos MySQL con la siguiente estructura:

CREATE DATABASE hello_mysql;

USE hello_mysql;

CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  surname VARCHAR(100),
  email VARCHAR(100)
);

También puedes tener otras tablas como empresas si extiendes el proyecto.

4. **Conecta tu base de datos**:

Abre server.js y edita la configuración de conexión:

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'TU_PASSWORD',
  database: 'hello_mysql'
});

5. **Inicia el servidor**:

node server.js </br>
Abre tu navegador en http://localhost:3000 🚀

✨ Funcionalidades:

✅ Listado de usuarios

✅ Crear nuevo usuario

✅ Editar usuario existente

✅ Eliminar usuario

✅ Vistas con EJS

✅ Estilos CSS personalizados

🧪 Preparado para desplegar en plataformas como Render o Railway

📤 Despliegue:

Puedes desplegar este proyecto en plataformas como:

Render

Railway

Heroku (requiere plugin de MySQL externo)

O usar tu propio VPS/Droplet

🧑‍💻 Autor
Desarrollado por Adrián Santana
Con 💙 por el aprendizaje y el código abierto.
