// connecting with atlas db
const mongoose = require('mongoose')
/**connect database in 2 ways 
 * 1----------
*/
mongoose.connect(process.env.CONN_STRING)

const db= mongoose.connection;

db.on('connected',()=>{
    console.log('DB connected successfully')
})
db.on('failed',()=>{
    console.log('DB connection failed')
})

module.exports= db;

//2--------
/*
mongoose.connect(process.env.CONN_STRING)
.then(()=>{
    console.log('DB connected successfully')
})
.catch(()=>{
    console.log('DB connection failed')
})
module.exports=mongoose
*/

