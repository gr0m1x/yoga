module.exports = function() {
    $.gulp.task('sass', function(){
      return $.gulp.src(['src/static/sass/style.scss', 'src/static/sass/*.sass'])
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass({
        'include css': true
      }))
      
      .pipe($.gp.autoprefixer({
        browsers: ['last 5 versions']
    }))
      .on("error", $.gp.notify.onError({
        title: "style"
    }))
      .pipe($.gp.csso())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest('build/css/'))
      .pipe($.bs.reload({
        stream:true
      }));
    
    });
  }