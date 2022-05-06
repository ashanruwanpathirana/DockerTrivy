const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        message:"Welcome to the Dashboard 😃"
    })
});

app.get("/login", (req, res) => {
    res.json({
        message:"Welcome to the Login Page 😃"
    })
});

app.get("/signup", (req, res) => {
    res.json({
        message:"Welcome to the Signup Page 😃"
    })
});

app.listen(8000,() => {
    console.log("App is Running at port 8000 !")
});