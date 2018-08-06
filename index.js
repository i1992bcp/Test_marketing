var express = require("express");
var app = express();
const PORT = process.env.PORT

app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});


app.listen(PORT);
