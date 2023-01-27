CREATE DATABASE dekhanee;

USE dekhanee;


-- USER MANAGEMENT

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR (50),
    email varchar(50) UNIQUE,
    u_pwd VARCHAR(255) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    role VARCHAR(10) DEFAULT "user",
    createdAt DATETIME,
    accessToken VARCHAR(255) NOT NULL UNIQUE,
    address_line1 VARCHAR(100),
    address_line2 VARCHAR(100),
    city VARCHAR(50),
    address_state varchar(50),
    pincode varchar(10),
    country varchar(30),
    alt_mobile VARCHAR(20),
    dob DATE
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

CREATE TABLE product_var (
    sku INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    p_id INT,
    color VARCHAR(10) NOT NULL,
    count INT NOT NULL,
    inventory_id INT NOT NULL,
    status TINYINT,
    FOREIGN KEY (p_id) REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (inventory_id) REFERENCES inventory (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE cart (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    u_id INT,
    p_id INT,
    p_qty INT,
    FOREIGN KEY (u_id) REFERENCES user (id),
    FOREIGN KEY (p_id) REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE payment_details (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cart_id INT,
    amount DECIMAL(10,2),
    payment_status VARCHAR(20),
    createdAt DATETIME,
    modifiedAt DATETIME,
    FOREIGN KEY (cart_id) REFERENCES cart (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE order_history (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    u_id INT,
    total DECIMAL(10,2),
    createdAt DATETIME,
    modifiedAt DATETIME,
    payment_id INT,
    FOREIGN KEY (u_id) REFERENCES user (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (payment_id) REFERENCES payment_details (id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- POPULATE DATABASE

-- USER LOGIN
INSERT INTO user (name, email, u_pwd, mobile, role, createdAt, 
accessToken) VALUES 
("Gaurav Bhat","grbmax@gmail.com","$2a$10$YYcyUZSoVeGEx5q.TF4XG.FeruAA1brInVxHN3eHYcRYxrff.0JhS","8007035533","admin", NOW(), 
"sTg74712XGIWOFA2zRvyrfUbHABeEAg6UC154LJO5mePsqlTX6L0ftV6GuGj51KgAp7EgWBzGmzHGyinc3p2286eDwhiO2RIxulFZwJLw87i7I7UJc8NACYdRDpgLgvcCNEkiu1MFVpM6OLSQltIVeBEUIWeZyNdGoUGVUqQmkCd0jyYl5FV1n7AyA1dIIIxw3hKa6MXL6eABbUIrBF5k0opZxZVYhsRX4ivWt1FAchBrm70mu3cYwTspNVULl"
); 
-- password 1234

INSERT INTO user (name, email, u_pwd, mobile, role, createdAt, 
accessToken) VALUES 
("Rohit Panchal","rohit@gmail.com","$2a$10$uIl/7uLTxiIMqhBGeeKNu./f.KipRjhZjA6GiK6TqtairazEVCwDS","8007035544","user", NOW(), 
"ZaCuZDFTOqQQftOO58sAOmCcaSfyWHVcNnmVJatheAY19hzrVhxcdKo3LxhrPHmKy1IqRdDIw73W2WkD6QxH2brstuU2qFozDFJMEQNxIpvetNdlZIilSc68S6WaKLJfdAjF4Pv2YdhwcA9toMDwwEvxqVb0FMqBKFPLWVgmKkK3oZ8dJfBNq7A88JYEbvarAEAFPHdouY4SiaDNOIMtoUfkG7xWYXuwM0Rx4xaeTMwILgvUKncNxr8ZYsHbdY"
); 
-- password 1234


-- INVENTORY
INSERT INTO inventory (inv_address, city, pincode, ph_no) 
VALUES ('DSK Vishwa','Pune','411041','9850045577');

-- PRODUCT-LIST
INSERT INTO products (name, type, category, inventory_id, 
description, MSRP, SP) 
VALUES ('Peacock Jhumkas','Earrings','Jhumkas','1',
"Beautiful Peacock Jhumkas", "300.00", "200.00");

INSERT INTO product_var (sku, p_id, color, count, inventory_id, status) 
VALUES ("001", "1", "Silver", "10", "1", "1");

INSERT INTO product_var (sku, p_id, color, count, inventory_id, status) 
VALUES ("002", "1", "Bronze", "10", "1", "1");

INSERT INTO product_var (sku, p_id, color, count, inventory_id, status) 
VALUES ("003", "1", "Golden", "10", "1", "1");


INSERT INTO products (name, type, category, inventory_id, 
description, MSRP, SP) 
VALUES ('Mockingbird Jhumkas','Earrings','Jhumkas','1',
"Beautiful Peacock Jhumkas", "300.00", "200.00");

INSERT INTO product_var (sku, p_id, color, count, inventory_id, status) 
VALUES ("004", "2", "Golden", "10", "1", "1");

INSERT INTO product_var (sku, p_id, color, count, inventory_id, status) 
VALUES ("005", "2", "Silver", "10", "1", "1");

INSERT INTO product_var (sku, p_id, color, count, inventory_id, status) 
VALUES ("006", "2", "Bronze", "0", "1", "-1");


INSERT INTO products (name, type, category, inventory_id, 
description, MSRP, SP) 
VALUES ('Stone Studded Earrings','Earrings','Stone Studs','1',
"Beautiful Stone Studded Jhumkas", "300.00", "200.00");

INSERT INTO product_var (sku, p_id, color, count, inventory_id, status) 
VALUES ("007", "3", "Blue", "10", "1", "1");

INSERT INTO product_var (sku, p_id, color, count, inventory_id, status) 
VALUES ("008", "3", "Green", "11", "1", "1");

INSERT INTO product_var (sku, p_id, color, count, inventory_id, status) 
VALUES ("009", "3", "Black", "9", "1", "1");

INSERT INTO products (name, type, category, inventory_id, 
description, MSRP, SP) 
VALUES ('Faux Pearl Studded Earrings','Earrings','Pearl Studs','1',
"Gorgeous Faux Peal Earrings", "300.00", "200.00");

INSERT INTO product_var (sku, p_id, color, count, inventory_id, status) 
VALUES ("010", "3", "Silver", "7", "1", "1");

INSERT INTO product_var (sku, p_id, color, count, inventory_id, status) 
VALUES ("011", "3", "Gold", "9", "1", "1");


