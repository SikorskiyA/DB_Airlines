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
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `STRcity` varchar(50) DEFAULT NULL,
  `ARRcity` varchar(50) DEFAULT NULL,
  `STRtime` datetime DEFAULT NULL,
  `ARRtime` datetime DEFAULT NULL,
  `price` int DEFAULT NULL,
  `clientId` int DEFAULT NULL,
  `routeId` int DEFAULT NULL,
  `purchaseDate` datetime DEFAULT NULL,
  KEY `clientId` (`clientId`),
  CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `clients` (`clientId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES ('Beijing','Berlin','2024-12-23 00:00:00','2024-12-27 00:00:00',10000,1,8,'2024-11-04 17:46:00'),('Naberezhnye Chelny','Nha Trang','2024-12-23 00:00:00','2024-12-27 00:00:00',9000,2,9,'2024-11-04 19:20:00'),('Beijing','Naberezhnye Chelny','2024-12-07 00:00:00','2024-12-08 00:00:00',20000,2,10,'2024-11-05 13:24:00'),('Naberezhnye Chelny','Moscow','2024-12-20 08:00:00','2024-12-20 10:00:00',3000,2,11,'2024-11-05 14:07:00'),('Beijing','Naberezhnye Chelny','2024-12-07 00:00:00','2024-12-08 00:00:00',20000,2,10,'2024-11-05 14:26:00'),('Moscow','Saint Petersburg','2024-12-25 07:00:00','2024-12-25 08:35:00',4859,1,1,'2024-11-20 09:56:00'),('Beijing','Berlin','2025-04-15 00:00:00','2025-04-16 00:00:00',10000,1,12,'2025-03-15 05:10:00'),('Beijing','Frankfurt','2025-04-15 00:00:00','2025-04-16 00:00:00',5,2,14,'2025-03-15 16:26:00'),('Beijing','Frankfurt','2025-04-15 00:00:00','2025-04-16 00:00:00',5,2,14,'2025-03-15 16:26:00'),('Beijing','Frankfurt','2025-04-15 00:00:00','2025-04-16 00:00:00',5,2,14,'2025-03-15 16:26:00'),('Beijing','Frankfurt','2025-04-15 00:00:00','2025-04-16 00:00:00',5,2,14,'2025-03-21 12:58:00');
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
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
