/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, except coffeescript and less files, from the src folder
 * into the dist/public directory.
 *
 * # build task config
 * Copies all directories and files from the dist/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './src',
				src: ['**/*.!(coffee|less)'],
				dest: 'dist/public'
			}]
		},
		build: {
			files: [{
				expand: true,
				cwd: 'dist/public',
				src: ['**/*'],
				dest: 'www'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
