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
const colorPaletteSrc = "src/scss/color-palette/**/*.scss";
const colorPaletteDest = "dist/css/color-palette/";

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
const gridSystemSrc = "src/scss/grid-system/**/*.scss";
const gridSystemDest = "dist/css/grid-system/";

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


// -------------------------------------------------------------------------------------------------
const visibilitySrc = "src/scss/visibility/**/*.scss";
const visibilityDest = "dist/css/visibility/";

function visibility() {
    return gulp.src(visibilitySrc, {"allowEmpty": true})
        .pipe(sass({outputStyle: 'compressed'}, '').on("error", sass.logError))
        .pipe(dest(visibilityDest));
}

function cleanVisibility() {
    return gulp.src(visibilityDest, {"allowEmpty": true, read: false})
        .pipe(clean());
}

exports.visibility = series(cleanVisibility, visibility);


// -------------------------------------------------------------------------------------------------
const alignmentSrc = "src/scss/alignment/**/*.scss";
const alignmentDest = "dist/css/alignment/";

function alignment() {
    return gulp.src(alignmentSrc, {"allowEmpty": true})
        .pipe(sass({outputStyle: 'compressed'}, '').on("error", sass.logError))
        .pipe(dest(alignmentDest));
}

function cleanAlignment() {
    return gulp.src(alignmentDest, {"allowEmpty": true, read: false})
        .pipe(clean());
}

exports.alignment = series(cleanAlignment, alignment);


// -------------------------------------------------------------------------------------------------
const displaySrc = "src/scss/display/**/*.scss";
const displayDest = "dist/css/display/";

function display() {
    return gulp.src(displaySrc, {"allowEmpty": true})
        .pipe(sass({outputStyle: 'compressed'}, '').on("error", sass.logError))
        .pipe(dest(displayDest));
}

function cleanDisplay() {
    return gulp.src(displayDest, {"allowEmpty": true, read: false})
        .pipe(clean());
}

exports.display = series(cleanDisplay, display);


// -------------------------------------------------------------------------------------------------
const breadcrumbSrc = "src/scss/breadcrumb/**/*.scss";
const breadcrumbDest = "dist/css/breadcrumb/";

function breadcrumb() {
    return gulp.src(breadcrumbSrc, {"allowEmpty": true})
        .pipe(sass({outputStyle: 'compressed'}, '').on("error", sass.logError))
        .pipe(dest(breadcrumbDest));
}

function cleanBreadcrumb() {
    return gulp.src(breadcrumbDest, {"allowEmpty": true, read: false})
        .pipe(clean());
}

exports.breadcrumb = series(cleanBreadcrumb, breadcrumb);


// -------------------------------------------------------------------------------------------------
const borderRadiusSrc = "src/scss/border-radius/**/*.scss";
const borderRadiusDest = "dist/css/border-radius/";

function borderRadius() {
    return gulp.src(borderRadiusSrc, {"allowEmpty": true})
        .pipe(sass({outputStyle: 'compressed'}, '').on("error", sass.logError))
        .pipe(dest(borderRadiusDest));
}

function cleanBorderRadius() {
    return gulp.src(borderRadiusDest, {"allowEmpty": true, read: false})
        .pipe(clean());
}

exports.borderRadius = series(cleanBorderRadius, borderRadius);


// -------------------------------------------------------------------------------------------------
const sizingSrc = "src/scss/sizing/**/*.scss";
const sizingDest = "dist/css/sizing/";

function sizing() {
    return gulp.src(sizingSrc, {"allowEmpty": true})
        .pipe(sass({outputStyle: 'compressed'}, '').on("error", sass.logError))
        .pipe(dest(sizingDest));
}

function clearSizing() {
    return gulp.src(sizingDest, {"allowEmpty": true, read: false})
        .pipe(clean());
}

exports.sizing = series(clearSizing, sizing);



// -------------------------------------------------------------------------------------------------
const shadowSrc = "src/scss/shadow/**/*.scss";
const shadowDest = "dist/css/shadow/";

function shadow() {
    return gulp.src(shadowSrc, {"allowEmpty": true})
        .pipe(sass({outputStyle: 'compressed'}, '').on("error", sass.logError))
        .pipe(dest(shadowDest));
}

function clearShadow() {
    return gulp.src(shadowDest, {"allowEmpty": true, read: false})
        .pipe(clean());
}

exports.shadow = series(clearShadow, shadow);
