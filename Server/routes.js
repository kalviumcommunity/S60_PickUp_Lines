const express = require('express')
const app = express()
app.use(express.json())
const data = require('./userSchema')
const Joi = require('joi')

app.get("/lines", (req, res) => {
  data.find()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
});

const dataValidate = Joi.object({
  name: Joi.string().required(),
  pickupline: Joi.string().required(),
  category: Joi.string().required()
})

app.post("/addPickUpLine", (req, res) => {
  const { error } = dataValidate.validate(req.body)
  if (error) {
    console.log(error)
    res.send(error)
  } else {
    data.create(req.body)
      .then((result) => (
        res.status(201).send(result)
      ))
      .catch((err) => {
        res.status(400).send(err)
      })
  }
});

app.get("/updateLine/:id", (req, res) => {
  const id = req.params.id
  data.findById(id)
    .then((result) => {
      res.send(result)
    })
})

app.put("/updateLine/:id", (req, res) => {
  const id = req.params.id
  const { error } = dataValidate.validate(req.body)
  if (error) {
    res.send(error)
  } else {
    data.findByIdAndUpdate(id, req.body)
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        res.status(400).send(err)
      })
  }
});

app.delete("/deleteData/:id", (req, res) => {
  const id = req.params.id
  data.findByIdAndDelete(id)
    .then((result) => {
      res.send("Deleted succesfully");
    })
    .catch((err) => {
      console.log(err)
    })
});

module.exports = app;