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

app.post("/addPickUpLine", (request, response) => {
  data.create(request.body)
  .then((res)=>(
    response.status(201).send(res)
  ))
  .catch((err)=>{
    response.status(400).send(err)
  })
});

app.put("/update", (req, res) => {
  res.send("Updated successfully");
});


app.delete("/delete", (req, res) => {
  res.send("Deleted succesfully");
});

module.exports = app;