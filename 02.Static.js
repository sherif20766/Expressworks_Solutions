const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(process.argv[3] || path.join('public')))

app.listen(process.argv[2] || 3000);
