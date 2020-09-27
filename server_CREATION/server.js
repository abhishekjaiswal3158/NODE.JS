const express = require("express")
const app = express();

app.get("/", function(req, res) {
    res.send("HELLO WORLD")
})
app.get("/about", function(req, res) {
    res.send("this is abhishek jaiswal")
})
app.listen(3000, function() {
    console.log("running...")
})