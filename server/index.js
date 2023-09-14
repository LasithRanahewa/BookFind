require("dotenv").config();
// import modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");

// import routes
const authRouter = require("./routes/authRouter");
const auhtorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const bookstoreRouter = require("./routes/bookstoreRouter");
// const copyRouter = require("./routes/copyRouter");
const findACopyRouter = require("./routes/findACopyRouter");
// const reservationRouter = require("./routes/reservationRouter");
const userRouter = require("./routes/userRouter");
const vendorRouter = require("./routes/vendorRouter");

// do not load the environment varibles on a production environment
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// HANDELING UPLOADS
const { parseFormData } = require("pechkin");
const fs = require("fs");
const path = require("path");
const pechkinFileUpload = require("./controllers/upload.js");

// setup express
const app = express();

// setup to process form data
app.use(
  express.urlencoded({
    extended: true,
  })
);

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("successfully connected to the database");
  })
  .catch((err) => {
    console.log("database connection failed", err);
  });

// use CORS to handle the request's domain
app.use(
  cors({
    origin: [
      "http://127.0.0.1:3000",
      process.env.ORIGIN || "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Origin",
      "X-Requested-With",
      "Accept",
      "x-client-key",
      "x-client-token",
      "x-client-secret",
      "Authorization",
    ],
    credentials: true,
  })
);

// session management
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

// parse cookies
app.use(cookieParser(process.env.SESSION_SECRET));

// parse json objects in requests
app.use(express.json());

// use passport authentication
app.use(passport.initialize());
app.use(passport.session());

// initialise passport as authentication middleware
const initializePassport = require("./passport-config");
initializePassport(passport);

// routes for REST API
app.use("/api/auth", authRouter);
app.use("/api/author", authRouter);
app.use("/api/book", bookRouter);
app.use("/api/bookstore", bookstoreRouter);
// app.use("/api/copy", copyRouter);
app.use("/api/findACopy", findACopyRouter);
// app.use("/api/reservation", reservationRouter);
app.use("/api/vendor", vendorRouter);
app.use("/api/user", userRouter);

// test
app.get("/", (req, res) => {
  Post.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(408).json({ error });
    });
});

app.post("/upload", pechkinFileUpload(), async (req, res) => {
  const files = [];
  for await (const { stream, field, filename } of req.files) {
    try {
      const fileExtension = path.extname(filename);
      const uniqueFilename = `${Date.now()}${fileExtension}`;
      const filePath = path.join(__dirname, "uploads", uniqueFilename);
      const writeStream = fs.createWriteStream(filePath);
      stream.pipe(writeStream);
      await new Promise((resolve, reject) => {
        writeStream.on("finish", resolve);
        writeStream.on("error", reject);
      });

      files.push({ field, filename, filePath });
    } catch (err) {
      console.error("Error saving file:", err);
    } finally {
      stream.resume();
    }
  }
  console.log(files); //Try logic here as its the easiest
  return res.json({ fields: req.body, files });
});

// server connection
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
