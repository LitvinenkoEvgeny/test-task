// this is the main file that pulls in all other modules
// you can require() bower components too!
let $ = require("jquery");
let example = require("./example");
import block from "./block";
example.init();
block();
