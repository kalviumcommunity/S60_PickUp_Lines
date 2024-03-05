const express = require('express')
const app = express()
const port = 3000

app.get('/ping', (request,response) => {
    response.send("This is from S60_PickUp_Lines")
})

app.listen(port, () => {
    console.log("This is from port 3000")
})