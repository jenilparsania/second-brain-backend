// const express = require("express");  would not work 
// @tsignore would fix it but we mostly do not do that 
// npm install -d @types/express
// -d means , dev dependency. 
// if you make any changes in the ts file then run build command first and then run the start command 
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";

const app = express();
app.use(express.json())

const JWT_PASSWORD = "123123";

app.post("/api/v1/signin", async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if(existingUser){
        const token = jwt.sign({
            id : existingUser._id
        },JWT_PASSWORD)

        res.json({
            token
        })
    }else{
        res.status(403).json({
            message : "Incorrect crendentials "
        })
    }
})
app.post("/api/v1/signup",async (req,res)=>{
    //TODO : zod validations , hash the passwords , if user already exists then return 411 status code and system should not crash 
    const username = req.body.username;
    const password = req.body.password;

    try {
        await UserModel.create({
            username : username,
            password : password
        })
    
        res.json({
            message: "User signed up"
        })
    } catch (error) {
        res.status(411).json({
            message : "User already exists"
        })
        
    }
    

})
app.get("/api/v1/content",(req,res)=>{

})
app.delete("/api/v1/content",(req,res)=>{

})
app.post("/api/v1/brain/share",(req,res)=>{

})

app.get("api/v1/brain/:shareLink",(req,res)=>{
    
})


app.listen(3000);


