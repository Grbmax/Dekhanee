CREATE DATABASE bee;
USE bee;

CREATE TABLE survey (
	survey_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	survey_title VARCHAR(45)
);

CREATE TABLE survey_question (
	survey_question_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	survey_id INT,
	survey_title VARCHAR(45),
	question_text VARCHAR(45),
	option_a VARCHAR(45),
	option_b VARCHAR(45),
	option_c VARCHAR(45),
	option_d VARCHAR(45),
	FOREIGN KEY (survey_id) REFERENCES survey (survey_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE survey_response (
	survey_response_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	survey_question_id INT,
	user_name VARCHAR(45),
	answer VARCHAR(45),
	survey_date DATE,
	FOREIGN KEY (survey_question_id) REFERENCES survey_question (survey_question_id) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO survey (survey_title) VALUES ('BE Marks');
INSERT INTO survey (survey_title) VALUES ('TE Marks');
INSERT INTO survey (survey_title) VALUES ('SE Marks');

INSERT INTO survey_question (survey_id, survey_title, question_text, option_a, option_b, option_c, option_d) VALUES ('1', 'BE Marks', 'Marks in RMT:', 'Above 50%', 'Above 70%', 'Above 80%', 'Above 90%');	
INSERT INTO survey_question (survey_id, survey_title, question_text, option_a, option_b, option_c, option_d) VALUES ('1', 'BE Marks', 'Marks in VLSI:', 'Above 50%', 'Above 70%', 'Above 80%', 'Above 90%');
INSERT INTO survey_question (survey_id, survey_title, question_text, option_a, option_b, option_c, option_d) VALUES ('1', 'BE Marks', 'Marks in CC:', 'Above 50%', 'Above 70%', 'Above 80%', 'Above 90%');		

INSERT INTO survey_question (survey_id, survey_title, question_text, option_a, option_b, option_c, option_d) VALUES ('2', 'TE Marks', 'Marks in MCU:', 'Above 50%', 'Above 70%', 'Above 80%', 'Above 90%');	
INSERT INTO survey_question (survey_id, survey_title, question_text, option_a, option_b, option_c, option_d) VALUES ('2', 'TE Marks', 'Marks in DBMS:', 'Above 50%', 'Above 70%', 'Above 80%', 'Above 90%');	
INSERT INTO survey_question (survey_id, survey_title, question_text, option_a, option_b, option_c, option_d) VALUES ('2', 'TE Marks', 'Marks in DC:', 'Above 50%', 'Above 70%', 'Above 80%', 'Above 90%');

INSERT INTO survey_question (survey_id, survey_title, question_text, option_a, option_b, option_c, option_d) VALUES ('3', 'SE Marks', 'Marks in PDC:', 'Above 50%', 'Above 70%', 'Above 80%', 'Above 90%');	
INSERT INTO survey_question (survey_id, survey_title, question_text, option_a, option_b, option_c, option_d) VALUES ('3', 'SE Marks', 'Marks in SS:', 'Above 50%', 'Above 70%', 'Above 80%', 'Above 90%');	
INSERT INTO survey_question (survey_id, survey_title, question_text, option_a, option_b, option_c, option_d) VALUES ('3', 'SE Marks', 'Marks in AC:', 'Above 50%', 'Above 70%', 'Above 80%', 'Above 90%');		

INSERT INTO survey_response (survey_question_id, user_name, answer, survey_date) VALUES ('1', 'Gaurav', 'Above 90%', CURDATE());
INSERT INTO survey_response (survey_question_id, user_name, answer, survey_date) VALUES ('2', 'Gaurav', 'Above 80%', CURDATE());
INSERT INTO survey_response (survey_question_id, user_name, answer, survey_date) VALUES ('3', 'Gaurav', 'Above 90%', CURDATE());

INSERT INTO survey_response (survey_question_id, user_name, answer, survey_date) VALUES ('7', 'Gaurav', 'Above 90%', CURDATE());
INSERT INTO survey_response (survey_question_id, user_name, answer, survey_date) VALUES ('8', 'Gaurav', 'Above 90%', CURDATE());
INSERT INTO survey_response (survey_question_id, user_name, answer, survey_date) VALUES ('9', 'Gaurav', 'Above 90%', CURDATE());

