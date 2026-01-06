const dotenv=require('dotenv')
dotenv.config({path:'./config.env'}) // geit the env variables
const dbConfig= require('./config/dbConfig')
const app= require('./app')

const PORT= process.env.PORT_NUMBER || 3000

app.listen(PORT,()=>{
    console.log(`listening to the request on ${PORT}`)
})