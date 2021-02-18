const express = require("express");
const app = express();


app.listen(3000, () => {
    console.log("Server Is Listening");
})


app.use("/", "App deployed on Heroku");