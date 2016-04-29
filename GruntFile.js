/**
 * Created by ritz078 on 14/05/15.
 */

module.exports=function(grunt){
    grunt.initConfig({
        browserify:{
            dist:{
                options:{
                    transform:[['babelify',{'loose':"all"}]]
                },
                files: {
                    './dist/public/js/app.js':['./modules/index.js']
                }
            }
        },
        watch:{
            scripts:{
                files:['./modules/*.js'],
                tasks:['browserify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',["watch"]);
    grunt.registerTask('build',["browserify"]);
};

