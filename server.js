if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
}
const express=require('express')
const app=express()
const expressLayout=require('express-ejs-layouts')
const indexRouter=require('./routes/index')
const mongoose=require('mongoose')
mongoose.connect(process.env.Database_URL,{useNewUrlParser:true})
const db=mongoose.connection
db.on('error occ',error=>console.error(error))
db.once('open',()=>console.log('Connected to mongoose'))
app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')
app.use(expressLayout)
app.use(express.static('public'))
app.use('/',indexRouter)
app.listen(process.env.PORT||8080)
