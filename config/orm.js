// Import MySQL connection.
var connection = require("../config/connection.js");

//Object for our SQL statement functions.
var orm = {
    selectAll: function (cb) {
        var query = "SELECT * FROM burgers";
        connection.query(query, function(err, results) {
            if (err) {
                throw err;
            }
            cb(results);
            console.log("All: " + results);
        })
    },
    insertOne: function(burgerName, cb) {
        var query = "INSERT INTO burgers SET ?";
        connection.query(query, { burger_name: burgerName }, function(err, results) {
            if (err) {
                throw err;
            }
            cp(results);
            console.log("Insert One: " + results);
        })

    },
    updateOne: function(id, cb) {
        var query = "UPDATE burgers SET ? WHERE ?";
        connection.query(query, [ { devoured: true, id: id } ], function(err, results) {
            if (err) {
                throw err;
            }
            cp(results);
            console.log("Update One: " + results);
        })
    }
}

// Export the orm object for the model (cat.js).
module.exports = orm;

