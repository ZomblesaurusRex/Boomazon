

DROP DATABASE IF EXISTS boomazon_DB;

CREATE DATABASE boomazon_DB;
-- for all the following commands, use this database
USE boomazon_DB;

-- creating a table for the auction
CREATE TABLE inventory
(
  id INT NOT NULL AUTO_INCREMENT,
  -- this will set the id(collumn 1) to auto, maining it will pick the next integer available--
  item_name VARCHAR(100) NOT NULL,
  -- this is setting the item_name as the title of the second collumn and it cannot be more than 1oo characters or be empty--
  item_category VARCHAR(100) NOT NULL,
  -- this is setting the item_category as the title of the third collumn and it cannot be more than 45 characters or be empty--
  item_price INT NOT NULL,
  -- this is setting the item_price as the title of the fourth collumn and the default integer value will start at 0--
  item_stock INT NOT NULL,
  -- this is setting the item_stock as the title of the fifth collumn and the default integer value will start at 0--
  PRIMARY KEY
    (id)
-- --this is setting the id as the promay key to navigate the table and al so organize it--
);

INSERT INTO inventory
    (item_name, item_category, item_price, item_stock)
VALUES
    ("GTX 2070", "Electronics", 1200, 20);

INSERT INTO inventory
    (item_name, item_category, item_price, item_stock)
VALUES
    ("Slime", "Ghost By-Product",5, 120);

INSERT INTO inventory
    (item_name, item_category, item_price, item_stock)
VALUES
    ("Sting", "Troll's Finders Keepers", 1000000, 1);

INSERT INTO inventory
    (item_name, item_category, item_price, item_stock)
VALUES    
    ("Necronomicon", "Ashley's Knife Knacks", 105, 1);

INSERT INTO inventory
    (item_name, item_category, item_price, item_stock)
VALUES
    ("55 Gallon Drum of Lube", "Rumors", 50, 15);

INSERT INTO inventory
    (item_name, item_category, item_price, item_stock)
VALUES
    ("Left Sock", "Gort's Lost Things", 2, 52);

INSERT INTO inventory
    (item_name, item_category, item_price, item_stock)
VALUES 
    ("Right Sock", "Gort's Lost Things", 6.75, 10);

INSERT INTO inventory
    (item_name, item_category, item_price, item_stock)
VALUES 
    ("Braaaaaiins", "You Don't Wanna Know", 20, 100);

INSERT INTO inventory
    (item_name, item_category, item_price, item_stock)
VALUES 
    ("Scottland's Freedom", "Sir William Wallace", 0, 5000000000000);

;