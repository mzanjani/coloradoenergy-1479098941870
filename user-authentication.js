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
 			
// 			require("jsdom").env("", function(err, window) {
//    			if (err) {
//        			console.error(err);
//    			} else {
//	    			var $ = require("jquery")(window);
//					console.log("MZ: Setup " + username);
//					$.ajaxSetup({
//						headers: { 
//			   			}
//					});
//					console.log("MZ: Checking info " + username);
//	    			$.getJSON("https://api.ng.bluemix.net/info", function() {
//  							console.log( "MZ: success" );
//						})
//  						.done(function( json ) {
//    						console.log( "MZ: JSON Data: " + json.users[ 3 ].name );
//  						})
//  						.fail(function( jqxhr, textStatus, error ) {
//    						var err = textStatus + ", " + error;
//    						console.log( "MZ: Request Failed: " + err );
//    						console.log( "MZ: Request Failed: " + jqxhr );
//    						console.log( "MZ: Attrs Ended!");
//						});
//					console.log("MZ: After info " + username);
//				}
//
//			});
    		
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