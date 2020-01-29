/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();

router.get("/movies", (req, res) => {
    res.end("Look Ma, no hands!")
})