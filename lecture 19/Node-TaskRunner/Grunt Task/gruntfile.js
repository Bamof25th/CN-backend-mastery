module.exports = function (grunt) {
  // Configure the Task
  grunt.initConfig({
    // Specify your task
    uglify: {
      target: {
        files: {
          "dest/js/main.min.js": ["src/js/*.js"],
        },
      },
    },
    // to minify the css
    cssmin: {
      target: {
        files: [
          {
            expand:true,
            cwd: "src/css",
            src: ["*.css", "!*.min.css"],
            dest: "dest/css",
            ext: ".min.css",
          },
        ],
      },
    },
  });

  // Load the Libraries.
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  // Setting up your tasks
  grunt.registerTask("default", ["uglify", "cssmin"]);
};
