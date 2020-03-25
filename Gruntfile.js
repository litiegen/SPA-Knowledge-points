/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        expand: true,
        src: ['*.html', './*/*.html', '??-*/??-*/*.html'],
        dest: 'dist/'
      }
    },
    cssmin: {
      files: {   
        expand: true,
        src: ['css/*.css', './*/*.css', '??-*/??-*/*.css', '??-*/css/*.css'],
        dest: 'dist/'
      }
    },
    uglify: {
      main: {
        files: [{
          expand: true,
          src: ['js/*.js', './*/*.js', '??-*/0?-*/*.js', '??-*/js/*.js'],
          dest: 'dist/'
        }]
      }
    },
    imagemin: {
      dist: {
          options: {
              optimizationLevel: 1
          },
          files: [{
              expand: true,
              cwd: '01-html-widget/images/',
              src: ['**/*.{png,jpg,jpeg,gif}'],
              dest: 'dist/01-html-widget/images/'
          }]
      }
  }
  });

  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask('default', ['uglify','cssmin', 'htmlmin','imagemin']);
};