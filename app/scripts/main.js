/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        parse: {
            exports: 'parse'
        },
        facebook : {
            exports: 'FB'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: 'vendor/bootstrap',
        parse: 'vendor/parse',
        facebook: '//connect.facebook.net/en_US/all'
    }
});

require([
    'backbone',
    '../scripts/routes/app.js'
], function (Backbone, AppRouter) {
    AppRouter.start();
});