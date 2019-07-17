/***MÓDULOS***/
/**/const express = require ('express')
/**/const app = express()
/**/const handlebars = require ('express-handlebars')
/**/const bodyParser = require ('body-parser')
/**/const index = require('./routes/index') //Importando caminho da rota "index"
/**/const admin = require("./routes/admin") //importando caminho da rota "admin"
/**/const path = require ('path')
//const mongoose = require ('mongoose')

//CONFIGURAÇÕES
	//BODY PARSER
	app.use(bodyParser.urlencoded({extended: true}))
	app.use(bodyParser.json())
	//HANDLEBARS
	app.engine('handlebars', handlebars({defaultLayout: 'main'}))
	app.set('view engine', 'handlebars')
	//MONGOOSE

	//PASTA PUBLICA
	app.use(express.static(path.join(__dirname,'public')))
	app.use(express.static(path.join(__dirname,'node_modules')))
	//ROTAS
	app.use('/', index)	//rota
	app.use('/admin', admin) // rota


app.listen(8081, () => {
	console.log('Conectado ao localhost')
})