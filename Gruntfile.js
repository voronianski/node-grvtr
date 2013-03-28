/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: false,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true,
          Backbone: true,
          _: true,
          Marionette: true,
          $: true,
          slice: true
        }
      },
      js: ['src/**/*.js']
    }
  });

  // Laoded tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task.
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['mocha']);
  grunt.registerTask('watch-test', ['watch']);
};
