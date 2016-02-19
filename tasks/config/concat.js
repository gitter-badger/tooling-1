/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * dist/public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {

	grunt.config.set('concat', {
		js: {
			src: require('../pipeline').jsFilesToInject,
			dest: 'dist/public/concat/production.js'
		},
		css: {
			src: require('../pipeline').cssFilesToInject,
			dest: 'dist/public/concat/production.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};
