const path = require("path");
const express = require("express");

const appName = process.env.APP_NAME;

const app = express();
app.set("view engine", "ejs");

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/", (req, res) => {
    res.render("home", { app_name: appName })
    console.log("Page Rendered by Server");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
