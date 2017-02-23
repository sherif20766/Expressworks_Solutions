/* Forms are important. This exercise will teach you how to process the traditional (non-AJAX) web form.

Write a route ('/form') that processes HTML form input

(<form><input name="str"/></form>) and responds with the value of str backwards.*/

const express = require("express");
const app = express();

const port = process.argv[2];

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.post("/form",(req,res)=>res.send(req.body.str.split("").reverse().join("")));

app.listen(port||3000);