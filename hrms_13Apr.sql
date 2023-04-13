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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `breck_master`
--

LOCK TABLES `breck_master` WRITE;
/*!40000 ALTER TABLE `breck_master` DISABLE KEYS */;
INSERT INTO `breck_master` VALUES (1,19,'breck_in','2023-04-13 05:10:15','13/4/2023'),(2,19,'breck_out','2023-04-13 05:10:16','13/4/2023'),(3,19,'breck_in','2023-04-13 06:19:44','13/4/2023'),(4,19,'breck_out','2023-04-13 06:19:45','13/4/2023'),(5,19,'breck_in','2023-04-13 06:19:52','13/4/2023'),(6,19,'breck_out','2023-04-13 06:20:15','13/4/2023');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `check_master`
--

LOCK TABLES `check_master` WRITE;
/*!40000 ALTER TABLE `check_master` DISABLE KEYS */;
INSERT INTO `check_master` VALUES (1,'check_in',74,'2023-04-13 04:29:39','13/4/2023','0','0'),(2,'check_out',74,'2023-04-13 04:29:47','13/4/2023','0','0'),(3,'check_in',19,'2023-04-13 05:10:08','13/4/2023','0','0'),(4,'check_in',19,'2023-04-13 05:10:14','13/4/2023','0','0'),(5,'check_out',19,'2023-04-13 06:20:16','13/4/2023','0','0');
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
-- Table structure for table `comment_table`
--

DROP TABLE IF EXISTS `comment_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment_table` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(255) DEFAULT NULL,
  `reg_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comment_table_1_idx` (`reg_id`),
  CONSTRAINT `fk_comment_table_1` FOREIGN KEY (`reg_id`) REFERENCES `registration` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_table`
--

LOCK TABLES `comment_table` WRITE;
/*!40000 ALTER TABLE `comment_table` DISABLE KEYS */;
INSERT INTO `comment_table` VALUES (1,'wec wecdwec',19),(2,'<input />',74),(3,'<Button>dfkjsf</Button>',74),(4,' <input type=\"text\" id=\"fname\" name=\"fname\">',74),(5,'<script>alert(\"hello\")</script>',74),(6,'<button>dfjsdijf</button>',74),(7,'<script>alert(\"hello\")</script>',74),(8,'<script>alert(\"hello\")</script>',19),(9,' <input type=\"text\" id=\"fname\" name=\"fname\">',19),(10,' <input type=\"text\" id=\"fname\" name=\"fname\">',19),(11,' vbffvfvxc',19),(12,'v dfbdf',19),(13,'czdsv',19),(14,'<script>alert(\"hello\")</script>',19),(15,' <input type=\"text\" id=\"fname\" name=\"fname\">',19),(16,' <input type=\"text\" id=\"fname\" name=\"fname\">',74),(17,'dsfd',74),(18,'wef',19),(19,'my check in time',19),(20,'my check in time',19),(21,'sdfsd',19);
/*!40000 ALTER TABLE `comment_table` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `document_master`
--

LOCK TABLES `document_master` WRITE;
/*!40000 ALTER TABLE `document_master` DISABLE KEYS */;
INSERT INTO `document_master` VALUES (24,45,46,'1679580309772-heart.png','1679580309774-Icon_CS(1).png','1679580309775-Image (1).png','1679580309779-linkedin.png','1679580309779-esplmail.esparkbizmail.jpeg'),(66,91,74,'1681117597362-esplmail.esparkbizmail.jpeg','1681117597362-IMG20211025194249.jpg','1681117597383-IMG20211025194249_11zon.jpg','1681117597385-WhatsApp Image 2023-03-15 at 10.42.44 AM.jpeg','1681117597385-Screenshot from 2023-01-31 17-57-14.png'),(67,92,19,'1681291153913-Avatar(4).png','1681291153914-Avatar(2).png','1681291153914-Avatar(2).png','1681291153915-Avatar(4).png','1681291153915-Icon 8.png');
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
) ENGINE=InnoDB AUTO_INCREMENT=398 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education_table`
--

