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

CREATE TABLE product_list (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    p_name VARCHAR(50) NOT NULL,
    p_type VARCHAR(50) NOT NULL,
    p_category VARCHAR(50) NOT NULL,
    p_inventory_id INT NOT NULL,
    FOREIGN KEY (p_inventory_id) REFERENCES inventory (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE cart (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    u_id INT,
    p_id INT,
    p_qty INT,
    FOREIGN KEY (u_id) REFERENCES user (id),
    FOREIGN KEY (p_id) REFERENCES product_list (id) ON UPDATE CASCADE ON DELETE CASCADE
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



-- INVENTORY MANAGEMENT

CREATE TABLE product_details (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    p_sku INT NOT NULL,
    p_description VARCHAR(100) NOT NULL,
    p_color VARCHAR(30) NOT NULL,
    p_MSRP DECIMAL(10,2) NOT NULL,
    p_SP DECIMAL(10,2) NOT NULL,
    p_category VARCHAR(20) NOT NULL,
    p_status TINYINT,
    p_count INT NOT NULL,
    p_inventory_id INT NOT NULL,
    FOREIGN KEY (p_sku) REFERENCES product_list (id) ON UPDATE CASCADE ON DELETE CASCADE, 
    FOREIGN KEY (p_inventory_id) REFERENCES inventory (id) ON UPDATE CASCADE ON DELETE CASCADE
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
INSERT INTO product_list (p_name, p_type, p_category, p_inventory_id) 
VALUES ('Peacock Jhumkas','Earrings','Jhumkas','1');
INSERT INTO product_list (p_name, p_type, p_category, p_inventory_id) 
VALUES ('Stone Small Studs','Stone Earrings','Studs','1');
INSERT INTO product_list (p_name, p_type, p_category, p_inventory_id) 
VALUES ('Black Designer Studs','Earrings','Studs','1');
INSERT INTO product_list (p_name, p_type, p_category, p_inventory_id) 
VALUES ('Pink Jhumkas','Earrings','Jhumkas','1');

-- PRODUCT-INFORMATION
INSERT INTO product_details (p_sku, p_description, p_color, p_MSRP, p_SP, p_category, 
p_status, p_count, p_inventory_id) 
VALUES ('2','Small Elegant Stone Studded Earrings','Blue','300.00','200.00',
'Suds','1','10','1');
INSERT INTO product_details (p_sku, p_description, p_color, p_MSRP, p_SP, p_category, 
p_status, p_count, p_inventory_id) 
VALUES ('2','Small Elegant Stone Studded Earrings','Green','300.00','200.00',
'Studs','1','5','1');
INSERT INTO product_details (p_sku, p_description, p_color, p_MSRP, p_SP, p_category, 
p_status, p_count, p_inventory_id) 
VALUES ('2','Small Elegant Stone Studded Earrings','Red','300.00','200.00',
'Studs','1','5','1');

INSERT INTO product_details (p_sku, p_description, p_color, p_MSRP, p_SP, p_category, 
p_status, p_count, p_inventory_id) 
VALUES ('1','Peacock Design Jhumkas','Blue','400.00','300.00',
'Jhumkas','1','5','1');

INSERT INTO product_details (p_sku, p_description, p_color, p_MSRP, p_SP, p_category, 
p_status, p_count, p_inventory_id) 
VALUES ('4','Beautiful Pink Designer Jhumkas','Pink','450.00','400.00',
'Jhumkas','1','5','1');

INSERT INTO product_details (p_sku, p_description, p_color, p_MSRP, p_SP, p_category, 
p_status, p_count, p_inventory_id) 
VALUES ('3','Aesthetic Black Designer Studs for everyday use','Pink','150.00','100.00',
'Jhumkas','-1','0','1');
