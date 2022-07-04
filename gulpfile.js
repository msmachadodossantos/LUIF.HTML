"use strict";

const gulp = require("gulp");
const {src, dest, series, parallel} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require('gulp-concat');
const clean = require('gulp-clean');


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


// -------------------------------------------------------------------------------------------------
const colorPaletteSrc = "src/scss/color_palette/**/*.scss";
const colorPaletteDest = "dist/css/color_palette/";

function colorPalette() {
    return gulp.src(colorPaletteSrc, {"allowEmpty": true})
        .pipe(sass({outputStyle: 'compressed'}, '').on("error", sass.logError))
        .pipe(dest(colorPaletteDest));
}

function cleanColorPalette() {
    return gulp.src(colorPaletteDest, {"allowEmpty": true, read: false})
        .pipe(clean());
}

exports.colorPalette = series(cleanColorPalette, colorPalette);


// -------------------------------------------------------------------------------------------------
const gridSystemSrc = "src/scss/grid_system/**/*.scss";
const gridSystemDest = "dist/css/grid_system/";

function gridSystem() {
    return gulp.src(gridSystemSrc, {"allowEmpty": true})
        .pipe(sass({outputStyle: 'compressed'}, '').on("error", sass.logError))
        .pipe(dest(gridSystemDest));
}

function cleanGridSystem() {
    return gulp.src(gridSystemDest, {"allowEmpty": true, read: false})
        .pipe(clean());
}

exports.gridSystem = series(cleanGridSystem, gridSystem);


// -------------------------------------------------------------------------------------------------
const spacingSrc = "src/scss/spacing/**/*.scss";
const spacingDest = "dist/css/spacing/";

function spacing() {
    return gulp.src(spacingSrc, {"allowEmpty": true})
        .pipe(sass({outputStyle: 'compressed'}, '').on("error", sass.logError))
        .pipe(dest(spacingDest));
}

function cleanSpacing() {
    return gulp.src(spacingDest, {"allowEmpty": true, read: false})
        .pipe(clean());
}

exports.spacing = series(cleanSpacing, spacing);
