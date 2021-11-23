-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: clients
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `cidades`
--

DROP TABLE IF EXISTS `cidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cidades` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `estado_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `estado_id` (`estado_id`),
  CONSTRAINT `cidades_ibfk_1` FOREIGN KEY (`estado_id`) REFERENCES `estados` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cidades`
--

LOCK TABLES `cidades` WRITE;
/*!40000 ALTER TABLE `cidades` DISABLE KEYS */;
INSERT INTO `cidades` VALUES (1,'João Pessoa',2),(2,'Campina Grande',2),(3,'Patos',2),(4,'Recife',3),(5,'Jaboatão dos Guararapes',3),(6,'Olinda',3),(7,'Natal',4),(8,'Mossoró',4),(9,'Caicó',4),(10,'Salvador',1),(11,'Feira de Santana',1),(12,'Paulo Afonso',1);
/*!40000 ALTER TABLE `cidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `cidade` varchar(100) NOT NULL,
  `hobbie` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=182 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (158,'Danilo Herculano Nóbrega','didoherculano@gmail.com','Pernambuco','Jaboatão dos Guararapes','Arte, Esporte, Instrumento'),(165,'Thais sales','thaissales@hotmail.com','Paraíba','Campina Grande','Arte, Esporte'),(166,'Manuela','manuela@gmail.com','Pernambuco','Olinda','Arte, Esporte, Instrumento'),(167,'Aline','alines@hotmail.com','Bahia','Paulo Afonso','Instrumento'),(168,'Catarina','catarina@gmail.com','Paraíba','João Pessoa',''),(169,'Angelina','angelina@gmail.com','Paraíba','Patos','Instrumento'),(170,'Thiagos','thiago@hotmail.com','Rio Grande do Norte','Caicó','Arte, Esporte'),(171,'Benjamim','benjamim@hotmail.com','Bahia','Feira de Santana','Arte, Instrumento'),(172,'Leandro','leandro@gmail.com','Pernambuco','Jaboatão dos Guararapes','Arte, Esporte, Instrumento'),(173,'Milene','milene@hotmail.com','Paraíba','João Pessoa','Arte'),(174,'Manuela','manuelas@gmail.com','Paraíba','Campina Grande','Arte, Esporte, Instrumento'),(175,'Aline','aliness@hotmail.com','Paraíba','Campina Grande','Instrumento'),(176,'Catarina','catarinas@gmail.com','Paraíba','Campina Grande',''),(177,'Angelina','angelinas@gmail.com','Paraíba','Campina Grande','Instrumento'),(178,'Thiagos','thiagos@hotmail.com','Paraíba','Campina Grande','Arte, Esporte'),(179,'Benjamim','benjamims@hotmail.com','Paraíba','Campina Grande','Arte, Instrumento'),(180,'Leandro','leandros@gmail.com','Paraíba','Campina Grande','Arte, Esporte, Instrumento'),(181,'Milene','milenes@hotmail.com','Paraíba','Campina Grande','Arte');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados`
--

DROP TABLE IF EXISTS `estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estados` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados`
--

LOCK TABLES `estados` WRITE;
/*!40000 ALTER TABLE `estados` DISABLE KEYS */;
INSERT INTO `estados` VALUES (1,'Bahia'),(2,'Paraíba'),(3,'Pernambuco'),(4,'Rio Grande do Norte');
/*!40000 ALTER TABLE `estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'clients'
--

--
-- Dumping routines for database 'clients'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-23 15:09:27
