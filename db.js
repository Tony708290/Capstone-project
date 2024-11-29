const mysql = require("mysql");
const express = require ( "express" );

// const pool = mysql.createPool({
//     'host':'localhost',
//     'user':'triptcrc_kenp',
//     'password':'Gabrielkehinde007@',
//     'database':'triptcrc_taskmaster'
// });


const app = express();

app.get("/",(req,res)=>{
    
  res.send("dhdhdh dhdhd")

});

app.listen(process.env.PORT || 3000,()=>{
    console.log("App is runing on 127.0.0.1:3000 on the browser");
})