const mongoose= require("mongoose")
const express=require("express")
const app=express()
const cors =require("cors")
const PORT =process.env.PORT || 5000
mongoose.connect("mongodb://127.0.0.1:27017/todo")
.then(console.log("connected successfully to mongoose"))
.catch(err=>console.log(err))
const todoschema=new mongoose.Schema({
    Activity:{
        type: String,
       
    },
    date:{
        type: Date,
        default: Date.now,
    },
})
const Todo=mongoose.model("Todo",todoschema)
Todo.createIndexes()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    Todo.find({})
   .then(user=>res.json(user))
   .catch(err=>console.log(err))
})
app.post("/save",(req,res)=>{
    const{text}=req.body
    Todo.create({text})
    .then((data)=>{
        console.log("data add successfully")
        console.log(data)
        res.send(data)
    })
})
app.post("/update/:id",(req,res)=>{
    const {_id,text}=req.body
    Todo.findByIdAndUpdate(_id,{text})
    .then(()=>res.set(201).send("updated"))
    .catch(err=>console.log(err))
})
app.delete("/sa",(req,res)=>{
    const {_id}=req.body
    Todo.findByIdAndDelete(_id)
    .then(()=>console.log("deleted successfully"))
    .catch(err=>console.log(err))

})
app.listen(PORT,()=>{
    console.log("App is running")
})