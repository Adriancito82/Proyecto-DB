require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const PORT =  process.env.DB_PORT || 3306;

// Configuración de conexión a MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAM
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a MySQL ✅');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'style.css'));
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Ruta para mostrar todos los usuarios
app.get('/', async (req, res) => {
  try {
    const [users] = await db.promise().query('SELECT * FROM users');
    res.render('index', { users });
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta para mostrar todas las compañias
app.get('/empresas', async (req, res) => {
  try {
    const [companies] = await db.promise().query('SELECT * FROM companies');
    res.render('empresas', { companies });
  } catch (error) {
    console.error('Error al obtener empresas:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta para mostrar los lenguajes
app.get('/lenguajes', async (req, res) => {
  try {
    const [languages] = await db.promise().query('SELECT * FROM languages');
    res.render('lenguajes', { languages });
  } catch (error) {
    console.error('Error al obtener lenguajes:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta para crear un usuario
app.get('/crear', (req, res) => {
  res.render('crear');
});
app.post('/create', async (req, res) => {
  const { name, surname, age,  email } = req.body;
  try {
    await db.promise().query('INSERT INTO users (name, surname, age, email) VALUES (?, ?, ?, ?)', [name, surname, age, email]);
    res.redirect('/');
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta para crear una Empresa
app.get('/crear_empresa', (req, res) => {
  res.render('crear_empresa');
});
app.post('/create_companie', async (req, res) => {
  const { name } = req.body;
  try {
    await db.promise().query('INSERT INTO companies (name) VALUES (?)', [name]);
    res.redirect('/empresas');
  } catch (error) {
    console.error('Error al crear empresa:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta para crear un Lenguaje
app.get('/crear_lenguaje', (req, res) => {
  res.render('crear_lenguaje');
});
app.post('/create_language', async (req, res) => {
  const { name } = req.body;
  try {
    await db.promise().query('INSERT INTO languages (name) VALUES (?)', [name]);
    res.redirect('/lenguajes');
  } catch (error) {
    console.error('Error al crear lenguaje:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta para eliminar un usuario
app.post('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.promise().query('DELETE FROM users WHERE user_id = ?', [id]);
    res.redirect('/');
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta para eliminar una empresa
app.post('/delete_empresa/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.promise().query('DELETE FROM companies WHERE company_id = ?', [id]);
    res.redirect('/empresas');
  } catch (error) {
    console.error('Error al eliminar empresa:', error);
    res.status(500).send('Error interno del servidor');
  }
});
// Ruta para eliminar un lenguaje
app.post('/borrar_lenguaje/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.promise().query('DELETE FROM languages WHERE language_id = ?', [id]);
    res.redirect('/lenguajes');
  } catch (error) {
    console.error('Error al eliminar lenguaje:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta para actualizar un usuario
app.get('/editar/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.promise().query('SELECT * FROM users WHERE user_id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).send('Usuario no encontrado');
    }
    res.render('editar', { user: rows[0] });
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.post('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { name, surname, age, email } = req.body;
  try {
    await db.promise().query('UPDATE users SET name = ?, surname = ?, age = ?, email = ? WHERE user_id = ?', [name, surname, age, email, id]);
    res.redirect('/');
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${process.env.DB_HOST}:${PORT}`);
  //console.log(`http://localhost:${PORT}`);
});
