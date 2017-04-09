-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'person'
-- 
-- ---

DROP TABLE IF EXISTS `person`;
    
CREATE TABLE `person` (
  `personId` INTEGER NOT NULL AUTO_INCREMENT,
  `eventId` INTEGER NOT NULL,
  `plazaId` INTEGER NOT NULL,
  `personGroupId` INTEGER NOT NULL,
  `personTypeId` INTEGER NOT NULL,
  `cssClassId` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `description` MEDIUMTEXT NOT NULL,
  `shortDescription` VARCHAR(255) NOT NULL,
  `order` INTEGER NULL DEFAULT NULL,
  `imageUrl` MEDIUMTEXT NOT NULL,
  `active` INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (`personId`)
);

-- ---
-- Table 'plaza'
-- 
-- ---

DROP TABLE IF EXISTS `plaza`;
    
CREATE TABLE `plaza` (
  `eventId` INTEGER NOT NULL,
  `plazaId` INTEGER NOT NULL AUTO_INCREMENT,
  `cssClassId` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `description` MEDIUMTEXT NOT NULL,
  `imageUrl` MEDIUMTEXT NOT NULL,
  `active` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`plazaId`)
);

-- ---
-- Table 'schedule'
-- 
-- ---

DROP TABLE IF EXISTS `schedule`;
    
CREATE TABLE `schedule` (
  `scheduleId` INTEGER NOT NULL AUTO_INCREMENT,
  `personId` INTEGER NOT NULL,
  `eventId` INTEGER NOT NULL,
  `plazaId` INTEGER NOT NULL,
  `cssClassId` VARCHAR(100) NOT NULL,
  `from` DATETIME NOT NULL,
  `to` DATETIME NOT NULL,
  PRIMARY KEY (`scheduleId`)
);

-- ---
-- Table 'cssStyle'
-- 
-- ---

DROP TABLE IF EXISTS `cssStyle`;
    
CREATE TABLE `cssStyle` (
  `cssStyleId` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`cssStyleId`)
);

-- ---
-- Table 'personLink'
-- 
-- ---

DROP TABLE IF EXISTS `personLink`;
    
CREATE TABLE `personLink` (
  `personLinkId` INTEGER NOT NULL AUTO_INCREMENT,
  `personId` INTEGER NOT NULL,
  `name` MEDIUMTEXT NOT NULL,
  `href` MEDIUMTEXT NOT NULL,
  `active` TINYINT NOT NULL DEFAULT 1,
  `icon` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`personLinkId`)
);

-- ---
-- Table 'personGroup'
-- 
-- ---

DROP TABLE IF EXISTS `personGroup`;
    
CREATE TABLE `personGroup` (
  `personGroupId` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `active` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`personGroupId`)
);

-- ---
-- Table 'personType'
-- 
-- ---

DROP TABLE IF EXISTS `personType`;
    
CREATE TABLE `personType` (
  `personTypeId` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `active` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`personTypeId`)
);

-- ---
-- Table 'personProduct'
-- 
-- ---

DROP TABLE IF EXISTS `personProduct`;
    
CREATE TABLE `personProduct` (
  `personProductId` INTEGER NOT NULL AUTO_INCREMENT,
  `personId` INTEGER NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `active` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`personProductId`)
);

-- ---
-- Table 'user'
-- 
-- ---

DROP TABLE IF EXISTS `user`;
    
CREATE TABLE `user` (
  `userId` INTEGER NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `active` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`userId`)
);

-- ---
-- Table 'event'
-- 
-- ---

DROP TABLE IF EXISTS `event`;
    
CREATE TABLE `event` (
  `eventId` INTEGER NOT NULL AUTO_INCREMENT,
  `cssStyleId` INTEGER NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `date` DATETIME NOT NULL,
  `imageUrl` MEDIUMTEXT NOT NULL,
  `externalUrl` MEDIUMTEXT NULL,
  `longitude` DECIMAL(10,6) NULL DEFAULT NULL,
  `latitude` DECIMAL(10,6) NULL,
  `active` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`eventId`)
);

-- ---
-- Table 'userViewsLog'
-- 
-- ---

DROP TABLE IF EXISTS `userViewsLog`;
    
CREATE TABLE `userViewsLog` (
  `userViewsLogId` INTEGER NOT NULL AUTO_INCREMENT,
  `userId` INTEGER NOT NULL,
  `objectId` INTEGER NOT NULL,
  `objectName` VARCHAR(50) NOT NULL,
  `datetime` DATETIME NOT NULL,
  PRIMARY KEY (`userViewsLogId`)
);

