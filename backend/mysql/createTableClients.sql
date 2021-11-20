create table clients (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    estado VARCHAR(45) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    hobbie ENUM('arte','esporte','instrumento') NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (email)
);