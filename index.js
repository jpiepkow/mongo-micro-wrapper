var connections={};
var MongoClient = require('mongodb').MongoClient;
function DBConnect(config) {
    this.config = config;
}
DBConnect.prototype.init = function (callback) {
    var config = this.config;
    var builtUrl = (config.url) ? config.url : 'mongodb://'+config.user+':'+config.password+'@'+config.url_end;
    if(connections[config.collection]) {
        return callback(null,{db: connections[config.collection]['db'],collection: connections[config.collection]['collection']});
    } else {
     MongoClient.connect(builtUrl, function (err, db) {
        if (err) {
            callback(err, null);
        } else {
            if (!config.collection) {
                callback(null, {db: db});
            } else {
                var collection = db.collection(config.collection);
                connections[config.collection] = {
                   collection: collection,
                    db : db
                };
                callback(null, {db: db, collection: collection});
            }
        }
    })
    }

};
module.exports = DBConnect;