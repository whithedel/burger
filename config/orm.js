//requiring mysql connection
var connection = require(`../config/connection.js`);

//helper function for sql syntax
function printQuestionMarks(number){
var array = [];
for (var i = 0; i < number; i++){
    array.push('?');
}
return array.toString();
};

//helper function to convert object key/value pairs to sql syntax.
function objToSql(object){
    var array = [];
    for (var key in object){
        var value = object[key];

        if (Object.hasOwnProperty.call(object, key)){
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                console.log(`${value} value is define here`)
                value = `'${value}'`
            }
            array.push(`${key} = ${value}`)
        }
    }
    return array.toString();
}

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(tableInput, cb){
        var queryString = `select * from ${tableInput};`;
        connection.query(queryString, function(error, result){
            if (error) throw error;
            cb(result)
        })
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = `insert into ${table} (${cols.toString()})
                     values(${printQuestionMarks(vals.length)})`;

                     connection.query(queryString, vals, function(error, result){
                         if (error) throw error;
                         cb(result);
                     })
    },
    updateOne: function(table, objColVals, condition, cb){
        var queryString = `update ${table} set ${objToSql(objColVals)} where ${condition}`;
        console.log(queryString)
        connection.query(queryString, function(error, result){
            if (error) throw error;
            cb(result);
        });
    }
};

module.exports = orm;