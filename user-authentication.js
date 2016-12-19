var when = require("when");
var request = require("request");
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
			
			var blInfoUrl = "https://api.ng.bluemix.net/info";
			var valid;
			
			request({
				url: blInfoUrl,
				json: true
			}, function (error, response, body){
				console.log("MZ1111111");
				if (!error && response.statusCode === 200) {
					valid = true;
					console.log("valid set to true.");
				} else {
					console.log("error:" + error + "response:" + response);
				}
				
				valid = true;
				if (valid) {
					var user = {username:"admin", permission:"*"};
					resolve(user);
				} else {
					resolve(null);
				}
				
			}
			);
 			
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