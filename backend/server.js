import express from "express";
import path from "path";
import note from "./data/notes.js";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

// import express from "express";
// import notes from "./data/notes.js";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
// import noteRoutes from "./routes/noteRoutes.js";
// import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
// ==================================
// import path from "path";
// import { resolve } from "path";
// import { MongoClient } from "mongodb";
// import { path } from "express/lib/application.js";
// const userRoutes = require("./routes/userRoutes.js");
// const path = require("path");

const app = express();
config();
connectDB();
app.use(express.json());

// const MONGO_URL = process.env.MONGO_URI;

// async function createConnection() {
//   const client = new MongoClient(MONGO_URL);
//   await client.connect();

//   console.log("MongoDB connected succef");
// }

// createConnection();

// (endpoint)
// app.get("/", (req, res) => {
//   res.send("API is Running");
// });
// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
// ------------------------ deployment -------------------
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (res, req) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is Running");
  });
}
// ------------------------ deployment -------------------
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
