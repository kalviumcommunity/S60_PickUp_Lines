const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes')

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
})

app.get('/ping', (request,response) => {
    
    const isConnected = mongoose.connection.readyState === 1;
    
    // Send response with database connection status
    response.json({
        database: isConnected ? 'connected' : 'disconnected',
    });

});

app.use("/",route)
// app.get("/Lines", (request, response) => {
//     response.status(200).send("Route is working successfully");
// });

// app.post("/add", (request, response) => {
//     response.status(201).send(request.body);
// });

// app.put("/update", (req, res) => {
//     res.send("Updated successfully");
// });

// app.delete("/delete", (req, res) => {
//     res.send("Deleted successfully");
// });

app.listen(port, () => {
    console.log("This is from port 4000")
})