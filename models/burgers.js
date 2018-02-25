//Import the ORM to create functions to interact with the database.
var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(cp) {
        orm.selectAll(function(res) {
            cp(res);
        })
    },
    insertOne: function(burgerName, cp) {
        orm.insertOne(burgerName, function(res) {
            cp(res);
        })
    },
    updateOne: function(id, cp) {
        orm.updateOne(id, function(res) {
            cp(res);
        })
    }
}

//Exports the database functions
module.exports = burgers;