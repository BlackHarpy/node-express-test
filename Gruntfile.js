module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            // define the files to lint
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            express: {
                files: ['./*.js', './src/server.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            }

        },
        server: {
            port: 9000,
            base: './src'
        },
        express: {
            options: {},
            dev: {
                options: {
                    script: 'app.js',
                    livereload: true
                }
            }
        },

        open: {
            dev: {
                path: 'http://localhost:9000',
            }

        },
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('serve', ['express:dev', 'open', 'watch']);
};
