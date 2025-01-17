const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
require('./database/config').dbConecction();

const app = express()
app.use( express.json() )

app.use('/api/login', require('./routes/auth.js'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server running on port: '+PORT)
})