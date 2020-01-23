const express = require("express");
const mysql = require("mysql");
const conn = require("./data.js");
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("Hello World"));

app.listen(port, () => console.log(`Running on localhost:${port}`));
