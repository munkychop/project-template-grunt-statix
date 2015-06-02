module.exports = function (grunt) {

    'use strict';

    var configs = require('./_grunt-configs/_config')(grunt);

    // console.log('configs:', JSON.stringify(configs));

    // Project configuration.
    grunt.initConfig(configs);

    // grunt.registerTask('default', ['shimly', 'browserify:dev', 'sass:dev', 'sass:styleguide', 'autoprefixer', 'csso', 'imagemin', 'grunticon', 'watch']);
    grunt.registerTask('dev', ['shimly', 'browserify:dev', 'sass:dev', 'sass:styleguide', 'autoprefixer', 'imagemin', 'grunticon']);
    grunt.registerTask('test', ['browserSync:serve', 'watch']);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']});
};