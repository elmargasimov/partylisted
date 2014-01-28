/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var LaunchView = Backbone.View.extend({
    	el: '.pls-container-inner',
    	template: JST['app/scripts/templates/launch.ejs'],
        render: function () {
        	this.$el.empty();
        	this.$el.html(this.template());
        }
    });

    return LaunchView;
});