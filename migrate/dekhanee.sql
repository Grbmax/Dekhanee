CREATE DATABASE dekhanee;

USE dekhanee;


-- USER MANAGEMENT

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (255),
  email varchar(255) UNIQUE,
  u_pwd VARCHAR(255) NOT NULL,
  google_id VARCHAR(255),
  facebook_id VARCHAR(255),
  mobile VARCHAR(20) NOT NULL,
  alt_mobile VARCHAR(20),
  role VARCHAR(10) DEFAULT "user",
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  accessToken VARCHAR(255) NOT NULL UNIQUE,
  dob DATE
);

CREATE TABLE addresses (
  address_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  apartment VARCHAR(255),
  street_name VARCHAR(255),
  landmark VARCHAR(255),
  pincode VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  country VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE inventory (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  inv_address VARCHAR(50),
  city VARCHAR(20),
  pincode VARCHAR(20),
  ph_no VARCHAR(20)
);

CREATE TABLE products (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  inventory_id INT NOT NULL,
  description VARCHAR(100) NOT NULL,
  MSRP DECIMAL(10,2) NOT NULL,
  SP DECIMAL(10,2) NOT NULL
);

CREATE TABLE product_variants (
  sku INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  p_id INT,
  color VARCHAR(10) NOT NULL,
  count INT NOT NULL,
  inventory_id INT NOT NULL,
  status TINYINT,
  FOREIGN KEY (p_id) REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (inventory_id) REFERENCES inventory (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE img_src (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  p_id INT NOT NULL,
  sku INT NOT NULL,
  path VARCHAR(100) NOT NUll,
  FOREIGN KEY (p_id) REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (sku) REFERENCES product_variants (sku) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE cart (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  u_id INT,
  p_id INT,
  p_qty INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (u_id) REFERENCES users (id),
  FOREIGN KEY (p_id) REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE payment_details (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  cart_id INT,
  amount DECIMAL(10,2),
  payment_status VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cart_id) REFERENCES cart (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE order_history (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  u_id INT,
  total DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  payment_id INT,
  FOREIGN KEY (u_id) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (payment_id) REFERENCES payment_details (id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- POPULATE DATABASE

-- USER LOGIN
INSERT INTO users (name, email, u_pwd, mobile, role, created_at, 
accessToken) VALUES 
("Gaurav Bhat","grbmax@gmail.com","$2a$10$YYcyUZSoVeGEx5q.TF4XG.FeruAA1brInVxHN3eHYcRYxrff.0JhS","8007035533","admin", NOW(), 
"sTg74712XGIWOFA2zRvyrfUbHABeEAg6UC154LJO5mePsqlTX6L0ftV6GuGj51KgAp7EgWBzGmzHGyinc3p2286eDwhiO2RIxulFZwJLw87i7I7UJc8NACYdRDpgLgvcCNEkiu1MFVpM6OLSQltIVeBEUIWeZyNdGoUGVUqQmkCd0jyYl5FV1n7AyA1dIIIxw3hKa6MXL6eABbUIrBF5k0opZxZVYhsRX4ivWt1FAchBrm70mu3cYwTspNVULl"
); 
-- password 1234

INSERT INTO users (name, email, u_pwd, mobile, role, created_at, 
accessToken) VALUES 
("Rohit Panchal","rohit@gmail.com","$2a$10$uIl/7uLTxiIMqhBGeeKNu./f.KipRjhZjA6GiK6TqtairazEVCwDS","8007035544","user", NOW(), 
"ZaCuZDFTOqQQftOO58sAOmCcaSfyWHVcNnmVJatheAY19hzrVhxcdKo3LxhrPHmKy1IqRdDIw73W2WkD6QxH2brstuU2qFozDFJMEQNxIpvetNdlZIilSc68S6WaKLJfdAjF4Pv2YdhwcA9toMDwwEvxqVb0FMqBKFPLWVgmKkK3oZ8dJfBNq7A88JYEbvarAEAFPHdouY4SiaDNOIMtoUfkG7xWYXuwM0Rx4xaeTMwILgvUKncNxr8ZYsHbdY"
); 
-- password 1234


-- INVENTORY
INSERT INTO inventory (inv_address, city, pincode, ph_no) 
VALUES ('DSK Vishwa','Pune','411041','9850045577');

-- PRODUCT-1
INSERT INTO products (name, type, category, inventory_id, 
description, MSRP, SP) 
VALUES ('Peacock Jhumkas','Earrings','Jhumkas','1',
"Beautiful Peacock Jhumkas", "300.00", "200.00");

INSERT INTO product_variants (sku, p_id, color, count, inventory_id, status) 
VALUES ("001", "1", "Silver", "10", "1", "1");
INSERT INTO img_src (p_id, sku, path) VALUES ("1","001","public/products/ear-rings/Jhumkas/1.jpeg");

INSERT INTO product_variants (sku, p_id, color, count, inventory_id, status) 
VALUES ("002", "1", "Bronze", "10", "1", "1");
INSERT INTO img_src (p_id, sku, path) VALUES ("1","002","public/products/ear-rings/Jhumkas/2.jpeg");

INSERT INTO product_variants (sku, p_id, color, count, inventory_id, status) 
VALUES ("003", "1", "Golden", "10", "1", "1");
INSERT INTO img_src (p_id, sku, path) VALUES ("1","003","public/products/ear-rings/Jhumkas/3.jpeg");



-- PRODUCT-2
INSERT INTO products (name, type, category, inventory_id, 
description, MSRP, SP) 
VALUES ('Mockingbird Jhumkas','Earrings','Jhumkas','1',
"Beautiful Peacock Jhumkas", "300.00", "200.00");

INSERT INTO product_variants (sku, p_id, color, count, inventory_id, status) 
VALUES ("004", "2", "Golden", "10", "1", "1");
INSERT INTO img_src (p_id, sku, path) VALUES ("2","004","public/products/ear-rings/Jhumkas/4.jpeg");

INSERT INTO product_variants (sku, p_id, color, count, inventory_id, status) 
VALUES ("005", "2", "Silver", "10", "1", "1");
INSERT INTO img_src (p_id, sku, path) VALUES ("2","005","public/products/ear-rings/Jhumkas/5.jpeg");

INSERT INTO product_variants (sku, p_id, color, count, inventory_id, status) 
VALUES ("006", "2", "Bronze", "0", "1", "-1");
INSERT INTO img_src (p_id, sku, path) VALUES ("2","006","public/products/ear-rings/Jhumkas/6.jpeg");


-- PRODUCT-3
INSERT INTO products (name, type, category, inventory_id, 
description, MSRP, SP) 
VALUES ('Stone Studded Earrings','Earrings','Stone Studs','1',
"Beautiful Stone Studded Jhumkas", "300.00", "200.00");

INSERT INTO product_variants (sku, p_id, color, count, inventory_id, status) 
VALUES ("007", "3", "Blue", "10", "1", "1");
INSERT INTO img_src (p_id, sku, path) VALUES ("3","007","public/products/ear-rings/StoneStuds/7.jpeg");

INSERT INTO product_variants (sku, p_id, color, count, inventory_id, status) 
VALUES ("008", "3", "Green", "11", "1", "1");
INSERT INTO img_src (p_id, sku, path) VALUES ("3","008","public/products/ear-rings/StoneStuds/8.jpeg");

INSERT INTO product_variants (sku, p_id, color, count, inventory_id, status) 
VALUES ("009", "3", "Black", "9", "1", "1");
INSERT INTO img_src (p_id, sku, path) VALUES ("3","009","public/products/ear-rings/StoneStuds/9.jpeg");

-- PRODUCT-4
INSERT INTO products (name, type, category, inventory_id, 
description, MSRP, SP) 
VALUES ('Faux Pearl Studded Earrings','Earrings','Pearl Studs','1',
"Gorgeous Faux Peal Earrings", "300.00", "200.00");


INSERT INTO product_variants (sku, p_id, color, count, inventory_id, status) 
VALUES ("010", "4", "Silver", "7", "1", "1");
INSERT INTO img_src (p_id, sku, path) VALUES ("4","010","public/products/ear-rings/PearlStuds/10.jpeg");

INSERT INTO product_variants (sku, p_id, color, count, inventory_id, status) 
VALUES ("011", "4", "Gold", "9", "1", "1");
INSERT INTO img_src (p_id, sku, path) VALUES ("4","011","public/products/ear-rings/PearlStuds/11.jpeg");





-- TRIGGERS
CREATE OR REPLACE TRIGGER limit_addresses
BEFORE INSERT ON addresses
FOR EACH ROW
DECLARE
  address_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO address_count
  FROM addresses
  WHERE user_id = :new.user_id;
  
  IF address_count >= 2 THEN
    RAISE_APPLICATION_ERROR(-20001, 'Each user can have a maximum of 2 addresses.');
  END IF;
END;
