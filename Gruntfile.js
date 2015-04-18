module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            build: {
                src: ['build/']
            },
            all: {
                src: ['build/', 'dist/']
            }
        },
        dataUri: {
            dist: {
                src: ['src/*.css'],
                dest: 'build/',
                options: {
                    target: ['**'],
                    fixDirLevel: true
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'build/button.min.css': ['build/button.css']
                }
            }
        },
        concat: {
            options: {
                process: function (src, filepath) {
                    var css = grunt.file.read('build/button.min.css');
                    return src.replace('[[minified_css]]', css);
                }
            },
            dist: {
                src: ['src/button.js'],
                dest: 'build/button.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'dist/whatsapp-button.js': ['build/button.js']
                }
            }
        },
        jshint: {
            button: ['src/button.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-data-uri');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['jshint:button', 'clean:all', 'dataUri', 'cssmin', 'concat', 'uglify', 'clean:build']);
};