module.exports = function (grunt) {

    grunt.initConfig({

        responsive_images: {
            img: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'small',
                        width: 320,
                        suffix: '_x1',
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
                    cwd: 'source/img/',
                    dest: 'dist/img/'
                }, {
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'source/img/img-web/',
                    dest: 'dist/img/img-web/'
                }, {
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'source/views/images/',
                    dest: 'dist/views/images/'
                }]
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{
                        removeViewBox: false
                    }],
                },
                files: [{
                    expand: true,
                    cwd: 'dist/img/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }, {
                    expand: true,
                    cwd: 'dist/img/img-web/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'dist/img/img-web/'
                }, {
                    expand: true,
                    cwd: 'dist/views/images/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'dist/views/images/'
                }]
            }
        },

        clean: {
            dist: {
                src:['dist/img/', 'dist/img/img-web', 'dist/views/images', 'dist/css/', 'dist/views/css', 'dist/js/', 'dist/views/js', 'dist/']
            }
        },

        mkdir: {

            mainDirectory: {
                options: {
                    create: ['dist']
                }
            },

            img: {
                options: {
                    create: ['dist/img/', 'dist/img/img-web', 'dist/views/images']
                }
            },

            css: {
                options: {
                    create: ['dist/css/', 'dist/views/css']
                }
            },

            js: {
                options: {
                    create: ['dist/js/', 'dist/views/js']
                }
            }
        },

        // concat: {
        //     files: {
        //         src: 'src/js/*.js',
        //         dest: 'dist/js/scripts.js'
        //     },
        //     filesView: {
        //         src: 'views/src/js/*.js',
        //         dest: 'views/dist/js/scriptsViews.js'
        //     }
        // },


        minified: {

            files: {
                src: [
                    'source/js/*.js'
                ],
                dest: 'dist/js/'
            },

            filesView: {
                src: [
                    'source/views/js/*.js'
                ],
                dest: 'dist/views/js/'
            },

            options: {
                sourcemap: false,
                allinone: false,
                ext: '.min.js'
            },


        },

        cssmin: {

            minify: {
                files: [{
                    expand: true,
                    cwd: 'source/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css/',
                    ext: '.min.css'
                }, {
                    expand: true,
                    cwd: 'source/views/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/views/css/',
                    ext: '.min.css'
                }]
            }
        },

        replace: {
            includeCss: {
                options: {
                    patterns: [{
                        match: 'include_css_style_tag',
                        replacement: '<%= grunt.file.read("dist/css/style.min.css") %>'
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['source/index.html'],
                    dest: 'dist/'
                }]
            }
        },

        htmlmin: {
            dist: {
              options: {
                collapseWhitespace: true
              },
              files: {
                'dist/index.html': 'dist/index.html',
              }
            }
          }


        // watch: {
        //     minified: {
        //         files: 'src/js/*.js',
        //         tasks: ['minified']
        //     },
        //
        //     concat: {
        //         files: 'src/js/*.js',
        //         tasks: ['concat']
        //     }
        // },


    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-minified');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'imagemin', 'minified', 'cssmin', 'replace', 'htmlmin']);


};
