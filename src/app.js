const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const Feedbackform = require('./models/feedbackSchema')
require('./db/conn')

const Port = process.env.PORT || 8000

const static_path = path.join(__dirname, '../public')
const template_path = path.join(__dirname, '/templates/views')
const partials_path = path.join(__dirname, '/templates/partials')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(static_path))
app.set('view engine', 'hbs')
app.set('views', template_path)
hbs.registerPartials(partials_path)

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})

// contact us

app.post('/contact', async (req, res) => {
  try {
    const userData = new Feedbackform(req.body)
    console.log(userData)
    userData.save()
    res.status(404).render('index')
  } catch (error) {
    res.send(error).status(404)
    console.log(error)
  }
})

app.listen(Port, () => {
  console.log(`Server is Running At ${Port}`)
})
