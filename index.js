// const http= require('http');

// http.createServer(
//     (req, res)=>{
//         res.setHeader('Content-Type','text/html');
//         res.write("<h1>hello world</h1>");
//         res.end()
//     }
// ).listen(8081)

    

// const connect = require('connect');
// const app = connect();

// const logger = (req,res,next)=>{
//     console.log(req.url, req.method);
//     next();
// }


// const home = (req,res,next)=>{  
//     res.setHeader('Content-Type','text/html');
//     res.end("<h1>HomePage</h1>");
// }

// const aboutus = (req,res,next)=>{
//     res.setHeader('Content-Type','text/html');
//     res.write("<h1>About Us</h1>")
//     res.write("<p>Name: cccc</p>")
//     res.end();
// }

// app.use(logger);
// app.use('/home',home);
// app.use('/about',aboutus);

// app.listen(8081);

// console.log("server is running")

const express = require('express');

const app = express();
const home =(req,res,next)=>{
    res.setHeader('Content-Type','text/html');
    res.send("<h1>About Us</h1>")
    res.end()
}

app.use('/',home);
app.listen(8081);
