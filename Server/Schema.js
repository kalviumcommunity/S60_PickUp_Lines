const mongoose = require('mongoose')

const PickupLines = new mongoose.Schema({
    createdBy: String,
    pickupline: String,
    category: String,
})

const signUpData = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const data = mongoose.model('PickupLine', PickupLines)
const SignUpData = mongoose.model('SignUpData', signUpData)
// data.create({
//     "name": "",
//     "pickupline": "",
//     "category": "",
//     "likes": 
// })
// .then((data)=>{
//     console.log("Data created",data)
// })
// .catch((error) => {
//     console.error('Error creating user:', error);
// });

module.exports = { data, SignUpData }