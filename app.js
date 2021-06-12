// Configuración inicial
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

// Contenido estástico
app.use(express.static(__dirname + "/public"));

// Rutas

app.get('/', function (req, res) {
    res.render('index', {
      titulo: "Miradas by Germ@n Almirón"
    })
  });

app.get('/miradas', function (req, res) {
    res.render('miradas', {
      titulo: "Miradas by Germ@n Almirón"
      })
  });

app.get('/mundo', function (req, res) {
    res.render('mundo', {
      titulo: "Miradas by Germ@n Almirón"
      })
  });

app.get('/contacto', function (req, res) {
    res.render('contacto', {
      titulo: "Miradas by Germ@n Almirón"
      })
  });

  // Iniciar servidor
app.listen(port, () => {
    console.log(`Escuhando en el puerto http://localhost:${port}`);
  });