CREATE DATABASE dekhanee;

USE dekhanee;


-- USER MANAGEMENT

CREATE TABLE user_login (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    mail_id varchar(50) UNIQUE,
    u_pwd VARCHAR(255) NOT NULL
);

CREATE TABLE admin_login (
    admin_id INT PRIMARY KEY NOT NULL,
    admin_pwd VARCHAR(50) NOT NULL 
);

CREATE TABLE user_information (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    u_id int NOT NULL,
    ph_no VARCHAR(20) NOT NULL,
    address_line1 VARCHAR(100),
    address_line2 VARCHAR(100),
    city VARCHAR(50) NOT NULL,
    address_state varchar(50) NOT NULL,
    pincode varchar(10) NOT NULL,
    country varchar(30) NOT NULL,
    alt_ph_no VARCHAR(20),
    dob DATE,
    FOREIGN KEY (u_id) REFERENCES user_login (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE shopping_session (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    u_id INT,
    total DECIMAL(10,2),
    created_at DATETIME,
    modified_at DATETIME,
    FOREIGN KEY (u_id) REFERENCES user_login (id) ON UPDATE CASCADE ON DELETE CASCADE
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

CREATE TABLE order_history (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    u_id INT,
    total DECIMAL(10,2),
    created_at DATETIME,
    modified_at DATETIME,
    payment_id INT,
    FOREIGN KEY (u_id) REFERENCES user_type (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (payment_id) REFERENCES payment_details (id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE cart (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    u_id INT,
    p_id INT,
    p_qty INT,
    sesh_id INT,
    FOREIGN KEY (u_id) REFERENCES user_type (id),
    FOREIGN KEY (p_id) REFERENCES product_list (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (sesh_id) REFERENCES shopping_session (id) ON UPDATE CASCADE ON DELETE CASCADE
);


-- INVENTORY MANAGEMENT


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
INSERT INTO user_login (mail_id, u_pwd) VALUES ('user@gmail.com', 'dekhanee');
INSERT INTO user_information (u_id, ph_no, address_line1, city, address_state, pincode, country, dob) VALUES ('1', '91-8007035533', 'Sinhgad', 'Pune', 'Maharashtra', '411041', 'India', '2022-06-22');

-- ADMIN LOGIN
INSERT INTO admin_login (admin_id, admin_pwd) VALUES ('123','batman');

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
