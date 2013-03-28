/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      jasmine_node: {
        projectRoot: "."
      },

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
          slice: true,
          require: true,
          exports: true
        }
      },
      js: ['src/**/*.js']
    }
  });

  // Laoded tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jasmine-node');

  // Default task.
  grunt.registerTask('default', ['jshint', 'test']);
  grunt.registerTask('test', ['jasmine_node']);
};
