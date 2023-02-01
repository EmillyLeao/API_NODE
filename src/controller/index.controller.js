const express = require('express')

const formsRouter = require('./forms.controller')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('App running!')
})

router.use('/form', formsRouter)

module.exports = router
