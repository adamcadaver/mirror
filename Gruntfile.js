module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
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
    karma: {
      unit: {
        configFile: "karma.conf.js"
      }
    },
    watch: {
      scripts: {
        files: ['app/**/*.ts'],
        tasks: ["build"],
        options: {
          spawn: false,
        },
      }
    }
  });

  grunt.registerTask("build", ["tslint", "ts", 'uglify']);
  grunt.registerTask("test", ["karma"]);
  grunt.registerTask("default", ["build"]);
};