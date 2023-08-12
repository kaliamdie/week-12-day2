const express=require("express")

const app=express()
const pokemon=require("./models/pokemon")
const PORT=3000
const jsxEngine=require("jsx-view-engine")
app.set("view engine","jsx")
app.engine("jsx",jsxEngine())

app.get('/',(req,res)=>{
    res.send('Welcome to the Pokemon App!')
})
app.get("/pokemon",(req,res)=>{
    res.render("Index",{pokemon})
})
app.get("/pokemon/:id",(req,res)=>{
    console.log(req.params)
    res.render("Show",{id:req.params.id,pokemon})
})
app.listen(PORT,()=>console.log("listening port:3000"))