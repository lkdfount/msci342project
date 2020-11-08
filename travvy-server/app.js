// Sets up the necessary imports for the functionality (i.e. express)
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./src/models')
const config = require('./src/config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes/routes')(app)

//Handle production 
if(process.env.NODE_ENV == 'production'){
  //Static folder
  app.use(express.static(__dirname + '/public/'))

  //Handle single page 
  app.get(/.*/,(req, res) => res.sendFile(__dirname +'/public/index.html'))
}

// Setup sequelize server
sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000)
  console.log(`Server sarted on port ${config.port}`)
})


app.post('/signup',(req,res) =>{
  res.send({
    message: 'Successfully registered'
  })
})
app.post('/login',(req,res) =>{
  res.send({
    message: 'Successful log in'
  })
})
