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

proyecto-DB/
    ├── public/ │
            └── style.css
    ├── views/ │
        ├── crear.ejs │
        ├── crear_empresa.ejs │
        ├── crear_lenguaje.ejs │
        ├── editar.ejs │
        ├── index.ejs │
        ├── lenguajes.ejs │
        └── empresas.ejs
    ├── server.js
    ├── package.json
    └── README.md

---

## ⚙️ Instalación

1. **Clona el repositorio**:

git clone https://github.com/tuusuario/proyecto-DB.git
cd proyecto-DB


2. **Instala las dependencias**:

npm install

3. **Configura tu base de datos**:

Asegúrate de tener una base de datos MySQL con la siguiente estructura:

sql
Copiar
Editar
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

js
Copiar
Editar
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'TU_PASSWORD',
  database: 'hello_mysql'
});

5. **Inicia el servidor**:

Copiar
Editar
node server.js
Abre tu navegador en http://localhost:3000 🚀


