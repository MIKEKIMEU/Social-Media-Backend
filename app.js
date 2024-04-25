import express from "express";
import mongoose from "mongoose";

const app = express();


mongoose.connect("mongodb+srv://admin:vvIzZQVXZoMVCBPR@cluster0.jls7c4s.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0"
)
.then(()=>app.listen(5000))
.then(()=>
console.log("Connected To Database and Listening to localhost:5000")
)

.catch((err)=>console.log(err));


//password: vvIzZQVXZoMVCBPR