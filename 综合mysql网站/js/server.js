/**
 * Created by 一方 on 2016/11/20.
 */
"use strict";
//通过express创建服务器
const express=require("express");
//构建服务器
let app=express();
//引入路由模块
let listRouter=require("./router.js")
//引入orm框架模块
const orm=require("orm");
//让服务器调用orm和mysql 账户名:密码@所在主机:端口/数据库名字
app.use(orm.express("mysql://root:ggts1122@localhost:3306/test",{
    //定义数据库模块 models,db会添加到req中
    define:function (db,moudels,next) {
        //定义表
        moudels.person=db.define("person",{
            //定义字段(属性)的数据类型
            id:{type:"serial",key:true},//自增,主键
            name:String,
            age:Number,
            address:String
        });
        next();
    }
}))
//加载静态资源
app.use(express.static("../static"));
//使用路由模块
app.use("/",listRouter)
app.listen(12358,"127.0.0.1",()=>{
    console.log("服务器开启成功")
})