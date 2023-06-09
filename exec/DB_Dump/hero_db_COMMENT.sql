-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: k8a808.p.ssafy.io    Database: hero_db
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.20.04.2

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
-- Table structure for table `COMMENT`
--

DROP TABLE IF EXISTS `COMMENT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `COMMENT` (
  `COMMENT_ID` int unsigned NOT NULL,
  `COMMENT_CONTENT` varchar(50) DEFAULT NULL,
  `COMMENT_DATE` datetime(6) DEFAULT NULL,
  `BOARD_ID` int unsigned DEFAULT NULL,
  `USER_ID` int unsigned DEFAULT NULL,
  PRIMARY KEY (`COMMENT_ID`),
  KEY `FKfjf1a3xtx8c9nnk9wpxwpyk01` (`BOARD_ID`),
  KEY `FKc4guf2g3mhm8dd6rvogse4wb0` (`USER_ID`),
  CONSTRAINT `FKc4guf2g3mhm8dd6rvogse4wb0` FOREIGN KEY (`USER_ID`) REFERENCES `USER` (`USER_ID`),
  CONSTRAINT `FKfjf1a3xtx8c9nnk9wpxwpyk01` FOREIGN KEY (`BOARD_ID`) REFERENCES `BOARD` (`BOARD_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `COMMENT`
--

LOCK TABLES `COMMENT` WRITE;
/*!40000 ALTER TABLE `COMMENT` DISABLE KEYS */;
INSERT INTO `COMMENT` VALUES (1,'진짜 잘하시네요...','2023-05-10 22:15:15.000000',1,1),(2,'좋아요 누르고 갑니다!','2023-05-03 19:30:15.000000',2,2),(65,'손에 땀을 쥐게 만드는 노래군요','2023-05-11 10:11:40.338042',1,8),(119,'와우','2023-05-11 20:37:12.143556',114,8),(123,'와 정말 멋져요','2023-05-11 20:45:59.090947',113,8),(124,'눈물을 흘렸읍니다;;','2023-05-11 20:47:56.887221',80,8),(128,'zzz','2023-05-12 09:20:01.054687',107,44),(129,'놀랍습니다','2023-05-12 09:43:32.867008',127,8),(133,'asd','2023-05-12 13:22:07.479612',127,4),(157,'아닙니다 충분히 좋습니다 음해하지 마세요','2023-05-12 21:17:29.403629',152,8),(301,'그냥 굶으세요','2023-05-16 12:33:32.026070',291,8),(306,'일단 전 아닌듯;;','2023-05-16 14:07:34.996347',290,8),(373,'kkk','2023-05-16 21:07:19.337014',318,44),(380,'','2023-05-17 08:05:32.028720',308,44),(381,'수정테스트\n','2023-05-17 08:05:50.987405',308,44),(383,'ㅋㅋㅋ','2023-05-17 08:16:06.266056',202,44),(434,'점심을 먹지 마세요; 작곡이 장난으로 보이십니가','2023-05-17 15:58:47.827182',302,8),(483,'정신차리십시오','2023-05-18 02:35:13.315438',302,8),(507,'ㅇㄷ','2023-05-18 14:08:02.128552',11,8),(521,'솔직히\n그냥 취미로만 하시는걸 추천드립니다\n직업으로 삼으면 재미없어져요','2023-05-18 15:43:30.621708',11,8),(522,'꿈깨세요\n세상은 그렇게 쉽게 놀라지 않습니다','2023-05-18 15:49:26.157204',16,8);
/*!40000 ALTER TABLE `COMMENT` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18 19:28:52
