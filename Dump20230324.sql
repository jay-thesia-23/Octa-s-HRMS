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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-24 18:56:50
