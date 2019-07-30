DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT FALSE 
createdAt 
);

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'maillot9Bootcamp';
-- FLUSH PRIVILEGES;