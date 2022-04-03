const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

connectDB();

app.use(express.json({ extended: false }));

app.use(cookieParser());

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

// app.use("/api/register", require("./routes/register"));
// app.use("/api/login", require("./routes/login"));
// app.use("/api/myAccount", require("./routes/myAccount"));
// app.use("/api/TrackOrder", require("./routes/TrackOrder"));
// app.use("/api/Order", require("./routes/Order"));
// app.use("/api/WishList", require("./routes/WishList"));
// app.use("/api/Cart", require("./routes/Cart"));
app.use("/api/RegAdmin", require("./routes/RegAdmin"));
app.use("/api/admin/login", require("./routes/Admin"));
app.use("/api/admin/", require("./routes/AdminPost"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});