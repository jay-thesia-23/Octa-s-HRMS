-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: hrms
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `breck_master`
--

DROP TABLE IF EXISTS `breck_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `breck_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reg_id` int NOT NULL,
  `status` varchar(45) NOT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `date` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_breck_master_1_idx` (`reg_id`),
  CONSTRAINT `fk_breck_master_1` FOREIGN KEY (`reg_id`) REFERENCES `registration` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `breck_master`
--

LOCK TABLES `breck_master` WRITE;
/*!40000 ALTER TABLE `breck_master` DISABLE KEYS */;
INSERT INTO `breck_master` VALUES (1,19,'breck_in','2023-03-24 04:57:43','24/3/2023'),(2,19,'breck_in','2023-03-24 04:58:46','24/3/2023'),(3,19,'breck_out','2023-03-24 04:58:48','24/3/2023'),(4,19,'breck_in','2023-03-24 04:59:35','24/3/2023'),(5,19,'breck_out','2023-03-24 04:59:36','24/3/2023'),(6,19,'breck_out','2023-03-24 05:04:47','24/3/2023'),(7,19,'breck_in','2023-03-24 05:08:56','24/3/2023'),(8,19,'breck_out','2023-03-24 05:08:58','24/3/2023'),(9,19,'breck_in','2023-03-24 05:08:58','24/3/2023'),(10,19,'breck_out','2023-03-24 05:08:59','24/3/2023'),(11,19,'breck_in','2023-03-27 04:09:18','27/3/2023'),(12,19,'breck_out','2023-03-27 04:10:18','27/3/2023'),(13,19,'breck_in','2023-03-27 04:57:53','27/3/2023'),(14,19,'breck_out','2023-03-27 04:57:55','27/3/2023'),(15,45,'breck_in','2023-03-27 07:57:50','27/3/2023'),(16,45,'breck_out','2023-03-27 07:57:50','27/3/2023'),(17,19,'breck_in','2023-03-28 03:54:27','28/3/2023'),(18,19,'breck_out','2023-03-28 03:54:31','28/3/2023'),(19,19,'breck_in','2023-03-28 04:02:54','28/3/2023'),(20,19,'breck_out','2023-03-28 04:03:14','28/3/2023'),(21,19,'breck_in','2023-03-28 04:04:00','28/3/2023'),(22,19,'breck_in','2023-03-28 04:06:29','28/3/2023'),(23,19,'breck_in','2023-03-28 04:08:12','28/3/2023'),(24,19,'breck_in','2023-03-28 04:09:42','28/3/2023'),(25,19,'breck_out','2023-03-28 04:10:13','28/3/2023'),(26,19,'breck_in','2023-03-28 04:10:38','28/3/2023'),(27,19,'breck_in','2023-03-28 04:11:01','28/3/2023'),(28,19,'breck_in','2023-03-28 04:11:22','28/3/2023'),(29,19,'breck_out','2023-03-28 04:12:39','28/3/2023'),(30,19,'breck_in','2023-03-28 04:12:43','28/3/2023'),(31,19,'breck_in','2023-03-28 04:14:18','28/3/2023'),(32,19,'breck_out','2023-03-28 04:14:20','28/3/2023'),(33,19,'breck_in','2023-03-28 04:16:27','28/3/2023'),(34,19,'breck_out','2023-03-28 04:16:30','28/3/2023'),(35,19,'breck_in','2023-03-28 04:16:31','28/3/2023'),(36,19,'breck_out','2023-03-28 04:16:45','28/3/2023'),(37,19,'breck_in','2023-03-28 04:26:19','28/3/2023'),(38,19,'breck_out','2023-03-28 04:26:21','28/3/2023'),(39,19,'breck_in','2023-03-28 04:33:01','28/3/2023'),(40,19,'breck_out','2023-03-28 04:33:05','28/3/2023'),(41,19,'breck_in','2023-03-28 04:34:09','28/3/2023'),(42,19,'breck_out','2023-03-28 04:34:11','28/3/2023'),(43,19,'breck_in','2023-03-28 04:36:02','28/3/2023'),(44,19,'breck_out','2023-03-28 04:36:05','28/3/2023'),(45,19,'breck_in','2023-03-28 04:37:10','28/3/2023'),(46,19,'breck_out','2023-03-28 04:37:11','28/3/2023'),(47,19,'breck_in','2023-03-28 04:37:12','28/3/2023'),(48,19,'breck_out','2023-03-28 04:37:12','28/3/2023'),(49,19,'breck_in','2023-03-28 04:37:13','28/3/2023'),(50,19,'breck_out','2023-03-28 04:37:13','28/3/2023'),(51,19,'breck_in','2023-03-28 04:37:14','28/3/2023'),(52,19,'breck_out','2023-03-28 04:37:15','28/3/2023'),(53,19,'breck_in','2023-03-28 04:39:31','28/3/2023'),(54,19,'breck_out','2023-03-28 04:39:32','28/3/2023'),(55,19,'breck_in','2023-03-28 04:43:55','28/3/2023'),(56,19,'breck_in','2023-03-28 04:50:17','28/3/2023'),(57,19,'breck_out','2023-03-28 04:50:18','28/3/2023'),(58,19,'breck_in','2023-03-28 04:53:13','28/3/2023'),(59,19,'breck_out','2023-03-28 04:53:14','28/3/2023'),(60,19,'breck_in','2023-03-28 04:56:49','28/3/2023'),(61,19,'breck_out','2023-03-28 05:00:13','28/3/2023'),(62,19,'breck_out','2023-03-28 05:00:27','28/3/2023'),(63,19,'breck_out','2023-03-28 05:00:34','28/3/2023'),(64,19,'breck_out','2023-03-28 05:02:17','28/3/2023'),(65,19,'breck_in','2023-03-28 05:03:43','28/3/2023'),(66,19,'breck_out','2023-03-28 05:03:46','28/3/2023'),(67,19,'breck_in','2023-03-28 05:06:03','28/3/2023'),(68,19,'breck_out','2023-03-28 05:06:05','28/3/2023');
/*!40000 ALTER TABLE `breck_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `check_master`
--

DROP TABLE IF EXISTS `check_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `check_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(45) NOT NULL,
  `reg_id` int NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date` varchar(10) DEFAULT NULL,
  `online_status` varchar(45) NOT NULL DEFAULT '0',
  `ofline_status` varchar(45) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_check_master_1_idx` (`reg_id`),
  CONSTRAINT `fk_check_master_1` FOREIGN KEY (`reg_id`) REFERENCES `registration` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `check_master`
--

LOCK TABLES `check_master` WRITE;
/*!40000 ALTER TABLE `check_master` DISABLE KEYS */;
INSERT INTO `check_master` VALUES (1,'check_out',19,'2023-03-24 05:04:50','24/3/2023','0','0'),(2,'check_in',19,'2023-03-24 05:04:51','24/3/2023','0','0'),(3,'check_in',19,'2023-03-24 05:08:55','24/3/2023','0','0'),(4,'check_out',19,'2023-03-24 10:09:00','24/3/2023','0','0'),(5,'check_in',19,'2023-03-24 06:08:52','24/3/2023','0','0'),(6,'check_in',19,'2023-03-27 04:08:14','27/3/2023','0','0'),(7,'check_in',19,'2023-03-27 04:08:25','27/3/2023','0','0'),(8,'check_out',19,'2023-03-27 04:10:06','27/3/2023','0','0'),(9,'check_out',19,'2023-03-27 04:10:20','27/3/2023','0','0'),(10,'check_in',19,'2023-03-27 04:10:29','27/3/2023','0','0'),(11,'check_in',19,'2023-03-27 04:10:43','27/3/2023','0','0'),(12,'check_in',19,'2023-03-27 04:57:46','27/3/2023','0','0'),(13,'check_in',19,'2023-03-27 04:57:52','27/3/2023','0','0'),(14,'check_in',45,'2023-03-27 07:57:47','27/3/2023','0','0'),(15,'check_out',45,'2023-03-27 07:57:53','27/3/2023','0','0'),(16,'check_in',19,'2023-03-28 03:54:17','28/3/2023','0','0'),(17,'check_in',19,'2023-03-28 04:02:47','28/3/2023','0','0'),(18,'check_in',19,'2023-03-28 04:05:44','28/3/2023','0','0'),(19,'check_in',19,'2023-03-28 04:08:10','28/3/2023','0','0'),(20,'check_in',19,'2023-03-28 04:09:41','28/3/2023','0','0'),(21,'check_in',19,'2023-03-28 04:11:00','28/3/2023','0','0'),(22,'check_in',19,'2023-03-28 04:11:21','28/3/2023','0','0'),(23,'check_in',19,'2023-03-28 04:14:17','28/3/2023','0','0'),(24,'check_in',19,'2023-03-28 04:16:26','28/3/2023','0','0'),(25,'check_in',19,'2023-03-28 04:22:45','28/3/2023','0','0'),(26,'check_in',19,'2023-03-28 04:24:14','28/3/2023','0','0'),(27,'check_in',19,'2023-03-28 04:26:18','28/3/2023','0','0'),(28,'check_in',19,'2023-03-28 04:33:00','28/3/2023','0','0'),(29,'check_in',19,'2023-03-28 04:34:09','28/3/2023','0','0'),(30,'check_in',19,'2023-03-28 04:35:59','28/3/2023','0','0'),(31,'check_in',19,'2023-03-28 04:37:09','28/3/2023','0','0'),(32,'check_in',19,'2023-03-28 04:39:30','28/3/2023','0','0'),(33,'check_in',19,'2023-03-28 04:40:53','28/3/2023','0','0'),(34,'check_in',19,'2023-03-28 04:43:33','28/3/2023','0','0'),(35,'check_in',19,'2023-03-28 04:43:45','28/3/2023','0','0'),(36,'check_in',19,'2023-03-28 04:50:15','28/3/2023','0','0'),(37,'check_in',19,'2023-03-28 04:53:12','28/3/2023','0','0'),(38,'check_in',19,'2023-03-28 04:53:35','28/3/2023','0','0'),(39,'check_in',19,'2023-03-28 04:56:45','28/3/2023','0','0'),(40,'check_in',19,'2023-03-28 04:58:37','28/3/2023','0','0'),(41,'check_in',19,'2023-03-28 05:03:31','28/3/2023','0','0'),(42,'check_in',19,'2023-03-28 05:03:59','28/3/2023','0','0'),(43,'check_in',19,'2023-03-28 05:05:59','28/3/2023','0','0'),(44,'check_out',19,'2023-03-28 05:06:12','28/3/2023','0','0');
/*!40000 ALTER TABLE `check_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city_master`
--

DROP TABLE IF EXISTS `city_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city_master` (
  `city_id` int NOT NULL AUTO_INCREMENT,
  `state_id` int NOT NULL,
  `city_name` varchar(45) NOT NULL,
  PRIMARY KEY (`city_id`),
  KEY `fk_city_master_1_idx` (`state_id`),
  CONSTRAINT `fk_city_master_1` FOREIGN KEY (`state_id`) REFERENCES `state_master` (`state_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city_master`
--

LOCK TABLES `city_master` WRITE;
/*!40000 ALTER TABLE `city_master` DISABLE KEYS */;
INSERT INTO `city_master` VALUES (1,1,'Ahmedabad'),(2,1,'Surat'),(3,2,'Panji'),(4,3,'Bombay');
/*!40000 ALTER TABLE `city_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cource_master`
--

DROP TABLE IF EXISTS `cource_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cource_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cource_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cource_master`
--

LOCK TABLES `cource_master` WRITE;
/*!40000 ALTER TABLE `cource_master` DISABLE KEYS */;
INSERT INTO `cource_master` VALUES (1,'SSC'),(2,'HSC');
/*!40000 ALTER TABLE `cource_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `document_master`
--

DROP TABLE IF EXISTS `document_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `document_master` (
  `document_id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `reg_id` int NOT NULL,
  `adhar` varchar(500) NOT NULL,
  `resume_doc` varchar(500) NOT NULL,
  `cheque` varchar(500) NOT NULL,
  `other` varchar(500) NOT NULL,
  `profile_pic` varchar(500) NOT NULL,
  PRIMARY KEY (`document_id`),
  KEY `fk_document_master_1_idx` (`employee_id`),
  KEY `fk_document_master_2_idx` (`reg_id`),
  CONSTRAINT `fk_document_master_1` FOREIGN KEY (`employee_id`) REFERENCES `employee_basic_infomation` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_document_master_2` FOREIGN KEY (`reg_id`) REFERENCES `registration` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `document_master`
--

LOCK TABLES `document_master` WRITE;
/*!40000 ALTER TABLE `document_master` DISABLE KEYS */;
INSERT INTO `document_master` VALUES (21,41,19,'1679575867195-Avatar.png','1679575867197-Avatar(1).png','1679575867197-Avatar(2).png','1679575867197-Avatar(4).png','1679575867198-esplmail.esparkbizmail.jpeg'),(22,43,45,'1679577835260-Oval.png','1679577835260-left3.png','1679577835264-twitter.png','1679577835265-heart.png','1679577835265-youtube.png'),(23,44,41,'1679579040260-Icon_CS.png','1679579040261-Icon_CS(1).png','1679579040261-Image.png','1679579040265-Image.png','1679579040267-Image (1).png'),(24,45,46,'1679580309772-heart.png','1679580309774-Icon_CS(1).png','1679580309775-Image (1).png','1679580309779-linkedin.png','1679580309779-esplmail.esparkbizmail.jpeg');
/*!40000 ALTER TABLE `document_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `education_table`
--

DROP TABLE IF EXISTS `education_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education_table` (
  `education_id` int NOT NULL AUTO_INCREMENT,
  `cource_name` varchar(255) NOT NULL,
  `percentage` varchar(5) NOT NULL,
  `board_university_name` varchar(255) NOT NULL,
  `passout_year` varchar(10) NOT NULL,
  `employee_id` int NOT NULL,
  `reg_id` int NOT NULL,
  PRIMARY KEY (`education_id`),
  KEY `fk_education_table_1_idx` (`employee_id`),
  KEY `fk_education_table_2_idx` (`reg_id`),
  CONSTRAINT `fk_education_table_1` FOREIGN KEY (`employee_id`) REFERENCES `employee_basic_infomation` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education_table`
--

LOCK TABLES `education_table` WRITE;
/*!40000 ALTER TABLE `education_table` DISABLE KEYS */;
INSERT INTO `education_table` VALUES (3,'HSC','56','gtu','2064',4,36),(4,' HSC','534','sngv','2064',4,36),(5,'HSC','56','gtu','2064',5,36),(6,'SSC','43','E','3145',7,37),(7,'SSC','43','E','3145',8,37),(35,'HSC','56','dddedd','2064',34,41),(36,'HSC','56','dddedd','2064',35,41),(41,'SSC','56','gtu','2064',40,42),(42,'SSC','56','gtu','2064',40,42),(43,'SSC','56','gtu','2064',40,42),(44,'SSC','56','gtu','2064',40,42),(45,'SSC','56','GTu','2342',41,19),(46,'SSC','56','E','2064',42,44),(47,'HSC','56','gtu','2064',43,45),(48,'SSC','56','gtu','1323',44,41),(49,'SSC','56','sngv','2064',45,46);
/*!40000 ALTER TABLE `education_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_basic_infomation`
--

DROP TABLE IF EXISTS `employee_basic_infomation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_basic_infomation` (
  `employee_id` int NOT NULL AUTO_INCREMENT,
  `reg_id` int DEFAULT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(20) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `zip_code` varchar(10) DEFAULT NULL,
  `birth_date` varchar(45) NOT NULL,
  `address` varchar(255) NOT NULL,
  `relationship` varchar(10) NOT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`employee_id`),
  KEY `fk_employee_basic_infomation_1_idx` (`reg_id`),
  CONSTRAINT `fk_employee_basic_infomation_1` FOREIGN KEY (`reg_id`) REFERENCES `registration` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_basic_infomation`
--

LOCK TABLES `employee_basic_infomation` WRITE;
/*!40000 ALTER TABLE `employee_basic_infomation` DISABLE KEYS */;
INSERT INTO `employee_basic_infomation` VALUES (2,34,'sanjay','sdfdf','malya@gmail.com','32423535','Ahmedabad','Gujarat','male',NULL,'2023-03-08','sdfssf','Single','dsfsdff','sdfsdfs','2023-03-23 06:17:52'),(3,35,'om','patel','malya@gmail.com','342352525','Panji','Goa','male',NULL,'2023-03-09','efsfss','Single','dsfsdff','sdffsdf','2023-03-23 06:28:13'),(4,36,'hsd','fsdafsdfs','malya@gmail.com','343423434','Ahmedabad','Gujarat','male',NULL,'2023-03-16','sdfdsffsd','Single','dfdsfdd','fssfdff','2023-03-23 06:36:46'),(5,36,'hsd','fsdafsdfs','malya@gmail.com','343423434','Panji','Goa','male',NULL,'2023-03-16','sdfdsffsd','Single','dfdsfdd','fssfdff','2023-03-23 06:37:57'),(6,37,'vishwa','patel','order@gmail.com','345543536','Panji','Goa','female',NULL,'2023-03-11','SFAD','Single','sdfsfsdf','sdfssdf','2023-03-23 06:42:32'),(7,37,'viru','patel','order@gmail.com','345543536','Panji','Goa','female',NULL,'2023-03-11','SFAD','Single','sdfsfsdf','sdfssdf','2023-03-23 06:43:37'),(8,37,'viru','patel','order@gmail.com','345543536','Panji','Goa','female',NULL,'2023-03-11','SFAD','Single','sdfsfsdf','sdfssdf','2023-03-23 06:46:39'),(34,41,'hari','hari','kano@gmail.com','342434234','Panji','Goa','male',NULL,'2023-02-27','SFAD','Single','sdfsfsdf','sdfssdf','2023-03-23 12:28:38'),(35,41,'hari','hari','kano@gmail.com','342434234','Ahmedabad','Gujarat','male',NULL,'2023-02-27','SFAD','Single','sdfsfsdf','sdfssdf','2023-03-23 12:33:10'),(40,42,'om','patel','malya123@gmail.com','9430493433','Panji','Goa','male',NULL,'2023-03-10','SFAD','Single','sde','dev','2023-03-23 12:46:58'),(41,19,'jay','patel','jayengineer.jp2410@gmail.com','3213142324','Ahmedabad','Gujarat','male',NULL,'2023-03-18','dfggrg','Single','fdf','dsfdfds','2023-03-23 12:51:07'),(42,44,'nandani','gajjar','malya@gmail.com','3424235235','Ahmedabad','Gujarat','female',NULL,'2001-06-05','asdfasd','Single','sdfsfsdf','sdfssdf','2023-03-23 13:17:29'),(43,45,'meet','vardiwala','satya1234@gmail.com','3424235235','Ahmedabad','Gujarat','male',NULL,'2022-02-02','efrjhfoehw','Married','sde','dev','2023-03-23 13:23:55'),(44,41,'sanjay','patel','ramu@gmail.com','3424235235','Ahmedabad','Gujarat','male',NULL,'2023-03-11','efrjhfoehw','Single','sde','dev','2023-03-23 13:44:00'),(45,46,'harsh','patel','malya@gmail.com','3424235235','Panji','Goa','male',NULL,'2321-03-23','SFAD','Single','sde','dev','2023-03-23 14:05:09');
/*!40000 ALTER TABLE `employee_basic_infomation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experience_table`
--

DROP TABLE IF EXISTS `experience_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experience_table` (
  `experience_id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(50) NOT NULL,
  `designation_company` varchar(50) NOT NULL,
  `start_date` varchar(50) NOT NULL,
  `end_date` varchar(50) NOT NULL,
  `employee_id` int NOT NULL,
  PRIMARY KEY (`experience_id`),
  KEY `fk_experience_table_1_idx` (`employee_id`),
  CONSTRAINT `fk_experience_table_1` FOREIGN KEY (`employee_id`) REFERENCES `employee_basic_infomation` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experience_table`
--

LOCK TABLES `experience_table` WRITE;
/*!40000 ALTER TABLE `experience_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `experience_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leave_balance_23`
--

DROP TABLE IF EXISTS `leave_balance_23`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leave_balance_23` (
  `leave_id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL DEFAULT '1',
  `leave_category` varchar(10) NOT NULL,
  `used_status` varchar(100) NOT NULL DEFAULT 'unused',
  PRIMARY KEY (`leave_id`),
  KEY `fk_leave_balance_23_1_idx` (`employee_id`),
  CONSTRAINT `fk_leave_balance_23_1` FOREIGN KEY (`employee_id`) REFERENCES `employee_basic_infomation` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leave_balance_23`
--

LOCK TABLES `leave_balance_23` WRITE;
/*!40000 ALTER TABLE `leave_balance_23` DISABLE KEYS */;
/*!40000 ALTER TABLE `leave_balance_23` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_table`
--

DROP TABLE IF EXISTS `profile_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile_table` (
  `profile_id` int NOT NULL,
  `image_url` blob NOT NULL,
  `id` int NOT NULL,
  PRIMARY KEY (`profile_id`),
  KEY `id` (`id`),
  CONSTRAINT `profile_table_ibfk_1` FOREIGN KEY (`id`) REFERENCES `registration` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_table`
--

LOCK TABLES `profile_table` WRITE;
/*!40000 ALTER TABLE `profile_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `profile_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reference_master`
--

DROP TABLE IF EXISTS `reference_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reference_master` (
  `ref_id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `number` varchar(45) NOT NULL,
  `relationship` varchar(45) NOT NULL,
  `reg_id` int NOT NULL,
  PRIMARY KEY (`ref_id`),
  KEY `fk_reference_master_1_idx` (`employee_id`),
  KEY `fk_reference_master_2_idx` (`reg_id`),
  CONSTRAINT `fk_reference_master_1` FOREIGN KEY (`employee_id`) REFERENCES `employee_basic_infomation` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_reference_master_2` FOREIGN KEY (`reg_id`) REFERENCES `registration` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reference_master`
--

LOCK TABLES `reference_master` WRITE;
/*!40000 ALTER TABLE `reference_master` DISABLE KEYS */;
INSERT INTO `reference_master` VALUES (3,5,'ffdfd','213324423','fsdff',36),(4,5,'dfgsdsdgs','3423423423','sdffsdf',36),(5,7,'roger','1343409320','xyz',19),(6,8,'ramu','33453566','azq',19),(7,8,'roger','1343409320','xyz',37),(66,34,'sanjay','823844982','relaii',41),(67,34,'ramu','2342344434','342344344',41),(68,35,'sanjay','823844982','relaii',41),(69,35,'ramu','3424234434','34324234',41),(78,40,'sanjay ka','1343409320','xyz',42),(79,40,'ramu','342342343','23423423',42),(80,41,'roger','1343409320','xyz',19),(81,41,'ramu','33453566','azq',19),(82,42,'ffdfd','1343409320','fsdff',44),(83,42,'dfgsdsdgs','1234567890','ytvytvytv',44),(84,43,'roger','1343409320','xyz',45),(85,43,'ramu','aweewrrwr','werwerrwer',45),(86,44,'roger','1343409320','relaii',41),(87,44,'ramu','3423342343','234234',41),(88,45,'roger','1343409320','xyz',46),(89,45,'om','23423432234234','23234234',46);
/*!40000 ALTER TABLE `reference_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `id` int NOT NULL AUTO_INCREMENT,
  `u_name` varchar(45) NOT NULL,
  `u_email` varchar(45) NOT NULL,
  `u_password` varchar(255) NOT NULL,
  `isactive` varchar(45) NOT NULL,
  `u_login` varchar(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (1,'jay','jayengineer.jp2410@gmail.com','$2b$10$LnbR/TWU7bAaqTiCnj9rPuW6wbajJU5GL6PvfZaGR4c9DFu4mTppO','1','1'),(2,'jay','sanjay','$2b$10$RKpWRgrCKGh4XE.BlBrh3eK0nosKCf/kVLb7Xd28evqa07n1dzJS6','1','1'),(3,'jay','sanjay@gmail.com ','$2b$10$AmCrruRzTfjvQDpfJzeaZ.gRqsL01PsI2dtyrvAA7l9Sx.atgEkNe','1','1'),(4,'om','om@gmail.com','$2b$10$py9i8gzYnNyr6m3GWieoOeW3JcLg4Y4VgLuPqCUdt8dE8pPgJ341S','0','1'),(5,'vivek ','vivek@123','$2b$10$2lEVWG5qp5ryitDrhZjRsOW1U43Qod5xy9bQTbBTtJ48oUUUPuEmO','0','0'),(6,'sujoy','order@gmail.com','$2b$10$/vnPzx4AYZ3eaULaZZNFuOCfiXO2L50.WOlGAjQARgh5hu1ewXR0a','0','1'),(7,'demo','demo@gmail.com','$2b$10$VJddHsibxmp/7FAn9kbOQ.OU6wmm5jlv8nm3cui5OHR1kK9ENgNEG','0','0'),(8,'jay','smith@gmail.com','$2b$10$IptTw7YEbAMYjTfBbOyYfOlh.SngTBEQ.S4Cj1xJ/zslkY8WGIrAW','0','0'),(9,'jr','jordan@gmail.com','$2b$10$LXuHJsFAR95FF0ttl2VQSezgdEJ.bxOvCY07QbnJWKSQb1SA4tyam','1','1'),(10,'jr','jordan@gmail.com','$2b$10$wf8mbPLJLEv38DbuTO3cde/ZPg2joMUHpPvFyxu5GUCwIPmRlhWBq','1','1'),(11,'jr','jordan123@gmail.com','$2b$10$4g.XCHs9nIAnNWSn55FY1O7yzeT2TIuN3uIgbdXW.D0kHboFMlai6','1','1'),(12,'jr','jordan123@gmail.com','$2b$10$efkejMLZrBKTmX60GGdfHeQKILiGqpMuPPsVZJ58IV40/8PhGPRR.','1','1'),(13,'jr','jordan123@gmail.com','$2b$10$KUMjrP5ofXrtexAbKVTev..bbRyfavNUSA.RQNiE6Qtpc6Xt3dJJy','1','1'),(14,'james','jordanmichael@gmail.com','$2b$10$dq/rB8X1hGfCQxIROYMkYuPkdJ7mgSdKsEM4fFwk35tGXXzMuPBqK','1','1'),(15,'james','jordanmichael@gmail.com','$2b$10$zlN6Byk.ODX17TSlaEdXYOw37clf1aFv8LXMCEhHUTPCanCNzyOEi','1','1'),(16,'jay','jordan2410@gmail.com','$2b$10$RyOdr.0ldTyA4Xl4pkVkHOr/vh2GwAfKSQHBvfG6uuVkuJNQio1QC','1','1'),(17,'jay','jordan5646@gmail.com','$2b$10$Cq5PUuskG9uUfZflJWMfleMB6h7KrpsnTIxx0P6KMmm6WXVVe8QGa','1','1'),(18,'ram','ram@gmail.com','$2b$10$iBSE0QoNU26NCsixWwiS0exXNjTMcaQ58t4V701SmwRVc/dzhPcdq','1','1'),(19,'roy','roy@gmail.com','$2b$10$JK5Vwmvm/NNGUM6PxQFHkeBCDawUNW0zlE3bCSU5UTMaPEjfbKPSW','0','0'),(20,'roy','roy123@gmail.com','$2b$10$8WMto8a3NQG1ATmGDA3Wje1urIu4WR506Jc0k.DKl804fFlJuSVQy','1','1'),(21,'roy','roy123@gmail.com','$2b$10$5R/EMIJfyPI0AytM3OGYN.w3gdCrnX1r0.BQ9bP9jIVCBlBZzam0y','1','1'),(22,'ram','ram@gmail.com','$2b$10$sbdfn1fxUd.ziwpqhVatR.TBNEzQO1omA6bc9Djqu5GwnOprz54Bu','1','1'),(23,'roy','roy2410@gmail.com','$2b$10$m7jPXtTYpFHpJC7LI2DjoeLUYGZn.zs3JOu8HqzgRcnxrtwOCewoK','1','1'),(24,'thala','thala@gmail.com','$2b$10$QBIDgFV4cDqfXRJhR5H/Rutr2nXQwV1RdSMWQlzA536Uz0sfGe6fu','1','1'),(25,'rano','rano@gmail.com','$2b$10$wYyGX2cJkbDRBeB4/SGQH.ScKPgAmjobt0igJSRUGEpYagWP8.NJq','1','1'),(26,'krina','krina@gmail','$2b$10$MdyGoR.MuKgz0ZaDLrygD.ZdpPC6O4d/XuLsVa/qGhZNpIeqobx.e','1','1'),(27,'TEmp','temp@mailinator.com','$2b$10$tld5MDS20nDarEd7HCrupO4Kjk9gqqtMlfpg83g8u0Svw.JXbAe2K','1','1'),(28,'TEmp 1','temp1@mailinator.com','$2b$10$E7O5diTmn73pBrHY5IONI.UKYEUmA6T2QjKO1cuQGwV1B6MSG1fNe','1','1'),(29,'Test3','test3@mailnator.com','$2b$10$AlNzi8zwYfpLW29CD1GUAu0jyf.HMjdgldomPyhdri6SDk.b4gTmy','0','1'),(30,'Mihi','order123@gmail.com','$2b$10$I9zUN8mC8d7vak9csJ7OX.zziTbEBwnliPNoMzOJxkw76MxL9fjcC','0','1'),(31,'nandani','nandani@gmail.com','$2b$10$UYJttJqQ9yje9m9Ir4rd6uf.KUO2ieiVshEA8DM1OiKfNtJuTFjQ.','0','1'),(32,'darshil','darshil@gmail.com','$2b$10$Uv1WPxpTm/AbOj6/tLJs..TL14zG8WATBI0cch1NyN0Z6XTNWUUI6','0','1'),(33,'malya','malya@gmail.com','$2b$10$I8ZA2hldeeDgYgNirloTEOmptLPdu/T/PPurt64m2nUcxzir8SAwm','0','1'),(34,'kaju','kaju@gmail.com','$2b$10$B1lVAAydFv8iDjGCyPHyO.e1gA.V8rKXi5dAX.QAkcGNc.2NfBm5m','0','0'),(35,'Satyam Botadara','demo1234@gmail.com','$2b$10$/q15tPnVxqfPyvLxr95gj.PAv4jIZj4rncpN4NwnzrepJn3l.jX1i','0','1'),(36,'ramu','ramu@gmail.com','$2b$10$jzuX/SIkDdN73yr.AHeE4ulWVC4BMdymKMby3y6D0mG/88soJok8O','0','0'),(37,'saroj','saroj@gmail.com','$2b$10$mUejD7.FnZYLHXDe64cJoOklkfwssEmPDNUoCDfTiYHMo.f068v5G','0','0'),(38,'hari','hari@gmail.com','$2b$10$sW2irF2DdAFRj8M0eUeXo.VMYuR/H9ANY9WZj5ufbv9oGY3D22rCm','1','1'),(39,'hari','hari@gmail.com','$2b$10$vB9hf66EyqtKFQRzBpt1R.dD73g8XQ7QresEnVTE4wBINCMFJ.EHi','1','1'),(40,'kalu','kalu@gmail.com','$2b$10$3Mg73GaXtiYBOJTAuS12Y.ufsgE5i7M0yS09xH3GhPli02V/zIBLK','1','1'),(41,'kano','kano@gmail.com','$2b$10$yjHV3vzOYIgTpdwVGX87qerAAJTj6sD35WqOq9NXr1XsxfTiJjvFe','0','1'),(42,'tapan','tapan@gmail.com','$2b$10$38F.aiaZ/zkdF9Z1FV635.o0W9FdUJbE67s2PwmL41ZnNbzPcxkNe','0','1'),(43,'nandani','nandani1@gmail.com','$2b$10$NjwmfgFqc830wP.90IoKMOFfIsKSD64CX3e7mLBrL7r1Plfp3zYtO','1','1'),(44,'satu','satu@gmail.com','$2b$10$e7ETguqkoUu6Wu69ACpezeJpvQjBQy.gr3K5dal.SsbYi06.6D02G','0','0'),(45,'roman','roman@gmail.com','$2b$10$WPcBg.MRMhmT8Wx6Ia7ZLuedcw3W1d6Jb7SNaf9ndT3dX/Qw7izvK','0','0'),(46,'harsh','harsh@gmail.com','$2b$10$rkq2GwNDNFOEesiremSuXuROTbVnsNRiR.i84lxPAqEzGXeD3Gpj2','0','1'),(47,'tarun ','tarun@gmail.com','$2b$10$EDTm45e7z0DpdqiOl53rrem.7Za7iiGp1dqzNoJ6zRzev2sPD6v32','1','1'),(48,'rocket','rocket@gmail.com','$2b$10$EOo2mYpJIxL6xFvDeDpeO.qqvj8syP.g2wD/hyqk5xk0EARfi2Dsu','1','1');
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request_leave_table`
--

DROP TABLE IF EXISTS `request_leave_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request_leave_table` (
  `request_id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `leave_category` varchar(10) NOT NULL,
  `leave_status` varchar(45) NOT NULL DEFAULT 'unapproved',
  `request_date` varchar(45) NOT NULL,
  `leave_date` varchar(45) NOT NULL,
  `leave_reason` varchar(500) NOT NULL,
  `used_status` varchar(45) NOT NULL DEFAULT 'unused',
  PRIMARY KEY (`request_id`),
  KEY `fk_request_leave_table_1_idx` (`employee_id`),
  CONSTRAINT `fk_request_leave_table_1` FOREIGN KEY (`employee_id`) REFERENCES `registration` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request_leave_table`
--

LOCK TABLES `request_leave_table` WRITE;
/*!40000 ALTER TABLE `request_leave_table` DISABLE KEYS */;
INSERT INTO `request_leave_table` VALUES (2,19,'CL ','unapproved','2023-03-22 ','2023-03-11','asdfaswd','unused'),(3,19,'SL ','unapproved','2023-03-22 ','2023-03-25','sick leave','unused'),(4,19,'CL ','unapproved','2023-03-22 ','2023-04-09','sderfsedfs','unused'),(5,29,'SL ','unapproved','2023-03-22 ','2023-03-23','GG','unused'),(6,19,'CL ','unapproved','2023-03-23 ','2023-03-24','what is leave','unused'),(7,19,'SL ','unapproved','2023-03-23 ','2023-03-11','asefewr','unused'),(8,19,'SL ','unapproved','2023-03-23 ','2023-03-31','qaz','unused'),(9,19,'SL ','unapproved','2023-03-23 ','2023-10-18','ssdfsd','unused'),(10,45,'UPL ','unapproved','2023-03-23 ','2023-03-10','efsefef','unused'),(11,19,'SL ','unapproved','2023-03-23 ','2023-03-12','qwrwew','unused'),(12,46,'PL ','unapproved','2023-03-23 ','2023-10-04','sfasdfas','unused');
/*!40000 ALTER TABLE `request_leave_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state_master`
--

DROP TABLE IF EXISTS `state_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `state_master` (
  `state_id` int NOT NULL AUTO_INCREMENT,
  `state_name` varchar(45) NOT NULL,
  PRIMARY KEY (`state_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state_master`
--

LOCK TABLES `state_master` WRITE;
/*!40000 ALTER TABLE `state_master` DISABLE KEYS */;
INSERT INTO `state_master` VALUES (1,'Gujarat'),(2,'Goa'),(3,'Mumbai');
/*!40000 ALTER TABLE `state_master` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-28 10:42:31
