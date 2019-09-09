const express = require('express')
const mongoose = require('mongoose')
const nunjucks = require('nunjucks')

//connexion bdd pokedex en mongodb
mongoose.connect('mongodb://localhost/pokedex')

const app = express()

//Pour acceder aux fichier static
app.use('/css', express.static(__dirname+'/node_modules/bootstrap/dist/css'))

nunjucks.configure('views', {
    autoescape: true,
    express: app
}) 

app.get('/', function(req, res) {
    res.render('layout.html');
})

app.listen(3000, ()=>{
    console.log('Server on port 3000')
})