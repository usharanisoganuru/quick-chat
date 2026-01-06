const mongoose= require('mongoose')
/**Create collection(model) with schema(structure) */

const userSchema= new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    profilepic:{
        type: String,
        required: false
    }
},
{timestamps: true})

//created users collection with particular schema(structure)
module.exports= mongoose.model('users',userSchema)