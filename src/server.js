const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

//settings
app.set("port", process.env.PORT || 5000);
app.set("json spaces", 2);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/test", require("./routes/index"));
app.use("/api/stars", require("./routes/stars"));

//server running
app.listen(app.get("port"), () => {
    console.log("Server running on port: ", app.get("port"));
});