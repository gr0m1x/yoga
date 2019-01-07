'use strict';

global.$ = {
  gulp: require('gulp'),
  del: require('del'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),

  patch: {
    tasks: require('./gulp/config/tasks.js')
  }
};

$.patch.tasks.forEach(function (taskPath) {
  require(taskPath)();
})

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel(
  //'pug', 'stylus',
  'html','scripts:lib','scripts','img:dev','fonts','sass'),
  $.gulp.parallel('watch','serve')
  ));

$.gulp.task('build', $.gulp.series(
  $.gulp.parallel(
  //'pug', 'stylus',
  'html','scripts:lib','scripts','img:build','fonts','sass'),
  $.gulp.parallel('watch','serve')
  ));