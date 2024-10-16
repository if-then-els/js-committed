const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/testing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// CORS Configuration
app.use(
  cors({
    origin: "http://192.168.0.150:3000",
    credentials: true,
  })
);
// Session Middleware
app.use(
    session({
      secret: "your-secret-key",
      resave: false,
      saveUninitialized: true,
      store: MongoStore.create({
        mongoUrl: "mongodb://localhost:27017/landlordapp",
      }),
      cookie: { secure: false }, // Set to true if using HTTPS
    })
  );


  const userSchema = new mongoose.Schema ({
    username: String,
    email: String,
  });

  const test5Schema = new mongoose.Schema({
    
  })