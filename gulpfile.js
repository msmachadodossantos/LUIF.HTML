"use strict";

const gulp = require("gulp");
const {src, dest, series, parallel} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
