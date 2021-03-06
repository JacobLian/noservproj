var gulp = require('gulp')
    , sourcemaps = require('gulp-sourcemaps')
    , CacheBuster = require('gulp-cachebust')
    , cachebust = new CacheBuster()
    , concat = require('gulp-concat')
    , babel = require('gulp-babel')
    , print = require('gulp-print')
    , uglify = require('gulp-uglify')


gulp.task('build-css', function(){
return gulp.src('./styles/*.css')
.pipe(sourcemaps.init())
.pipe(cachebust.resources())
.pipe(concat('styles.css'))
.pipe(sourcemaps.write('./maps'))
.pipe(gulp.dest('./dist'));

})

gulp.task('build-js', function() {
   return gulp.src('js/*.js')               
      .pipe(sourcemaps.init())
      .pipe(print())                        
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./')) 
      .pipe(gulp.dest('./dist/js')); 
});

gulp.task('build', ['build-css', 'build-js'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html', './styles/*.*css', './js/*.js'], ['build']);
});