module.exports = function(grunt) {
  grunt.initConfig({
    clean: ['dist'],
	copy: {
		html: {
			cwd: 'src/', expand: true, src: 'index.html', dest: 'dist/'
		},
		images: {
			cwd: 'src/', expand: true, src: 'assets/img/**', dest: 'dist/'
		},
		boostrap: {
			cwd: 'node_modules/bootstrap/dist/', expand: true, src: 'fonts/**', dest: 'dist/assets/'
		}
	},
	cssmin: {
		combine: {
			files: {
				'dist/assets/css/style.min.css': ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'src/assets/css/style.css']
			}
		}
	},
	uglify: {
		options: {
			mangle: false
		},
		dist: {
			files: {
				'dist/assets/js/generator.min.js': ['src/assets/js/generator.js']
			}
		}
	 },
	'gh-pages': {
		options: {
			base: 'dist/'
		},
		src: ['**/*']
	}
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.registerTask('default', ['clean', 'copy', 'cssmin', 'uglify']);
  grunt.registerTask('deploy', ['default', 'gh-pages']);
};