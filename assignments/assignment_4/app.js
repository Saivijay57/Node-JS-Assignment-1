const express = require("express")
const app = express();
const faker = require("faker")
const mongoose = require("mongoose")
const User = require("./modules/user")
var methodOverride = require("method-override")
const bodyParser = require("body-parser")
app.use(bodyParser())
app.use(methodOverride("_method"))
mongoose.connect("mongodb://localhost:27017/users")
app.use(express.static("public"))

app.set("views","./views")
app.set("view engine","ejs")
app.get("/",async(req,res)=>{
    const users = await User.find();
    res.render("index.ejs",{users})
})
app.get("/form",(req,res)=>{
    res.render("form.ejs")
})
app.post("/user/add",async(req,res)=>{
    await User.create(req.body)
    res.redirect("/")
})
app.put("/edit/:id/user",async(req,res)=>{
    await User.updateOne({_id:req.params.id},{isPromoted:true})
    res.redirect("/")
})
app.put("/edit1/:id/user",async(req,res)=>{
    await User.updateOne({_id:req.params.id},{isPromoted:false})
    res.redirect("/")
})
app.delete("/delete/:id/user",async(req,res)=>{
    await User.deleteOne({_id:req.params.id})
    res.redirect("/")
})
app.listen(3000,"localhost",()=>{
    console.log("server is listening")
})