/**
 * Created by 一方 on 2016/11/20.
 */
"use strict";
const express=require("express");
let app=express();
    app.get("/get",(req,res)=>res.end("GET请求成功"));
    app.post("/post",(req,res)=>res.end("post请求成功"));
    app.all("/all",(req,res)=>res.end("all请求成功"));

app.listen(4561,"127.0.0.1",()=>console.log("服务器开启成功!"))