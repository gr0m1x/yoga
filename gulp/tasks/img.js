module.exports = function() {
    $.gulp.task('img:dev', function(){
      return $.gulp.src('src/static/img/*.{png,jpg,gif,jpeg}')

      .pipe($.gulp.dest('build/img/'));
    });

    $.gulp.task('img:build', function(){
      return $.gulp.src('src/static/img/*.{png,jpg,gif,jpeg}')

      .pipe($.gp.tinypng('W0IDh6Wm00Y1vWqZEaIDRVfA601UCoxJ'))
      .pipe($.gulp.dest('build/img/'));
    });
}