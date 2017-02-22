/*This exercise is about serving static assets like HTML files.

There are many ways to do it, but we want you to apply static middleware to serve the file index.html.

Please don't use ANY routes like app.get. ONLY static.

Your solution must listen on the port number supplied by process.argv[2].*/


const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(process.argv[3] || path.join('public')))

app.listen(process.argv[2] || 3000);
