module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    env: {
      appDir: 'assets',
      buildDir: 'dist'
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: ['<%= env.buildDir %>/*']
        }]
      }
    },

    sass: {
      dist: {
        files: {
          '<%= env.buildDir %>/style/style.css' : '<%= env.appDir %>/sass/style.scss'
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev',['clean', 'sass', 'watch']);
};