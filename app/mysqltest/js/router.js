/**
 * Created by 一方 on 2016/11/20.
 */
"use strict";
const express=require("express");
const xtpl=require("xtpl");
let listRouter=express.Router();//定义路由
listRouter.get("/person",(req,res)=>{
    req.models.person.find({},(err,data)=>{
        if(err){
            res.end("数据加载失败");
            return;
        }
        xtpl.renderFile("../static/index.html",{array:data},(err,content)=>{
            if(err){
                res.end("页面请求失败");
                return;
            }
            res.end(content);
        })
    })
})
module.exports=listRouter;