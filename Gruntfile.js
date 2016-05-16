'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    php: {
      server: {
        options: {
          port: 8000,
          router: 'router.php'
        }
      }
    },

    watch: {livereload: {
        options: {
          livereload: true,
        },
        files: [
          'app/design/frontend/Aleks/default/{layout,template}/{,**/}*.{xml,phtml}',
          'skin/frontend/Aleks/default/css/{,*/}*.css'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-php');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('serve', ['php', 'watch']);
};
