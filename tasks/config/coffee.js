/**
 * Compile CoffeeScript files to JavaScript.
 *
 * ---------------------------------------------------------------
 *
 * Compiles coffeeScript files from `src/scripts` into Javascript and places them into
 * `dist/public/scripts` directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-coffee
 */
module.exports = function(grunt) {

	grunt.config.set('coffee', {
		dev: {
			options: {
				bare: true,
				sourceMap: true,
				sourceRoot: './'
			},
			files: [{
				expand: true,
				cwd: 'src/scripts/',
				src: ['**/*.coffee'],
				dest: 'dist/public/scripts',
				ext: '.js'
			}, {
				expand: true,
				cwd: 'src/scripts/',
				src: ['**/*.coffee'],
				dest: 'dist/public/scripts',
				ext: '.js'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-coffee');
};
