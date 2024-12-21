// const express = require("express");  would not work 
// @tsignore would fix it but we mostly do not do that 
// npm install -d @types/express
// -d means , dev dependency. 
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const app = express();

app.post("/api/v1/signin",(req,res)=>{
    
})
app.post("/api/v1/content",(req,res)=>{

})
app.get("/api/v1/content",(req,res)=>{

})
app.delete("/api/v1/content",(req,res)=>{

})
app.post("/api/v1/brain/share",(req,res)=>{

})

app.get("api/v1/brain/:shareLink",(req,res)=>{
    
})





