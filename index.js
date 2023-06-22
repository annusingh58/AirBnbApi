import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes/airbnbroutes.js";


const app=express();

app.use(express('dev'));
app.use(express.json());
app.use('/api/v1',router);

mongoose.connect('mongodb+srv://annusingh:anusingh58@cluster0.md93vry.mongodb.net/AIRBNBAPI')


.then(()=>console.log("db is  connected"))
.catch((error)=> console.log("db error =>",err))


app.listen(7000,()=>console.log("working on 7000"));
