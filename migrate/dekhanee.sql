-- CREATE DATABASE dekhanee;

USE dekhanee;

CREATE TABLE user_login (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    mail_id varchar(50) UNIQUE,
    u_pwd VARCHAR(255)
);

CREATE TABLE user_type (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    u_id int,
    u_type VARCHAR(50),
    FOREIGN KEY (u_id) REFERENCES user_login (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE user_information (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    u_id int,
    ph_no VARCHAR(20),
    address_line1 VARCHAR(100),
    address_line2 VARCHAR(100),
    city VARCHAR(50),
    address_state varchar(50),
    pincode varchar(10),
    country varchar(30),
    alt_ph_no VARCHAR(20),
    dob DATE,
    FOREIGN KEY (u_id) REFERENCES user_type (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE product_information (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    p_name VARCHAR(50),
    p_type VARCHAR(50)
);

CREATE TABLE shopping_session (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    u_id INT,
    total DECIMAL(10,2),
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY (u_id) REFERENCES user_type (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE inventory_details (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    inv_address VARCHAR(50),
    city VARCHAR(20),
    pincode VARCHAR(20),
    ph_no VARCHAR(20)
);

CREATE TABLE product_details (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    p_sku INT,
    p_description VARCHAR(100),
    p_color VARCHAR(30),
    p_MSRP DECIMAL(10,2),
    p_SP DECIMAL(10,2),
    p_category VARCHAR(20),
    p_status TINYINT,
    p_count INT,
    p_inventory_id INT,
    FOREIGN KEY (p_sku) REFERENCES product_information (id) ON UPDATE CASCADE ON DELETE CASCADE, 
    FOREIGN KEY (p_inventory_id) REFERENCES inventory_details (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE cart (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    u_id INT,
    p_id INT,
    p_qty INT,
    sesh_id INT,
    FOREIGN KEY (u_id) REFERENCES user_type (id),
    FOREIGN KEY (p_id) REFERENCES product_information (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (sesh_id) REFERENCES shopping_session (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE payment_details (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cart_id INT,
    amount DECIMAL(10,2),
    payment_status VARCHAR(20),
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY (cart_id) REFERENCES cart (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE cart_total (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    u_id INT,
    total DECIMAL(10,2),
    created_at DATETIME,
    modified_at DATETIME,
    payment_id INT,
    FOREIGN KEY (u_id) REFERENCES user_type (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (payment_id) REFERENCES payment_details (id) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO user_login (mail_id, u_pwd) VALUES ('user@gmail.com', 'dekhanee');
INSERT INTO user_type (u_id, u_type) VALUES ('1', 'user'); 
INSERT INTO user_information (u_id, ph_no, address_line1, city, address_state, pincode, country, dob)
VALUES ('1', '91-8007035533', 'Sinhgad', 'Pune', 'Maharashtra', '411041', 'India', '2022-06-22');
