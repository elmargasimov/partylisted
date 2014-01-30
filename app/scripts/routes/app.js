/*global define*/

define([
    'jquery',
    'backbone',
    '../views/app.js',
    'parse'
], function($, Backbone, AppView, LaunchView, CanvasView) {
    'use strict';

    var AppRouter = new(Backbone.Router.extend({
        routes: {
            '/': 'index'
        },
        initialize: function() {

            // Initialize the AppView
            this.appView = new AppView();
            // Initiliaze Parse
            Parse.initialize("g788PSPl9QcK2uqqkdnFMdPyZGyPTAJ7LG4wDGKB", "MaDdHX1soqCckzjCb2UbzvcjlxBLqgnHr04Sn7nK");
            // Initialize Facebook SDK
            // require(['fb']);
        },
        index: function() {
            // Render the AppView
            this.appView.render();
        },
        start: function() {
            Backbone.history.start({
                pushState: true,
                root: '/'
            });
        }
    }));

    return AppRouter;
});