const express = require('express');
// const session = require('express-session')
// cors needed for chatbot i think
// const cors = require('cors')
const db = require('./config/connection')
const routes = require(`./routes`)

const path = require('path');

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended:true}))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes)

db.once('open', () => {
    app.listen(PORT, () =>  console.log(`API server running on port ${PORT}!`)  
    )})