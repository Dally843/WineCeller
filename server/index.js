const express = require("express");
const itemRoutes = require('./routes/item.routes')
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('./database-mysql');
var List = require('./database-mongo');
const mongo  = require("mongoose");
const cors=require('cors')
const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));



app.use("/api", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
