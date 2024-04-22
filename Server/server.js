const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes')
const { data, SignUpData } = require('./Schema')

require("dotenv").config()
const app = express()

const cors = require('cors')
app.use(cors())
app.use(express.json())

const port = 4000

const URI = process.env.MONGODB_URI

mongoose.connect(URI)
    .then(() => {
        console.log("Connected to MongoDB")
        app.get('/', (req, res) => {
            res.redirect('/ping');
        });
    })
    .catch((error) => {
        console.log(error)
    }
    )

app.get('/ping', (request, response) => {
    const isConnected = mongoose.connection.readyState === 1;

    // Send response with database connection status
    response.json({
        database: isConnected ? 'connected' : 'disconnected',
    });

});

app.use("/", route)

app.listen(port, () => {
    console.log("This is from port 4000")
})