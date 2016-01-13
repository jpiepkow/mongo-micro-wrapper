mongo-micro-wrapper
===
Description: A micro wrapper to init a db and collection. * now caches connections.

##Example
	npm install mongo-micro-wrapper
	
	
	var db = require('mongo-micro-wrapper);
	var dbOBJ = new db({url: 'YOURURL',collection:'collectionname'});
	
	dbOBJ.init(function(err,r) {
	    console.log(err,r)
	    //OUTPUT contains db object and collection as r.db & r.collection
	});
	
###Config options:

url:url of your mongo db *either this is required or the three options below.

user:username that has db access.

password: password to user.

url_end: all the url AFTER the @

collection: the collection you are using *if passed in will get both db and collection object back.	