LOCK TABLES `education_table` WRITE;
/*!40000 ALTER TABLE `education_table` DISABLE KEYS */;
INSERT INTO `education_table` VALUES (49,'SSC','56','sngv','2064',45,46),(78,'SSC','56','gtu','1323',73,19),(79,'SSC','56','gtu','1323',74,19),(394,'HSC','56','fwer','2019',91,74),(395,'SSC','56','gtu','1323',92,19),(396,'SSC','56','gtu','1323',92,19),(397,'SSC','56','gtu','1323',92,19);
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
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_basic_infomation`
--

LOCK TABLES `employee_basic_infomation` WRITE;
/*!40000 ALTER TABLE `employee_basic_infomation` DISABLE KEYS */;
INSERT INTO `employee_basic_infomation` VALUES (45,46,'harsh','patel','malya@gmail.com','3424235235','Panji','Goa','male',NULL,'2023-04-11','SFAD','Single','sde','dev','2023-03-23 14:05:09'),(73,41,'sanjay','patel','ramu@gmail.com','3424235235','Ahmedabad','Gujarat','male',NULL,'2023-03-11','efrjhfoehw','Single','sde','dev','2023-04-05 13:24:13'),(74,45,'sanjay','patel','ramu@gmail.com','3424235235','Ahmedabad','Gujarat','male',NULL,'2023-03-11','efrjhfoehw','Single','sde','dev','2023-04-05 13:40:57'),(75,73,'sanjay','patel','ramu@gmail.com','3424235235','Ahmedabad','Gujarat','male',NULL,'2023-03-11','efrjhfoehw','Single','sde','dev','2023-04-05 13:41:44'),(91,74,'shubh','patel','jayengineer.jp2410@gmail.com','9898257504','Panji','Goa','male',NULL,'2023-04-06','dfggrg','Single','fdf','DEV','2023-04-10 09:06:37'),(92,19,'qaz','patel','ramu@gmail.com','3424235235','Ahmedabad','Gujarat','male',NULL,'2023-03-11','efrjhfoehw','Single','sde','dev','2023-04-12 09:19:14');
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
-- Table structure for table `holidays`
--

DROP TABLE IF EXISTS `holidays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `holidays` (
  `id` int NOT NULL AUTO_INCREMENT,
  `holiday_name` varchar(45) NOT NULL,
  `holiday_date` varchar(45) NOT NULL,
  `holiday_month` varchar(45) NOT NULL,
  `holiday_day` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `holidays`
--

LOCK TABLES `holidays` WRITE;
/*!40000 ALTER TABLE `holidays` DISABLE KEYS */;
INSERT INTO `holidays` VALUES (1,'Makara Sankranti','14-01-23','1','Saturday'),(2,'Republic Day','26-01-23','January','Thursday'),(3,'Maha Shivaratri','18-02-23','February','Saturday'),(4,'Holi','08-03-23','3','Wednesday'),(5,'Independence Day','15-08-23','August','Tuesday'),(6,'Raksha Bandhan (Rakhi)','30-08-23','August','Wednesday'),(7,'Janmashtami (Vaishnav)','06-09-23','September','Wednesday'),(8,'Ganesh Chaturthi','19-09-23','September','Tuesday'),(9,'Gandhi Jayanti','02-10-23','October','Monday'),(10,'Dussehra','24-10-23','October','Tuesday'),(11,'Diwali','12-11-23','November','Sunday'),(12,'Govardhan Puja','13-11-23','November','Monday'),(13,'Bhai Dooj','14-11-23','November','Tuesday'),(14,'Christmas','25-12-23','December','Monday'),(15,'Good Friday','06-04-23','4','Friday');
/*!40000 ALTER TABLE `holidays` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=184 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reference_master`
--

LOCK TABLES `reference_master` WRITE;
/*!40000 ALTER TABLE `reference_master` DISABLE KEYS */;
INSERT INTO `reference_master` VALUES (88,45,'roger','1343409320','xyz',46),(89,45,'om','23423432234234','23234234',46),(144,73,'roger','1343409320','relaii',19),(145,73,'ramu','3423342343','234234',19),(146,74,'roger','1343409320','relaii',19),(147,74,'ramu','3423342343','234234',19),(148,75,'roger','1343409320','relaii',19),(149,75,'ramu','3423342343','234234',19),(180,91,'','','',74),(181,91,'','','',74),(182,92,'roger','1343409320','relaii',19),(183,92,'ramu','3423342343','234234',19);
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
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (19,'roy','roy@gmail.com','$2b$10$GyotdzI5D0x666zZx2KJWO1RfTDe6F7MsvB7IUGj4jjPyEITVJ8B6','0','0'),(41,'kano','kano@gmail.com','$2b$10$yjHV3vzOYIgTpdwVGX87qerAAJTj6sD35WqOq9NXr1XsxfTiJjvFe','0','1'),(45,'roman','roman@gmail.com','$2b$10$WPcBg.MRMhmT8Wx6Ia7ZLuedcw3W1d6Jb7SNaf9ndT3dX/Qw7izvK','0','0'),(46,'harsh','harsh@gmail.com','$2b$10$rkq2GwNDNFOEesiremSuXuROTbVnsNRiR.i84lxPAqEzGXeD3Gpj2','0','1'),(73,'sanjay','sanjayparmar1650@gmail.com','$2b$10$5QuWI/DYjb911qGKGJM2sOicVW3L9TbdVx1ulf7PD5Kbw/zQY1HGG','0','0'),(74,'jay','jay.thesia.23@gmail.com','$2b$10$.wjJA0RoMYmwGSlARqEo9eTvU/SK.wKmhlAtCMdFjf.xOwyY6OkAe','0','0'),(75,'jay','joshi@gmail.com','$2b$10$dv7LU/7ExLFXYatOPjbGye.LiRGRHfPQDlc1ZAlePsFugE33g6yQC','1','1'),(76,'jay','joshi123@gmail.com','$2b$10$pPrtfwqrc3PcaRcxffRNIO3xKAiQBYiH.2Q5kZ3CLvbgzddsPfWlO','1','1'),(77,'jay','jay@mailinator.com','$2b$10$yrlAg4gUaQ226PkUl06J8.F/kgMAvYZ4kSbBLI3143K1muyrSIEDC','0','1'),(78,'jay','xy@mailinator.com','$2b$10$Ykanr0JlavGTOABuL2OSf.dfGbhutc5I0F4.SmVlMayiriZbgSC6S','0','1');
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
  `leave_category` varchar(10) NOT NULL,
  `leave_status` varchar(45) NOT NULL DEFAULT 'unapproved',
  `request_date` varchar(45) NOT NULL,
  `leave_date` varchar(45) NOT NULL,
  `leave_reason` varchar(500) NOT NULL,
  `used_status` varchar(45) NOT NULL DEFAULT 'unused',
  `iscancel` int DEFAULT '1',
  `reg_id` int DEFAULT NULL,
  PRIMARY KEY (`request_id`),
  KEY `fk_request_leave_table_2_idx` (`reg_id`),
  CONSTRAINT `fk_request_leave_table_2` FOREIGN KEY (`reg_id`) REFERENCES `registration` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request_leave_table`
--

LOCK TABLES `request_leave_table` WRITE;
/*!40000 ALTER TABLE `request_leave_table` DISABLE KEYS */;
INSERT INTO `request_leave_table` VALUES (1,'SL ','Approved','2023-03-29 ','2023-01-01','qaz','unused',0,19),(2,'PL ','Approved','2023-03-29 ','2023-03-03','qaz','unused',0,19),(3,'UPL','Approved','2023-03-29 ','2023-03-25','go test','unused',0,19),(4,'CL ','unapproved','2023-03-29 ','2023-03-09','dsf','unused',0,19),(5,'CL ','unapproved','2023-03-29 ','2023-03-10','','unused',0,19),(6,'CL ','Approved','2023-03-29 ','2023-03-04','qaz','unused',0,19),(7,'CL ','unapproved','2023-03-29 ','2023-01-01','dsfsf','unused',0,19),(8,'SL','Approved','2023-04-10 ','2023-04-04','','unused',1,64),(9,'CL ','Approved','2023-04-10 ','2023-04-12','cvsdf','unused',0,64),(11,'CL','Approved','2023-04-10 ','2023-04-13','','unused',1,64),(12,'PL','unapproved','2023-04-11 ','2023-04-03','ppppp','unused',0,64),(13,'','unapproved','2023-04-11 ','2023-04-27','zzz','unused',0,64),(14,'CL','Approved','2023-04-11 ','2023-04-29','','unused',0,64),(15,'SL ','unapproved','2023-04-11 ','2023-04-28','demo','unused',1,64),(16,'hide ','Approved','2023-04-11 ','','','unused',0,19),(17,'hide ','Approved','2023-04-11 ','','','unused',0,19),(18,'hide ','unapproved','2023-04-11 ','','','unused',0,19),(19,'hide ','unapproved','2023-04-11 ','','','unused',0,19),(20,'hide ','unapproved','2023-04-11 ','','','unused',0,19),(21,'hide ','unapproved','2023-04-11 ','','','unused',0,19),(22,'hide ','unapproved','2023-04-11 ','','','unused',0,19),(23,'hide ','unapproved','2023-04-11 ','','','unused',0,19),(24,'hide ','unapproved','2023-04-11 ','','','unused',0,19),(25,'hide ','unapproved','2023-04-11 ','','','unused',0,19),(26,'hide ','unapproved','2023-04-11 ','','','unused',0,19),(27,'SL ','unapproved','2023-04-11 ','2023-04-13','dwsdsdfgd','unused',0,19),(28,'hide ','unapproved','2023-04-11 ','','','unused',0,19),(29,'CL ','Approved','2023-04-11 ','2023-04-13','qaz','unused',0,19),(30,'hide ','unapproved','2023-04-11 ','','','unused',0,19),(31,'PL ','unapproved','2023-04-13 ','2023-05-07','kjjj','unused',0,19),(32,'SL','Approved','2023-04-13 ','2023-03-23','sfsdsdf','unused',1,19),(33,'SL ','Approved','2023-04-13 ','2023-03-29','qaz','unused',0,19);
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

-- Dump completed on 2023-04-13 12:16:12