-- ---
-- Table 'userProfile'
-- 
-- ---

DROP TABLE IF EXISTS `userProfile`;
    
CREATE TABLE `userProfile` (
  `userProfileId` INTEGER NOT NULL AUTO_INCREMENT,
  `userId` INTEGER NOT NULL,
  `gender` VARCHAR(100) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`userProfileId`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `person` ADD FOREIGN KEY (eventId) REFERENCES `event` (`eventId`);
ALTER TABLE `person` ADD FOREIGN KEY (plazaId) REFERENCES `plaza` (`plazaId`);
ALTER TABLE `person` ADD FOREIGN KEY (personGroupId) REFERENCES `personGroup` (`personGroupId`);
ALTER TABLE `person` ADD FOREIGN KEY (personTypeId) REFERENCES `personType` (`personTypeId`);
ALTER TABLE `person` ADD FOREIGN KEY (cssClassId) REFERENCES `cssStyle` (`cssStyleId`);
ALTER TABLE `plaza` ADD FOREIGN KEY (eventId) REFERENCES `event` (`eventId`);
ALTER TABLE `plaza` ADD FOREIGN KEY (cssClassId) REFERENCES `cssStyle` (`cssStyleId`);
ALTER TABLE `schedule` ADD FOREIGN KEY (personId) REFERENCES `person` (`personId`);
ALTER TABLE `schedule` ADD FOREIGN KEY (eventId) REFERENCES `event` (`eventId`);
ALTER TABLE `schedule` ADD FOREIGN KEY (plazaId) REFERENCES `plaza` (`plazaId`);
ALTER TABLE `schedule` ADD FOREIGN KEY (cssClassId) REFERENCES `cssStyle` (`cssStyleId`);
ALTER TABLE `personLink` ADD FOREIGN KEY (personId) REFERENCES `person` (`personId`);
ALTER TABLE `personProduct` ADD FOREIGN KEY (personId) REFERENCES `person` (`personId`);
ALTER TABLE `event` ADD FOREIGN KEY (cssStyleId) REFERENCES `cssStyle` (`cssStyleId`);
ALTER TABLE `userViewsLog` ADD FOREIGN KEY (userId) REFERENCES `user` (`userId`);
ALTER TABLE `userProfile` ADD FOREIGN KEY (userId) REFERENCES `user` (`userId`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `person` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `plaza` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `schedule` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `cssStyle` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `personLink` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `personGroup` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `personType` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `personProduct` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `user` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `event` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `userViewsLog` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `userProfile` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `person` (`personId`,`eventId`,`plazaId`,`personGroupId`,`personTypeId`,`cssClassId`,`name`,`description`,`shortDescription`,`order`,`imageUrl`,`active`) VALUES
-- ('','','','','','','','','','','','');
-- INSERT INTO `plaza` (`eventId`,`plazaId`,`cssClassId`,`name`,`description`,`imageUrl`,`active`) VALUES
-- ('','','','','','','');
-- INSERT INTO `schedule` (`scheduleId`,`personId`,`eventId`,`plazaId`,`cssClassId`,`from`,`to`) VALUES
-- ('','','','','','','');
-- INSERT INTO `cssStyle` (`cssStyleId`,`name`) VALUES
-- ('','');
-- INSERT INTO `personLink` (`personLinkId`,`personId`,`name`,`href`,`active`,`icon`) VALUES
-- ('','','','','','');
-- INSERT INTO `personGroup` (`personGroupId`,`name`,`active`) VALUES
-- ('','','');
-- INSERT INTO `personType` (`personTypeId`,`name`,`active`) VALUES
-- ('','','');
-- INSERT INTO `personProduct` (`personProductId`,`personId`,`name`,`active`) VALUES
-- ('','','','');
-- INSERT INTO `user` (`userId`,`email`,`password`,`active`) VALUES
-- ('','','','');
-- INSERT INTO `event` (`eventId`,`cssStyleId`,`name`,`date`,`imageUrl`,`externalUrl`,`longitude`,`latitude`,`active`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `userViewsLog` (`userViewsLogId`,`userId`,`objectId`,`objectName`,`datetime`) VALUES
-- ('','','','','');
-- INSERT INTO `userProfile` (`userProfileId`,`userId`,`gender`,`name`) VALUES
-- ('','','','');