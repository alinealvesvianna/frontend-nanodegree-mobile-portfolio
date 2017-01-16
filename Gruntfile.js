module.exports = function(grunt) {

    // var css = grunt.file.read(cssfilepath[, options]);

    grunt.initConfig({

        responsive_images: {
            img: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'small',
                        width: 320,
                        suffix: '_x1',
                        quality: 30
                    }, {
                        name: 'medium',
                        width: 640,
                        suffix: '_x2',
                        quality: 30
                    }, {
                        name: 'large',
                        width: 1024,
                        suffix: '_x3',
                        quality: 30
                    }]
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'src/img/',
                    dest: 'dist/img/'
                }, {
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'src/img/img-web/',
                    dest: 'dist/img/img-web/'
                }, {
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'views/src/images/',
                    dest: 'views/dist/images/'
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
                    cwd: 'views/dist/images/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'views/dist/images/'
                }]
            }
        },

        clean: {
            dist: {
                src: ['dist', 'views/dist']
            },
        },

        mkdir: {
            img: {
                options: {
                    create: ['dist/img/', 'views/dist/images', 'dist/img/img-web']
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
                    'src/js/*.js'
                ],
                dest: 'dist/js/'
            },

            filesView: {
                src: [
                    'views/src/js/*.js'
                ],
                dest: 'views/dist/js/'
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
                    cwd: 'src/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css/',
                    ext: '.min.css'
                }, {
                    expand: true,
                    cwd: 'views/src/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'views/dist/css/',
                    ext: '.min.css'
                }]
            }
        },

        replace: {
          //TODO: Criar path para arquivos corretamente
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
                    src: ['index.html']
                    // dest: 'dist/'
                }]
            }
        },


        htmlmin: { // Task
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files
                  //TODO: Criar outro arquivo em dist
                    // 'dist/index.html': 'index.html' // 'destination': 'source'
                    'index.html': 'index.html' // 'destination': 'source'
                }
            },
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

    // grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'concat', 'minified', 'watch']);
    // grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'imagemin', 'concat', 'minified', 'cssmin', 'replace']);
    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'imagemin', 'minified', 'cssmin', 'replace', 'htmlmin']);



};
