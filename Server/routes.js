const express = require('express')
const app = express()
app.use(express.json())
const data = require('./userSchema')

app.get("/lines", (request, response) => {
    data.find()
    .then((data)=>{
      response.send(data)
    })
    .catch((err)=>{
      response.send(err)
    })
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