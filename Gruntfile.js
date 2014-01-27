/*global module:true */

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),

    concat : {
      dist : {
        src  : ['src/base64.js'],
        dest : 'dist/base64.js'
      }
    },

    uglify : {
      dist : {
        src  : ['dist/base64.js'],
        dest : 'dist/base64.min.js'
      }
    },

    jshint : {
      options : {
        jshintrc : './.jshintrc'
      },
      all     : [
        'Gruntfile.js',
        'src/js/**/*.js',
        'spec/**/*.js',
      ]
    },

    jasmine : {
      test : {
        src     : [
          'vendor/underscore.js',
          'src/base64.js'
        ],
        options : {
          helpers : 'spec/helpers/*.js',
          specs   : [
            'spec/**/*Spec.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['jshint', 'test']);
  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('build', ['jshint', 'test', 'concat', 'uglify', 'jasmine']);
};
