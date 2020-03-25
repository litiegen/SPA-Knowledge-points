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
        src: ['*.html', './*/*.html', './*/*/*.html'],
        dest: 'dist/'
      }
    },
    cssmin: {
      files: {   
        expand: true,
        src: ['css/*.css', './*/*.css', './*/*/*.css', './*/css/*.css'],
        dest: 'dist/'
      }
    },
    uglify: {
      main: {
        files: [{
          expand: true,
          src: ['js/*.js', './*/*.js', './*/*/*.js', './*/js/*.js'],
          dest: 'dist/'
        }]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask('default', ['uglify','cssmin', 'htmlmin']);
};