USE bamazon;

CREATE TABLE Products (
	item_id INTEGER (10) AUTO_INCREMENT,
	product_name VARCHAR (50),
	department_name VARCHAR (50),
	price DECIMAL (10,2),
	stock_quantity INTEGER (10),
	primary key (item_id)
);

INSERT INTO Products(item_id,product_name,department_name,price,stock_quantity) VALUES('70593','iPhone Cover','Technology',10,30);

INSERT INTO Products(item_id,product_name,department_name,price,stock_quantity) VALUES('21200','Winter Gloves – Black','Clothing',30,200);

INSERT INTO Products(item_id,product_name,department_name,price,stock_quantity) VALUES('62618','Daily Planner','Office Accessories',15,500);

INSERT INTO Products(item_id,product_name,department_name,price,stock_quantity) VALUES('442200','Crosley Record Player','Music Accessories',150,1000);

INSERT INTO Products(item_id,product_name,department_name,price,stock_quantity) VALUES('35299','Large Suitcase with Wheels', 'Luggage',225,500);

INSERT INTO Products(item_id,product_name,department_name,price,stock_quantity) VALUES('59372','Weatherproof Backpack', 'Luggage',65,750);

INSERT INTO Products(item_id,product_name,department_name,price,stock_quantity) VALUES('20379','Bluetooth Headphones','Technology',60,2000);

INSERT INTO Products(item_id,product_name,department_name,price,stock_quantity) VALUES('93877','Mens Grooming Kit','Beauty',40,125);

INSERT INTO Products(item_id,product_name,department_name,price,stock_quantity) VALUES('39764','Starter Cookware Set','Kitchen',150,2000);

INSERT INTO Products(item_id,product_name,department_name,price,stock_quantity) VALUES('83208','Gold Hoop Earrings','Jewelry',45,250);