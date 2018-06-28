// dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("cli-table");

// connected to database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", // or user information
    password: "root",
    database: "bamazon"
});

// le function to display table
function displayAll() {
    // show all info from database
    connection.query("SELECT * FROM Products", function(error, response) {
        if (error) { console.log(error) };
        // new instance of constructor
        var displayTable = new table({
            head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity']
        });
        // each row in loop
        for (i = 0; i < response.length; i++) {
            displayTable.push(
                [response[i].ItemID, response[i].ProductName, response[i].DepartmentName, response[i].Price, response[i].StockQuantity]
            );
        }
        // consoled out
        console.log(displayTable.toString());
        inquireForPurchase();
    });
};

// user interacts in node
function inquirePurchase() {
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "What is the ID number of the product you would like to purchase?"
        },{
            name: "Quantity",
            type: "input",
            message:"How many would you like to purchase?"
        },

    ]).then(function(answers) {
        var quantityWanted = answers.Quantity;
        var IDWanted = answers.ID;
        purchaseFromDatabase(IDWanted,quantityWanted);
    });
};

// checking store
function purchaseFromDatabase(ID,quantityWanted) {
    // subtracts "wanted" request from stock – if possible
    connection.query("SELECT * FROM WHERE ItemID = " + ID, function(error, response) {
        if (error) { console.log(error) };

        // if in stock
        if (quantityWanted <= response[0].stockQuantity) {
            var totalCost = response[0].Price * quantityWanted;
            // message
            console.log("We have your item(s)! We'll have your order right out.");
            console.log("Your total cost for " + quantityWanted + " " + response[0].productName + " is " + totalCost + ". Thanks for shopping!");
            // update databse
            connection.query("UPDATE Products SET stockQuantity = stockQuantity - " + quantityWanted + "WHERE ItemID = " + ID);
        } else {
            console.log("Insufficient quantity! Sorry!")
        };
        displayAll();
    });
};