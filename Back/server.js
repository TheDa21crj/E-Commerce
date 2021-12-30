const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.use("/api/register", require("./routes/register"));
app.use("/api/login", require("./routes/login"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});