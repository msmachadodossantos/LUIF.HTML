"use strict";

const gulp = require("gulp");
const {src, dest, series, parallel} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require('gulp-concat');
const clean = require('gulp-clean');


// -------------------------------------------------------------------------------------------------
const devSrc = "src/scss/**/*.scss";
const devDest = "dist/css/dev/";

function dev() {
    return gulp.src(devSrc, {"allowEmpty": true})
        .pipe(sass({outputStyle: 'compressed'}, '').on("error", sass.logError))
        .pipe(concat('dev.css'))
        .pipe(dest(devDest));
}

function cleanDev() {
    return gulp.src(devDest, {"allowEmpty": true, read: false})
        .pipe(clean());
}

exports.dev = series(cleanDev, dev);


// -------------------------------------------------------------------------------------------------
const coreSrc = "src/scss/core/**/*.scss";
const coreDest = "dist/css/core/";

function core() {
    return gulp.src(coreSrc, {"allowEmpty": true})
        .pipe(sass({outputStyle: 'compressed'}, '').on("error", sass.logError))
        .pipe(dest(coreDest));
}

function cleanCore() {
    return gulp.src(coreDest, {"allowEmpty": true, read: false})
        .pipe(clean());
}

exports.core = series(cleanCore, core);
