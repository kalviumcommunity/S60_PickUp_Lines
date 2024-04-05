const express = require('express')
const app = express()
app.use(express.json())

app.get("/lines", (request, response) => {
    response.status(200).send("Route is working succesfully")
});

app.post("/add", (request, response) => {
    response.status(200).send("Added");
});


app.put("/update", (req, res) => {
  res.send("Updated successfully");
});


app.delete("/delete", (req, res) => {
  res.send("Deleted succesfully");
});

module.exports = app;