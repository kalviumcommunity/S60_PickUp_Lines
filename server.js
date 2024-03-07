const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.redirect('/ping');
});


app.get('/ping', (request,response) => {
    response.send("This is from S60_PickUp_Lines")
})

app.listen(port, () => {
    console.log("This is from port 4000")
})