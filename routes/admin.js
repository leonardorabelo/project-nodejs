/*ROTAS SECUNDÁRIAS PARA /ADMIN*/

const express = require ('express')
const router = express.Router()
//usa-se router para rotas fora do arquivo principal
router.get('/', (req, res) => {
	res.render('layouts/admin')
})
router.get('/posts', (req, res) => {
	res.send('pagina de posts')
})
module.exports = router