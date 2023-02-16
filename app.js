const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

//routes 
const router = express.Router()

app.use(express.static("public"))

app.set('view engine', 'ejs');

app.get("/", (req,res)=>{

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month:"long"
 
    }
    var day = today.toLocaleDateString("en-US");
 
    res.render("product1", {kindOfDay: day});
 })

 app.get("/product1", (req, res)=>{
   
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month:"long"
 
    }
    var day = today.toLocaleDateString("en-US");
 
    res.render("product1", {kindOfDay: day});
})

app.get("/product2", (req, res)=>{
   
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month:"long"
 
    }
    var day = today.toLocaleDateString("en-US");
 
    res.render("product2", {kindOfDay: day});
})

app.get("/product3", (req, res)=>{
   
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month:"long"
 
    }
    var day = today.toLocaleDateString("en-US");
 
    res.render("product3", {kindOfDay: day});
})




app.listen(3000, ()=>{
   console.log("Server is running at port 3000");
})

