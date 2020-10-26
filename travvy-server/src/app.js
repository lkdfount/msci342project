// Sets up the necessary imports for the functionality (i.e. express)
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

//Handle production 
if(process.env.NODE_ENV == 'production'){
  //Static folder
  app.use(express.static('../public'))

  //Handle single page 
  app.get(/..*/,(req, res) => res.sendFile('../public/index.html'))
}

// Setup sequelize server
sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000)
  console.log(`Server sarted on port ${config.port}`)
})
