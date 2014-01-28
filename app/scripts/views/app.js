/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    '../views/signup.js',
    'bootstrap'
], function($, _, Backbone, SignupView) {
    'use strict';

    window.AppView = Backbone.View.extend({
        el: $('.pls-container'),
        initialize: function() {
            // Initialize signUpView to use validate methods.
            this.signupView = new SignupView();
            console.log("AppView is initialized");
            console.log("SignupView is initialized");
            console.log("Rendering slide number 1");
        },
        events: {
            'click .pls-button-sneak-peak': 'loadSlideOne',
            'submit .pls-user-signup-form': 'loadSlideTwo',
            'click .pls-button-twitter, .pls-button-facebook': 'loadSharing',
            'submit .pls-username-form': 'loadSlideThree',
            'click .pls-button-demo-close': 'closeDemo'
        },
        loadSlideOne: function() {
            console.log("Rendering slide number 2");
            // Increment the counter value (now = 2).
            this.incrementCounter('#plc-inc-2');
            // Hide slide 0 so slide 1 can move leftwards.
            $('#pls-slide-1').fadeOut('100');
            // Slide the iphone sidebar open.
            $('ul.pls-iphone-bg').addClass('pls-slide-left');
            // Wait 2 seconds.
            setTimeout(function() {
                // Switch menu items in iphone from Tonight to Buzz.
                $('.iphone-bg-2, .iphone-bg-3').hide();
                // Load the buzz screen in iPhone whilst sidebar is still open.
                $('ul.pls-iphone-bg').removeClass('pls-slide-left').addClass('pls-switch');
            }, 2000);
        },
        loadSlideTwo: function(e) {
            e.preventDefault();
            // If all validations for the signup passed.
            if (this.signupView.validateSignUp() !== false) {
                console.log("Rendering slide number 3");
                // Increment the counter value (now = 3).
                this.incrementCounter('#plc-inc-3');
                // Take the username entered, remove the white space and add 2349 to make it look aweful.
                var randomUserName = this.signupView.model.get('fullname').replace(/\s+/g, '').toLowerCase() + '2349';
                // Insert randomUserName into the empty span.
                $('#pls-username-placeholder').text(randomUserName);
                // Hide slide 1 so slide 2 can move leftwards.
                $('#pls-slide-2').fadeOut('100');
                // Hide the iPhone sidebar by sliding left.
                $('ul.pls-iphone-bg').removeClass('pls-switch').addClass('pls-slide-left');
            }

        },
        loadSharing: function() {
            console.log("Rendering username selector");
            // After sharing, display the username input.
            this.hideShow('#pls-invite', '.pls-username-form');
        },
        loadSlideThree: function() {
            // Get users full name to thank him/her for signing up.
            var fullName = this.signupView.model.get('fullname');
            $('#pls-name-placeholder').text(fullName);

            // If username is entered, hide slide 2 so slide 3 can move leftwards.
            if (this.signupView.validateUsername() !== false) {
                $('#pls-slide-3').fadeOut('100');
            }
        },
        demoApp: function() {
            // Hide counter, show the dimmed overlay with inside it the iPhone and change the button text to "Close".
            $('.pls-counter').hide();
            $('.pls-iphone-mob-overlay').fadeIn('100');
            $('.pls-button-demo').removeClass('pls-button-demo').addClass('pls-button-demo-close').text('Close');

            // Wait 1.5 seconds before launching the demo.
            setTimeout(function() {
                // Slide the iphone sidebar open.
                $('ul.pls-iphone-mob-inner').addClass('pls-slide-left');
                // Wait 2 seconds.
                setTimeout(function() {
                    // Switch menu items in iphone from Tonight to Buzz.
                    $('.iphone-mob-bg-2, .iphone-mob-bg-3').hide();
                    // Load the buzz screen in iPhone whilst sidebar is still open.
                    $('ul.pls-iphone-mob-inner').removeClass('pls-slide-left').addClass('pls-switch');
                    // Wait 1 second.
                    setTimeout(function() {
                        // Hide the iPhone sidebar by sliding left.
                        $('ul.pls-iphone-mob-inner').removeClass('pls-switch').addClass('pls-slide-left');
                    }, 1000);
                }, 2000);
            }, 1500);

            // Reset the iPhone to its original state.
            $('.iphone-mob-bg-2, .iphone-mob-bg-3').show();
            $('ul.pls-iphone-mob-inner').removeClass('pls-slide-left');

        },
        closeDemo: function() {
            // Change back button text to sneak peak.
            $('.pls-button-demo-close').addClass('pls-button-demo').removeClass('pls-button-demo-close').text('Sneak peak');
            // Remove dimmed screen and hide iPhone.
            $('.pls-iphone-mob-overlay').fadeOut('100');
            // Show the counter.
            $('.pls-counter').show();
        },
        hideShow: function(oldSlide, newSlide) {
            // Hide old slide/el.
            $(oldSlide).hide();
            // Fade in new slide/el.
            $(newSlide).fadeIn('100');
            return this;
        },
        incrementCounter: function(slide) {
            // Remove currently active class.
            $('span.pls-inc').removeClass('pls-active');
            // Add active class to specified el.
            $(slide).addClass('pls-active');
            return this;
        }

    });

    return AppView;
});