const express=require('express')
require('dotenv').config()

const app=express()
app.use(express.json)
const route=require('./routes/routes')
app.use(route)

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})