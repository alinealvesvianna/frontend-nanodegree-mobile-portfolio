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

            imgWeb: {
                options: {
                    engine: 'im',
                    sizes: [{
                        rename: false,
                        width: 100,
                        quality: 40
                    }]
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'source/img/img-web/',
                    dest: 'dist/img/img-web/'
                }]
            },

            imgProfile: {
                options: {
                    engine: 'im',
                    sizes: [{
                        rename: false,
                        width: 70,
                        quality: 40
                    }]
                },

                files: [{
                    expand: true,
                    src: ['profilepic.{gif,jpg,png}'],
                    cwd: 'source/img/',
                    dest: 'dist/img/'
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
                    optimizationLevel: 7,
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
                    cwd: 'dist/img/',
                    src: ['profilepic.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }, {
                    expand: true,
                    cwd: 'dist/img/img-web/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'dist/img/img-web/'
                }]
            },

            imgProfile: {
                options: {
                    optimizationLevel: 7,
                    svgoPlugins: [{
                        removeViewBox: false
                    }],
                },
                files: [{
                    expand: true,
                    cwd: 'dist/img/',
                    src: ['profilepic.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }]
            },

            viewImages: {
                options: {
                    optimizationLevel: 7,
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
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            minify: {
                files: [{
                    expand: true,
                    cwd: 'source/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css/',
                    ext: '.min.css'
                },
                {
                    'dist/views/css/style.min.css': ['source/views/css/bootstrap-grid.css', 'source/views/css/style.css']
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
            },
            includeCssView: {
                options: {
                    patterns: [{
                        match: 'include_css_style_tag',
                        replacement: '<%= grunt.file.read("dist/views/css/style.min.css") %>'
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'source/views/pizza.html',
                    dest: 'dist/views/'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    removeComments: true,
                },
                files: {
                    'dist/index.html': 'dist/index.html',
                    'dist/project-2048.html': 'dist/project-2048.html',
                    'dist/project-mobile.html': 'dist/project-mobile.html',
                    'dist/project-webperf.html': 'dist/project-webperf.html'
                }
            },

            distViews: {
                options: {
                    collapseWhitespace: true,
                    removeComments: true,
                },
                files: {
                    'dist/views/pizza.html': 'dist/views/pizza.html'
                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-minified');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'imagemin', 'minified', 'cssmin', 'replace', 'htmlmin']);


};
