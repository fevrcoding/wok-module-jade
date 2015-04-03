module.exports = function (grunt) {

    return {
        options: {
            pretty: ' ',
            data: function () {
                var data = {};
                var datapath = grunt.file.expand({
                    filter: function (src) {
                        return grunt.file.isFile(src) && (path.extname(src) === '.json');
                    }
                }, grunt.config.process('<%= paths.fixtures %>/{,*/}*.json'));

                datapath.forEach(function (file) {
                    var filename = path.basename(file, '.json');
                    var keyName = filename.toLowerCase().replace(/[-_\s]+(.)?/g, function (match, c) {
                        return c ? c.toUpperCase() : '';
                    });
                    data[keyName] = grunt.file.readJSON(file);
                });

                data.config = grunt.config();

                return data;
            }
        },
        html: {
            files: [{
                expand: true,
                cwd: '<%= paths.views %>/',
                src: ['{,*/}*.jade', '!{,*/}_*.jade'], //render all views except those starting with `_` ala SASS
                dest: '<%= paths.html %>',
                ext: '.html'
            }]
        }
    };

};
