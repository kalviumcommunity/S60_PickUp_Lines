const express = require('express')
const app = express()
app.use(express.json())
const { data, SignUpData } = require('./Schema')
const Joi = require('joi')
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

app.get("/lines", (req, res) => {
  data.find()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
});

app.get('/users', (req, res) => {
  SignUpData.find()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
})

const dataValidate = Joi.object({
  createdBy: Joi.string().required(),
  pickupline: Joi.string().required(),
  category: Joi.string().required()
})

app.post("/addPickUpLine", (req, res) => {

  const { error } = dataValidate.validate(req.body)
  if (error) {
    console.log(error)
    return res.send(error)
  }

  SignUpData.findOne({ _id: req.body.createdBy })
    .then((user) => {
      data.create({ createdBy: user.name, pickupline: req.body.pickupline, category: req.body.category })
        .then((data) => {
          res.send(data)
        })
        .catch((err) => {
          res.send(err)
        })
    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })

  // data.create(req.body)
  //   .then((result) => (
  //     res.status(201).send(result)
  //   ))
  //   .catch((err) => {
  //     res.status(400).send(err)
  //   })
  // res.send(req.body.createdBy)

});

app.get("/update/:id", (req, res) => {
  const id = req.params.id
  data.findById(id)
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.send(err)
    })
})

const updateValidate = Joi.object({
  pickupline: Joi.string().required(),
  category: Joi.string().required()
})


app.put("/update/:id", (req, res) => {
  const id = req.params.id
  const { error } = updateValidate.validate(req.body)
  if (error) {
    res.send(error)
  } else {
    data.findByIdAndUpdate(id, { pickupline: req.body.pickupline, category: req.body.category })
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

const signUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex')
}

app.post("/signUp", (req, res) => {
  const { name, email, password } = req.body
  const { error } = signUpSchema.validate(req.body)

  if (error) {
    res.send(error)
    console.log(error)
  }

  SignUpData.findOne({ email: email })
    .then((emailpresent) => {
      if (emailpresent) {
        res.status(400).send({ Error: "User with this email already exists" })
        return; // Return to exit the function early
      }

      const hashedPassword = hashPassword(password)

      SignUpData.create({ name, email, password: hashedPassword })
        .then((result) => {
          console.log(result)
          res.send(result)
        })
        .catch((err) => {
          res.send(err)
          console.log(err)
        })

    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })
})

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

function generateToken(userId) {
  const token = jwt.sign({ userId: userId }, 'your_secret_key', {
    expiresIn: '1h'
  });
  return token;
}

app.post("/login", (req, res) => {
  const { email, password } = req.body
  const { error } = loginSchema.validate(req.body)

  if (error) {
    res.status(200).send(error.message)
  }

  SignUpData.findOne({ email: email })
    .then((user) => {
      if (user) {

        const plainText = hashPassword(password)

        if (plainText === user.password) {
          const token = generateToken(user._id)
          res.send({ shouldLogin: true, Message: "Logged in Successfully", token: token, id: user._id })
        }
        else {
          res.send({ shouldLogin: false, Message: "Invalid Password" })
        }

      }
      else {
        res.send({ shouldLogin: false, Message: "User with email not found" })
      }

    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })
})

module.exports = app;