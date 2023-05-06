const express = require('express')
require('dotenv').config()
const router = require('./routes')
const cors = require('cors')

const client = require('./db')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

async function startApp() {
  try {
    
    client.connect()

    app.listen(process.env.PORT, () => {
      console.log('Listening on port 3000')
    })
  } catch(e) {
    console.log(e)
  }
}

startApp()

