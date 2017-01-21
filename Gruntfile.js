module.exports = function(grunt) {

    grunt.initConfig({

        responsive_images: {
            imgIndex: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'small',
                        width: 100,
                        suffix: '_x1',
                        quality: 40
                    }, {
                        name: 'medium',
                        width: 200,
                        suffix: '_x2',
                        quality: 40
                    }, {
                        name: 'large',
                        width: 300,
                        suffix: '_x3',
                        quality: 40
                    }]
                },

                files: [{
                    expand: true,
                    src: ['pizzeriaHome.{gif,jpg,png}'],
                    cwd: 'source/views/images/',
                    dest: 'dist/views/images/'
                }]
            },

            imgPizzeria: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'small',
                        width: 360,
                        suffix: '_x1',
                        quality: 40
                    }, {
                        name: 'medium',
                        width: 720,
                        suffix: '_x2',
                        quality: 40
                    }, {
                        name: 'large',
                        width: 1080,
                        suffix: '_x3',
                        quality: 40
                    }]
                },

                files: [{
                    expand: true,
                    src: ['pizzeria.{gif,jpg,png}'],
                    cwd: 'source/views/images/',
                    dest: 'dist/views/images/'
                }]
            },
            imgPizza: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'small',
                        width: 77,
                        suffix: '_x1',
                        quality: 40
                    }, {
                        name: 'medium',
                        width: 154,
                        suffix: '_x2',
                        quality: 40
                    }, {
                        name: 'large',
                        width: 232,
                        suffix: '_x3',
                        quality: 40
                    }]
                },

                files: [{
                    expand: true,
                    src: ['pizza.{gif,jpg,png}'],
                    cwd: 'source/views/images/',
                    dest: 'dist/views/images/'
                }]
            }
        },

        imagemin: {
            img: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{
                        removeViewBox: false
                    }],
                },
                files: [{
                    expand: true,
                    cwd: 'source/img/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }, {
                    expand: true,
                    cwd: 'source/img/img-web/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'dist/img/img-web/'
                }]
            },
            viewImages: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{
                        removeViewBox: false
                    }],
                },
                files: [{
                    expand: true,
                    cwd: 'dist/views/images/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'dist/views/images/'
                }]
            }
        },

        clean: {
            dist: {
                src: ['dist/img/', 'dist/img/img-web', 'dist/views/images', 'dist/css/', 'dist/views/css', 'dist/js/', 'dist/views/js', 'dist/']
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
                    src: ['source/index.html', 'source/project-2048.html', 'source/project-mobile.html', 'source/project-webperf.html'],
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
                    'dist/project-2048.html': 'dist/project-2048.html',
                    'dist/project-mobile.html': 'dist/project-mobile.html',
                    'dist/project-webperf.html': 'dist/project-webperf.html'
                }
            }
        }


        // watch: {
        //     minified: {
        //         files: ['source/js/*.js','source/views/js/*.js'],
        //         tasks: ['minified']
        //     },
        //
        //     cssmin: {
        //         files: ['source/css/', 'source/views/css/'],
        //         tasks: ['cssmin']
        //     },
        //
        //     replace: {
        //         files: ['source/css/', 'source/views/css/'],
        //         tasks: ['cssmin']
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
