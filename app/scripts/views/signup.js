/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    '../models/user.js'
], function($, _, Backbone, UserModel) {
    'use strict';

    var SignupView = Backbone.View.extend({
        el: $('.pls-slide-inner'),
        initialize: function() {
            /* Instantiate a new model instance */
            this.model = new UserModel();
            /* Bind to input elements */
            this.fullname = $('#pls-fullname-input');
            this.email = $('#pls-email-input');
            this.username = $('#pls-username-input');
        },
        events: {
            'submit .pls-user-signup-form': 'setNameEmail',
            'submit .pls-username-form': 'pickUsername'
        },
        setNameEmail: function(e) {
            e.preventDefault();
            /* If validation passed */
            if (this.validateSignUp() !== false) {
                this.model.set('fullname', this.fullname.val());
                this.model.set('email', this.email.val());
                /* Save data to Parse */
                this.model.save();
                console.log("Model properties set!")
            }
        },
        validateSignUp: function() {
            var that = this;

            if (this.email.val().length === 0 && this.fullname.val().length === 0) {
                that.fadeInAlert('#no-email-name-input-alert');
                console.log("Validation failed: code 1");
                return false;
            } else if (this.email.val().length === 0) {
                that.fadeInAlert('#no-email-input-alert');
                console.log("Validation failed: code 2");
                return false;
            } else if (this.fullname.val().length === 0) {
                that.fadeInAlert('#no-name-input-alert');
                console.log("Validation failed: code 3");
                return false;
            } else {
                console.log("Validation passed");
            }
        },
        validateUsername: function() {
            var that = this;
            if (this.username.val().length === 0) {
                that.fadeInAlert('#no-username-input-alert');
                console.log("Validation failed: code 4");
                return false;
            } else {
                console.log("Validation passed");
            }
        },
        fadeInAlert: function(alert) {
            $(alert).fadeIn();
            setTimeout(function() {
                $(alert).fadeOut();
            }, 3000);
        },
        pickUsername: function(e) {
            e.preventDefault();
            if (this.validateUsername() !== false) {
                this.model.set('username', this.username.val());
                this.model.save();
            }
        }

    });

    return SignupView;
});