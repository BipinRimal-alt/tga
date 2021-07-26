const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();
const app = express();
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");

app.use(express.json());
app.use(cookieParser());

app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(port, () => {
      console.log(`Server is running on port ${port} with MongoDb`);
    })
  )
  .catch((err) => console.log(err));

// routes
app.get("*", checkUser);
app.use("/api/", authRoutes);
app.get("/", (req, res) => res.render("home"));
app.get("/workouts", requireAuth, (req, res) => res.render("workouts"));
