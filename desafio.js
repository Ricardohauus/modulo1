const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  // manipular o nome dos parametros automaticamente
  autoescape: true,
  // recebe o servidor
  express: app,
  // faz com que toda vez que a gente alterar algum arquivo, ele reinicia o servidor automaticamente, mesma função do nodemon
  watch: true
})

// define qual é a extensão que os arquivos do nunjucks vão ter
app.set('view engine', 'njk')

app.use(express.urlencoded({ extended: false }))

// Cria um array de String
const users = ['Diego Fernandes', 'Ricardo Brasil', 'Paulo Sergio']

app.get('/', (req, res) => {
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

// cria a porta do servidor
app.listen(3000)
