//importing functions from gulp package
const { src, dest, watch, series } = require('gulp')
// import gulp-sass plugin, pass in sass compiler
const sass = require('gulp-sass')(require('sass'))

//compiles sass into css
function buildStyles() {
    //path to source file
    return src('index.scss')
    //.pipe combines functions, the output of each function becomes input for next??
        .pipe(sass())
        //files will be compiled into this folder
        .pipe(dest('css'))
}

//actively watch sass file and updates
function watchStyles() {
    //watch array files [index.scss file], 2nd arg function to run when file changes
    watch(['index.scss'], buildStyles)
}

//series functions allows to export/run functions in order
exports.default = series(buildStyles, watchStyles)