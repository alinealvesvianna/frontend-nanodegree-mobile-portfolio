module.exports = function (grunt) {
    grunt.initConfig({

        responsive_images: {
            img: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 320,
                        quality: 40
                    }, {
                        name: 'medium',
                        width: 640,
                        suffix: '_x2',
                        quality: 40
                    }, {
                        name: 'large',
                        width: 1024,
                        suffix: '_x3',
                        quality: 40
                    }]
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'src/img/',
                    dest: 'dist/img/'
                }],

                filesViews: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'views/src/',
                    dest: 'views/dist/'
                }]
            }
        },

        clean: {
            img: {
                src: ['dist/img/', 'views/dist/img']
            },
            css: {
                src: ['dist/css/', 'views/dist/css']
            },
            js: {
                src: ['dist/js/', 'views/dist/js']
            }
        },


        mkdir: {
            img: {
                options: {
                    create: ['dist/img/', 'views/dist/img']
                }
            },
            css: {
                options: {
                    create: ['dist/css/', 'views/dist/css']
                }
            },
            js: {
                options: {
                    create: ['dist/js/', 'views/dist/js']
                }
            }
        },

        concat: {
            files: {
                src: 'src/js/*.js',
                dest: 'dist/js/scripts.js'
            },
            filesView: {
                src: 'views/src/js/*.js',
                dest: 'views/dist/js/scriptsViews.js'
            }
        },


        minified: {
            files: {
                src: [
                'dist/js/*.js'
                ],
                dest: 'dist/js/'
            },

            filesView: {
                src: [
                'views/dist/js/*.js'
                ],
                dest: 'views/dist/js/'
            },

            options: {
                sourcemap: false,
                allinone: false,
                ext: '.min.js'
            },


        },


        // htmlmin: {                                     // Task
        //   dist: {                                      // Target
        //     options: {                                 // Target options
        //       removeComments: true,
        //       collapseWhitespace: true
        //     },
        //     files: {                                   // Dictionary of files
        //       'dist/index.html': 'src/index.html',     // 'destination': 'source'
        //       'dist/contact.html': 'src/contact.html'
        //     }
        //   },
        //   dev: {                                       // Another target
        //     files: {
        //       'dist/index.html': 'src/index.html',
        //       'dist/contact.html': 'src/contact.html'
        //     }
        //   }
        // },


        watch: {
            minified: {
                files: 'src/js/*.js',
                tasks: ['minified']
            },

            concat: {
                files: 'src/js/*.js',
                tasks: ['concat']
            }
        },


    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-minified');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'concat', 'minified', 'watch']);
    // grunt.registerTask('default', ['clean', 'mkdir', 'concat', 'minified', 'watch']);


};
