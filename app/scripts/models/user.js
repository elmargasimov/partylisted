/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var UserModel = Parse.Object.extend("LaunchUsers", {
        defaults: {
        	userame: "",
        	fullname: "",
        	email: ""
        }
    });

    return UserModel;
});