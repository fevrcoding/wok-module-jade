'use strict';

// do npm install marked --save-dev
// do npm install grunt-contrib-jade --save-dev

// copy / overwrite view
// copy additional grunt task config
// alter Gruntfile

var path = require('path');
var fs = require('fs');

module.exports = function (remote, files, wok) {

    return {

        //this is run when the plugin is installed while generating the project
        install: function (done) {

            files.filter(function (filepath) {
                if (filepath.indexOf('template/') === 0) {
                    return {
                        pathFrom: filepath,
                        pathTo: filepath.replace('/^template\//', '')
                    };
                }
            }).forEach(function (fileItem) {
                remote.copy(fileItem.pathFrom, fileItem.pathTo);
            });
            done();
        }
    };

};
