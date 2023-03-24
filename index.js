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

app.listen(5000, () =>{
    console.log("Server running on the az-900-sql-server.mysql.database.azure.com");
})

