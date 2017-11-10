"use strict";
const express       = require("express");
const patientData   = require("./corrected-patient.json");
const server        = express();
const pug           = require("pug");

server.listen(3000, function() {
    console.log("Server listening on localhost:3000");
});

server.get("/", (req, res) => {
    
});
