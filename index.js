const express = require('express')

// dépendance qui permet de récupérer facilement les cookies dans les requêtes
const cookie = require("cookie-parser")

// on initialise l'application
const app = express()

const routes = require('./routes')

// middleware qui permet d'extraire les cookies
app.use(cookie())

// cela permet d'etraire le body qui est stringify au format objet JSON
app.use(express.json());

require("./database")

app.use(routes)

// si la route n'a pas été trouvé cela renvoie un status 404
app.use('*', (req, res) => {
    res.status(404).end();
})

// on écoute sur le port 8000
app.listen(8000)