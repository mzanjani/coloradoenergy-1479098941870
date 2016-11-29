var when = require("when");
module.exports = {
   type: "credentials",
   users: function(username) {
       return when.promise(function(resolve) {
           // Do whatever work is needed to check username is a valid
           // user.
           var valid = true;
           if (valid) {
               // Resolve with the user object. It must contain
               // properties 'username' and 'permissions'
               var user = { username: "admin", permissions: "*" };
               resolve(user);
           } else {
               // Resolve with null to indicate this user does not exist
               resolve(null);
           }
       });
   },
   authenticate: function(username,password) {
		return when.promise(function(resolve) {
			// Do whatever work is needed to validate the username/password
			// combination.
			console.log("MZ: Checking userid " + username);
			var jsdom = require('jsdom').jsdom
				, $ = require('jQuery');
			console.log("MZ: Setup " + username);
			$.ajaxSetup({
				headers: { 
			   	}
			});
			console.log("MZ: Checking info " + username);
	    	$.getJSON('http://api.ng.bluemix.net/info', function( jsondata ) {
    	  		console.log("MZ " + jsondata.authorization_endpoint);
    		});

           var valid = true;
           if (valid) {
               // Resolve with the user object. Equivalent to having
               // called users(username);
               var user = { username: "admin", permissions: "*" };
               resolve(user);
           } else {
               // Resolve with null to indicate the username/password pair
               // were not valid.
               resolve(null);
           }
       });
   },
   default: function() {
       return when.promise(function(resolve) {
           // Resolve with the user object for the default user.
           // If no default user exists, resolve with null.
           resolve({anonymous: false, permissions:""});
       });
   }
}