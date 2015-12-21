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
          '<%= env.buildDir %>/styles/style.css' : '<%= env.appDir %>/sass/style.scss'
        }
      }
    },

    copy: {
      html: {
        files: [
          {expand: true, cwd: '<%= env.appDir %>/html/', src: ['**'], dest: '<%= env.buildDir %>'}
        ]
      },
      
      images: {
        files: [
          {expand: true, cwd: '<%= env.appDir %>', src: ['img/**'], dest: '<%= env.buildDir %>'}
        ]
      }
    },

    watch: {
      css: {
        files: '<%= env.appDir %>/**/*.scss',
        tasks: ['sass']
      },

      html: {
        files: ['<%= env.appDir %>/**/*.html'],
        tasks: ['copy:html']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build:dev',['clean', 'sass', 'copy:html', 'copy:images', 'watch']);
};