/// <reference path="oauth.js"/>
/// <reference path="sha1.js"/>
/// <reference path="knockout-3.2.0.js"/>
/// <reference path="jquery-1.11.1.min.js"/>
jQuery.support.cors = true;

function Twitter(){}
Twitter.prototype = {
	consumerKey: "G1MqkE8nhFxtiLPxCp71on0YV",
	consumerSecret: "FT2MLtQKYZZTjx7W9AUSGwZolPH8wVQlFpn6zumHkLumjLMO65",
	accessToken: "",
	tokenSecret: ""
}

Twitter.prototype.isOauthed = function() {
	return localStorage.getItem("isOauthed");
}

Twitter.prototype.oauth = function() {
	
	var accessor = {
		consumerSecret: this.consumerSecret, 
		tokenSecret: ""
	};

	var message = {
		method: "POST", 
		action: "https://api.twitter.com/oauth/request_token", 
		parameters: {
			oauth_signature_method: "HMAC-SHA1", 
			oauth_consumer_key: this.consumerKey
		}
	};
	
	OAuth.setTimestampAndNonce(message);
	OAuth.SignatureMethod.sign(message, accessor);
	
	var options = {
		type: message.method,
		url: message.action,
		data: message.parameters,
		success: function(d, dt) {
			var queries = d.split("&");
			var reqToken;
			
			for(var i = 0; i < queries.length; i++) {
				var q = queries[i];
				var nameValue = q.split("=");
				var name = nameValue[0];
				
				if(name == "oauth_token") {
					reqToken = nameValue[1];
					localStorage.setItem("request_token", reqToken);
				} else if(name == "oauth_token_secret") {
					localStorage.setItem("request_token_secret", nameValue[1]);
				}
			}
			
			window.location.href = "https://api.twitter.com/oauth/authenticate?oauth_token=" + reqToken;
		},
		error: function(chr, textStatus, errorThrown){
			alert(textStatus);
		}
	};
	$.ajax(options);
};

Twitter.prototype.setAccessToken = function(query, callback) {
	
	queryItems = query.substr(1, query.length).split("&");
	
	for (var i = 0, length = queryItems.length; i < length; i++) {
        var item = queryItems[i].split("=");
        var key = item[0];
        var value = item[1];
        
        alert("key:"+key+" value:" + value);
        
    }
	
	//callback();
} 