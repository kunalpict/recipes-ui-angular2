const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint');
const browserSync = require('browser-sync');
const reload = browserSync.reload;


// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// clean the contents of the distribution directory
gulp.task('clean:compiled-src', function () {
  return del('src/**/*.js.map');
});
// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
  return gulp.src(['**/*','!**/*.ts'], { base : './src/' })
    .pipe(gulp.dest('dist'))
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
     "node_modules/es6-shim/es6-shim.min.js",
     "node_modules/systemjs/dist/system-polyfills.js",
     "node_modules/angular2/bundles/angular2-polyfills.js",
     "node_modules/systemjs/dist/system.src.js",
     "node_modules/rxjs/bundles/Rx.js",
     "node_modules/angular2/bundles/angular2.dev.js",
     "node_modules/angular2/bundles/router.dev.js"
    ])
    .pipe(gulp.dest('dist/lib'))
});

// linting
gulp.task('tslint', function() {
  return gulp.src('src/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});


// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp
    .src('src/app/**/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('dist/app'));
});


// Run browsersync for development
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: '.'
    }
  });

  gulp.watch(['src/app/**/*', 'src/**/*.html', 'src/**/*.css'], ['buildAndReload']);
});

gulp.task('build', ['clean','compile', 'copy:libs', 'copy:assets']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);
