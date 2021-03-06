
module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	var base = './_site';

   grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jekyll: {
			dist: {
      			options: {
                  dest: '<%= dist %>',
                  config: '_config.yml'
      			}
      		}
		},
		connect: {
			options: {
				port: 9000,
				livereload: 35729,
				hostname: 'localhost'
			},
			livereload: {
				options: {
					open: true,
					base: [ base ]
				}
			}
		},
		watch: {
			html: {
				files: [
               'index.html',
               '_posts/*.html',
               '_posts/*.md',
               '_layouts/*.html',
               '_includes/*.html'
            ],
				tasks: ['jekyll'],
				options: {
					livereload: true
				}
			},
			css: {
				files: ['css/*.css'],
				tasks: ['jekyll'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('serve', function () {
        grunt.task.run([
        	   'jekyll',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('default', ['serve']);
}