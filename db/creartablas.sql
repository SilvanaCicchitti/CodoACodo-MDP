CREATE TABLE `db_patagonia` .`products` (
    `id_product` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `data` VARCHAR(250) NOT NULL,
    `imageUrl` VARCHAR(255) NOT NULL,
    `stock` INT NOT NULL,
    CONSTRAINT pk_id_product PRIMARY KEY (id_product)
);

CREATE TABLE `db_patagonia` .`users` (
    `id_user` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `surname` VARCHAR(50) NOT NULL,
    `dni` VARCHAR(50) NOT NULL,
    CONSTRAINT pk_id_usuario PRIMARY KEY (id_user)
);