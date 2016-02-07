module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default: {
        src: [
          'app/app.module.ts',
          'app/quotes/quotes.service.ts',
          'app/quotes/quotes.directive.ts',
          'app/quotes/quotes.controller.ts'
        ],
        out: 'app.js'
      }
    },
    uglify: {
      options: {
        mangle: false,
        beautify: true
      },
      my_target: {
        files: {
          'app.min.js': [
            'node_modules/angular/angular.js',
            'app.js'
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: ['app/**/*.ts'],
        tasks: ['ts', 'uglify'],
        options: {
          spawn: false,
        },
      }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", ["ts", 'uglify']);
};