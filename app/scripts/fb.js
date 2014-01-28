define([
	'parse',
	'facebook'
], function () {

  Parse.FacebookUtils.init({
    appId      : '1414907218738719', // Facebook App ID
    channelUrl : '//www.partylisted.com/channel.html', // Channel File
    status     : false, // check login status
    cookie     : true, // enable cookies to allow Parse to access the session
    xfbml      : true  // parse XFBML
  });

});