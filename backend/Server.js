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
        required:true,
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
app.get("/get/:id",(req,res)=>{
    const id=req.params.id
    Todo.findById({_id:id})
   .then(user=>res.json(user))
   .catch(err=>console.log(err))
})
app.put("/update/:id",(req,res)=>{
    const id=req.params.id
    Todo.findByIdAndUpdate({_id:id},{Activity:req.body.Activity})
    .then(()=>res.set(201).send("updated"))
    .catch(err=>console.log(err))
})
app.delete("/delete/:id",(req,res)=>{
    const id=req.params.id
    Todo.findByIdAndDelete({_id:id})
    .then(result=>{
        console.log("deleting")
        res.json(result)})
    .catch(err=>console.log(err))

})
app.post("/save",async(req,res)=>{
   try{
   const user= new Todo(req.body)
    console.log(user)
    let result = await user.save();
    result = result.toObject();
    console.log(result)
   }catch(err){
    console.log(err)
   }
})
app.listen(PORT,()=>{
    console.log("App is running")
})