const express= require('express');
// const connection = require("./connection");
const productRoute=require("./routes/contact");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.use('/api', productRoute);
module.exports = app;



