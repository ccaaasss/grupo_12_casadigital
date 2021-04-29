-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema casa_digital_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema casa_digital_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `casa_digital_db` DEFAULT CHARACTER SET latin1 COLLATE latin1_bin ;
USE `casa_digital_db` ;

-- -----------------------------------------------------
-- Table `casa_digital_db`.`audio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `casa_digital_db`.`audio` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `audioLang` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_bin;


-- -----------------------------------------------------
-- Table `casa_digital_db`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `casa_digital_db`.`categories` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(50) NULL DEFAULT NULL,
  `category_img` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_bin;


-- -----------------------------------------------------
-- Table `casa_digital_db`.`currencies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `casa_digital_db`.`currencies` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `currency` VARCHAR(3) NOT NULL DEFAULT 'AR$',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_bin;


-- -----------------------------------------------------
-- Table `casa_digital_db`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `casa_digital_db`.`courses` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `creation_date` DATE NOT NULL,
  `course_title` VARCHAR(100) NOT NULL,
  `short_description` VARCHAR(300) NOT NULL,
  `long_description` TEXT NOT NULL,
  `price` INT(11) NOT NULL,
  `discount` INT(11) NULL DEFAULT NULL,
  `requirements` VARCHAR(300) NULL DEFAULT NULL,
  `who_can` VARCHAR(300) NULL DEFAULT NULL,
  `top_seller` TINYINT(4) NOT NULL DEFAULT '0',
  `category_id` INT(11) NOT NULL,
  `audio_id` INT(11) NOT NULL,
  `currency_id` INT(11) NOT NULL,
  `course_owner` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `category_id_idx` (`category_id` ASC),
  INDEX `audio_id_idx` (`audio_id` ASC),
  INDEX `currency_id_idx` (`currency_id` ASC),
  CONSTRAINT `audio_id`
    FOREIGN KEY (`audio_id`)
    REFERENCES `casa_digital_db`.`audio` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `casa_digital_db`.`categories` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `currency_id`
    FOREIGN KEY (`currency_id`)
    REFERENCES `casa_digital_db`.`currencies` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_bin;


-- -----------------------------------------------------
-- Table `casa_digital_db`.`subtitles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `casa_digital_db`.`subtitles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `ccLang` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_bin;


-- -----------------------------------------------------
-- Table `casa_digital_db`.`course_subtitle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `casa_digital_db`.`course_subtitle` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_course` INT(11) NOT NULL,
  `id_subtitle` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_course_idx` (`id_course` ASC),
  INDEX `id_subtitle_idx` (`id_subtitle` ASC),
  CONSTRAINT `id_course`
    FOREIGN KEY (`id_course`)
    REFERENCES `casa_digital_db`.`courses` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `id_subtitle`
    FOREIGN KEY (`id_subtitle`)
    REFERENCES `casa_digital_db`.`subtitles` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_bin;


-- -----------------------------------------------------
-- Table `casa_digital_db`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `casa_digital_db`.`roles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(10) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_bin;


-- -----------------------------------------------------
-- Table `casa_digital_db`.`subcategories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `casa_digital_db`.`subcategories` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_category` INT(11) NOT NULL,
  `subcategory_name` VARCHAR(50) NOT NULL,
  `subcategory_img` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_category_idx` (`id_category` ASC),
  CONSTRAINT `id_category`
    FOREIGN KEY (`id_category`)
    REFERENCES `casa_digital_db`.`categories` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_bin;


-- -----------------------------------------------------
-- Table `casa_digital_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `casa_digital_db`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `birth_date` DATE NOT NULL,
  `image` VARCHAR(50) NOT NULL,
  `role_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `role_id_idx` (`role_id` ASC),
  CONSTRAINT `role_id`
    FOREIGN KEY (`role_id`)
    REFERENCES `casa_digital_db`.`roles` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1
COLLATE = latin1_bin;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
