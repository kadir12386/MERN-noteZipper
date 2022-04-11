import express from "express";
import notes from "./data/notes.js";
import { config } from "dotenv";
// import { MongoClient } from "mongodb";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
// const userRoutes = require("./routes/userRoutes.js");
const app = express();
config();

// const MONGO_URL = process.env.MONGO_URI;

// async function createConnection() {
//   const client = new MongoClient(MONGO_URL);
//   await client.connect();

//   console.log("MongoDB connected succef");
// }

// createConnection();

connectDB();
app.use(express.json());
// (endpoint)
app.get("/", (req, res) => {
  res.send("API is Running");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
