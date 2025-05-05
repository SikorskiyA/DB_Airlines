-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: dbairlines
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `routes`
--

DROP TABLE IF EXISTS `routes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `routes` (
  `STRcity` varchar(50) DEFAULT NULL,
  `ARRcity` varchar(50) DEFAULT NULL,
  `STRtime` datetime DEFAULT NULL,
  `ARRtime` datetime DEFAULT NULL,
  `seats` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `routeid` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`routeid`),
  KEY `STRcity` (`STRcity`),
  KEY `ARRcity` (`ARRcity`),
  CONSTRAINT `routes_ibfk_1` FOREIGN KEY (`STRcity`) REFERENCES `cities` (`city`),
  CONSTRAINT `routes_ibfk_2` FOREIGN KEY (`ARRcity`) REFERENCES `cities` (`city`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `routes`
--

LOCK TABLES `routes` WRITE;
/*!40000 ALTER TABLE `routes` DISABLE KEYS */;
INSERT INTO `routes` VALUES ('Moscow','Saint Petersburg','2024-12-25 07:00:00','2024-12-25 08:35:00',97,4859,1),('Naberezhnye Chelny','Nha Trang','2024-12-17 16:25:00','2024-12-19 09:55:00',100,46823,2),('Moscow','Saint Petersburg','2024-12-25 09:25:00','2024-12-25 11:05:00',100,5360,3),('Naberezhnye Chelny','Nha Trang','2024-12-23 00:00:00','2024-12-27 00:00:00',99,9000,9),('Beijing','Naberezhnye Chelny','2024-12-07 00:00:00','2024-12-08 00:00:00',7,20000,10),('Naberezhnye Chelny','Moscow','2024-12-20 08:00:00','2024-12-20 10:00:00',99,3000,11),('Beijing','Berlin','2025-04-15 00:00:00','2025-04-16 00:00:00',1,10000,12),('Berlin','Da Nang','2025-04-15 00:00:00','2025-04-16 00:00:00',9,4,13),('Beijing','Frankfurt','2025-04-15 00:00:00','2025-04-16 00:00:00',0,5,14);
/*!40000 ALTER TABLE `routes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-05 16:07:31
