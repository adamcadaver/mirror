module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      options: {
        mangle: false,
        beautify: true
      },
      my_target: {
        files: {
          'app.min.js': [
            'node_modules/angular/angular.js',
            'app/app.module.js',
            'app/app.controller.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['app/**/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
  },
},
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify']);

};