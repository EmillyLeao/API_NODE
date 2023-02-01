const express = require('express')
const routers = require('./controller/index.controller')
const { sequelize } = require('./models/index.model')

const app = express()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())
app.use('/', routers)

sequelize.sync().then(() => {
  console.log('Database conected')
})

app.listen(3000, () => {
    console.log(`App listening at http:\\localhost:3000`);
});

module.exports = app