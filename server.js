
const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log("Server Is Listening");
})

const data = (req,res) => {
    res.send("Started listening on heroku");
    console.log("Heroku App Deployed");
}


app.use("/", data);