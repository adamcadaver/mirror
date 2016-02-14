module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default: {
        src: ['app/**/*.ts'],
        out: 'app.js'
      }
    },
    tslint: {
        default: {
          options: {
            configuration: "tslint.json"
          },
          files : {
            src: ['app/**/*.ts']
          }
        }
    },
    uglify: {
      options: {
        mangle: false,
        beautify: true
      },
      default: {files: {'app.min.js': ['app.js']}
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
  grunt.loadNpmTasks("grunt-tslint"); // Not part of the build yet
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", ["ts", 'uglify']);
};