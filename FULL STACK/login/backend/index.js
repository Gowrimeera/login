const express = require ("express")
const app = express()
const cors=require("cors")

app.use(cors())

const username="Gowri"
const password=123

app.use(express.json())

app.post("/login",function(req,res){
   if(req.body.username == username && Number( req.body.password) == password)
   {
    res.send(true)
   }
   else{
    res.send(false)
   }
})

app.listen(5001,function(){
    console.log("Server Started...")
})