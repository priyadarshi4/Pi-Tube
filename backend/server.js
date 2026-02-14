require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const router = require("./Router/router");

const app = express();
const port = process.env.PORT || 3000;


app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://pi-tube-nine.vercel.app"   // change after frontend deploy
    ],
    credentials: true,
  })
);

// ✅ Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Static files (optional)
app.use(express.static(path.join(__dirname, "public")));

// ✅ API ROUTES (IMPORTANT)
app.use("/api", router);

// ✅ Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is connected!" });
});

app.listen(port, () => {
  console.log(`🚀 Backend running at http://localhost:${port}`);
});
