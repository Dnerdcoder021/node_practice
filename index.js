const http=require("http");
const fs=require("fs");
const url=require("url");
const express=require("express");

const app=express();
app.get('/',(req,res)=>{
    return res.send("hello from homepage");
});
app.get('/about',(req,res)=>{
    return res.send("hello from Aboutpage");
});
const myServer=http.createServer(app);
// const myServer=http.createServer((req,res)=>{
//     if(req.url ==="/favicon.ico")return res.end();
//     const myUrl=
//     const log=`${Date.now()}: ${req.url}New Req Rec\n`;
//     fs.appendFile("log.txt",log,(err,data)=>{
//         res.end("Hello From Server");
//     })
//     // console.log(req.headers);
//     // console.log("new Req rec.");
//     res.end("Hello from server");
// });
myServer.listen(8000,()=>console.log("Server started"));