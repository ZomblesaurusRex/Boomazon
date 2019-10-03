// require mySQL, inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");
// connection for mySQL
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "boomazon_DB"
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("Welcome Back!");
    var sql = "SELECT * from inventory";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        // prints out current table in boomazon_DB
        console.table(result);

        start();
    });
});
// start
function againConfirm(){
    // console.log("==================================================================");

    inquirer.prompt([
        {
            name: "again",
            type: "confirm",
            message: "Would you like to make another purchase?"
            
        }
    ]).then(function (answer) {
        if (answer.again) {
            console.log("==================================================");
            start();
        } else {
            console.log("Thank you, have a nice day!");
            connection.end();

        }
    })

};
// end
function start() {
    console.log("INSTRUCTIONS: Enter the ID number of the corresponding product you would like to purchase.");
    console.log("============================================================================================");
    // prints out current table in boomazon_DB

    inquirer.prompt([
        {
            name: "productID",
            type: "input",
            message: "Which impulse purchase would you like to make today?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    // console.log(value);
                    return true;
                }
                return false;
            }
        },
        {
            name: "productNumber",
            type: "input",
            message: "How many would you like to buy?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    // console.log(value);
                    return true;
                }
                return false;
            }
        }
    ]).then(function (answer) {
        var productID;

        var chosenItem;
        var sql = "SELECT * from inventory";
        connection.query(sql, function (err, results) {
            if (err) throw err;

            // console.log(answer.productID, answer.productNumber);
            var chosenProductId = parseInt(answer.productID);
            var chosenProductNumber = parseInt(answer.productNumber);

            for (var i = 0; i < results.length; i++) {
                // console.log(results[i].id);
                // console.log(answer.productID);
                // console.log(results[i].id === chosenProductId);
                if (results[i].id === chosenProductId) {
                    chosenItem = results[i];
                    if (chosenProductNumber <= chosenItem.item_stock) {
                        console.log("Thank you, Purchase Completed!");
                        console.log("==============================================================");
                        var sql2 = "UPDATE inventory SET item_stock = " + (chosenItem.item_stock - chosenProductNumber) + " WHERE id =" + chosenProductId + ";";
                        // console.log(sql2)
                        connection.query(sql2, function (err, results) {
                            if (err) throw err;
                        });
                    } else {
                        console.log("I'm sorry, we don't seem to have that much in stock right now.")
                    };
                    // console.log(chosenItem);node boom.js
                }
            };


            var sql3 = "SELECT * from inventory;";
            // console.log(sql2)
            connection.query(sql3, function (err, results) {
                if (err) throw err;

                console.table(results);

                againConfirm();
            });
        });
    });
}