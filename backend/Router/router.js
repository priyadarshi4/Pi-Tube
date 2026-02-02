require("dotenv").config();
require("../Database/database");

const express = require("express");
const router = express.Router();

// Import route modules
const authRoutes = require("./auth");
const channelRoutes = require("./channel");
const videoRoutes = require("./videos");
const likeRoutes = require("./likes");
const commentRoutes = require("./comments");
const studioRoutes = require("./studio");

// 🔐 Auth routes
// signup, login, userdata
router.use("/", authRoutes);

// 📺 Other feature routes
router.use("/channel", channelRoutes);
router.use("/videos", videoRoutes);
router.use("/likes", likeRoutes);
router.use("/comments", commentRoutes);
router.use("/studio", studioRoutes);

module.exports = router;
