var db = require('./index');
var dbOBJ = new db({url: 'mongodb://smarterservice:Smarter1@ds037195.mongolab.com:37195/export',collection:'export'});
dbOBJ.init(function(err,r) {
    var collection = r.collection;
    collection.insert({insertedaaa:'qwefqwefqwef'},function(err,r) {
        console.log(err,r);
    })
});