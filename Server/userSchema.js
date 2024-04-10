const mongoose = require('mongoose')

const PickupLines = new mongoose.Schema({
    "name" : String,
    "pickupline" : String,
    "category": String,
    "likes":Number
})

const data = mongoose.model('PickupLine',PickupLines)

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

module.exports = data