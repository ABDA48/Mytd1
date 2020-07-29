
const express=require('express')
const app=express()
const expressLayout=require('express-ejs-layouts')
const indexRouter=require('./routes/index')
const { MongoClient } = require('mongodb')
const mongodb=require('mongodb').MongoClient
var url='mongodb://localhost:27017/mybrary'
MongoClient.connect(url,(err,db)=>{
if(err) throw err;
var dbo=db.db('mybrary');
console.log('connected');
});
app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')
app.use(expressLayout)
app.use(express.static('public'))
app.use('/',indexRouter)
app.listen(process.env.PORT||8080)
