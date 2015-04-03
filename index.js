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
        install: function () {

            files.filter(function (filepath) {
                return filepath.indexOf('template/') === 0;
            }).forEach(function (el) {
                wok.files.push({
                    pathFrom: el,
                    remote: remote,
                    pathTo: el.replace(/^template\//, ''),
                    content: null
                });
            });
        }
    };

};
