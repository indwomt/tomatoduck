const express = require('express');
const mongoose = require('mongoose')
const session = require('express-session')
// cors needed for chatbot i think
const cors = require('cors')
const db = require('./config/connection')


const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3001

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      ;
    })})