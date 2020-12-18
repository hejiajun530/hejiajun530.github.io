-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: people
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alike`
--

DROP TABLE IF EXISTS `alike`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alike` (
  `alikeid` int NOT NULL AUTO_INCREMENT,
  `articleid` int NOT NULL,
  `userid` int NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`alikeid`),
  KEY `fk_article_id` (`articleid`),
  KEY `fk_user_id` (`userid`),
  CONSTRAINT `fk_article_id` FOREIGN KEY (`articleid`) REFERENCES `article` (`articleid`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alike`
--

LOCK TABLES `alike` WRITE;
/*!40000 ALTER TABLE `alike` DISABLE KEYS */;
INSERT INTO `alike` VALUES (21,9,2,1),(26,10,2,1),(28,9,1,1),(36,8,1,1),(37,10,1,1),(39,14,1,1),(40,15,1,1),(41,3,1,1);
/*!40000 ALTER TABLE `alike` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `articleid` int NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `category` varchar(50) NOT NULL,
  `tag` varchar(150) NOT NULL,
  `cover` varchar(150) DEFAULT NULL,
  `content` varchar(225) NOT NULL,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `userid` int NOT NULL COMMENT '用户表id',
  `count` int DEFAULT NULL COMMENT '浏览记录',
  PRIMARY KEY (`articleid`),
  KEY `FK_ID` (`userid`),
  CONSTRAINT `FK_ID` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (2,'天机哦','过往故事','css,html,js','http://localhost:3000/upload/u=3189633409,3445782273&fm=26&gp=0.jpg','<p>是豆腐干大概是的繁华过后快快乐乐高房价法国红酒法国红酒风格和</p>','2020-11-20 10:45:22','2020-11-27 16:45:20',1,2),(3,'复活节','过往故事','html','http://localhost:3000/upload/微信截图_20201106135201.png','<p>而法国风格化的功夫</p>','2020-11-20 11:50:19','2020-11-21 16:14:35',1,6),(4,'哦i看','技术分享','js','http://localhost:3000/upload/u=269167107,2268795817&fm=26&gp=0.jpg','<p>法国海军规范化</p>','2020-11-20 11:54:53','2020-11-23 17:04:14',1,5),(5,'234法撒旦激发路上的风景哦啊史蒂夫纳什的请问如果发生的分隔符好地方好地方光和热啊大概豆腐干豆腐干','story','css','http://localhost:3000/upload/u=4018704012,1354106016&fm=26&gp=0.jpg','<p>124呃特殊的身份规划</p>','2020-11-20 12:35:48','2020-11-27 17:07:34',1,17),(8,'测试12321','技术分享','css,js','http://localhost:3000/upload/u=1671699747,2671618447&fm=26&gp=0.jpg','<p>阿斯顿噶豆腐干岁的法国发的辉煌科技咯哈归还借款归还借款归还借款豆腐干岁的法国士大夫活动分工和法定规划速度放缓的符合法规和士大夫敢死队敢死队，，阿法狗撒大噶的反感的是法国撒旦发射点发射点发顺丰。啊，，啊发射点发射点发生发生德国法国韩国海军重点发感地方官大使馆大师傅噶地方官员他是豆腐干豆腐干大发噶的人同意通过建筑消防规范啊发射点反对告诉对方法国岁的法国发生的。</p>','2020-11-20 16:41:54','2020-12-03 13:48:53',1,11),(9,'辅导课看','技术分享','js,css','http://localhost:3000/upload/u=423361249,1946332229&fm=26&gp=0 - 副本.jpg','<p>阿迪斯发士大夫</p>','2020-11-21 15:52:26','2020-11-29 17:34:46',1,46),(10,'hjj测试','过往故事','html','http://localhost:3000/upload/u=4018704012,1354106016&fm=26&gp=0.jpg','<p class=\"ql-align-center\"><img src=\"http://localhost:3000/upload/u=4007750337,462381491&amp;fm=26&amp;gp=0.jpg\"></p><p>图片，好看的图片</p>','2020-11-21 16:26:59','2020-11-30 17:44:41',2,113),(13,'0','0','0',NULL,'0','2020-11-23 14:08:15','2020-11-27 11:32:50',3,1),(14,'天天','过往故事','css,html','http://localhost:3000/upload/u=2531934815,3455764361&fm=26&gp=0.jpg','<p>但是士大夫撒旦</p>','2019-11-27 13:36:14','2020-11-27 16:44:41',1,6),(15,'uu','技术分享','css','http://localhost:3000/upload/u=4018704012,1354106016&fm=26&gp=0.jpg','<p>法国海军的法国</p>','2021-11-27 13:36:52','2020-12-03 16:22:54',1,21);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clike`
--

DROP TABLE IF EXISTS `clike`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clike` (
  `clikeid` int NOT NULL AUTO_INCREMENT,
  `commentid` int NOT NULL,
  `userid` int NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`clikeid`),
  KEY `fkarticleid` (`commentid`),
  KEY `fkuserid` (`userid`),
  CONSTRAINT `fkarticleid` FOREIGN KEY (`commentid`) REFERENCES `comment` (`commentid`),
  CONSTRAINT `fkuserid` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clike`
--

LOCK TABLES `clike` WRITE;
/*!40000 ALTER TABLE `clike` DISABLE KEYS */;
INSERT INTO `clike` VALUES (1,2,1,1),(3,4,1,1),(4,5,1,1);
/*!40000 ALTER TABLE `clike` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `commentid` int NOT NULL AUTO_INCREMENT,
  `articleid` int NOT NULL,
  `userid` int NOT NULL,
  `comment` varchar(225) NOT NULL,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`commentid`),
  KEY `fk_articleid` (`articleid`),
  KEY `fk_userid` (`userid`),
  CONSTRAINT `fk_articleid` FOREIGN KEY (`articleid`) REFERENCES `article` (`articleid`),
  CONSTRAINT `fk_userid` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (2,13,1,'<p>ceshi</p><img src=\'http://localhost:3000/upload/微信截图_20201106130847.png\'/>','2020-11-23 14:09:03','2020-11-23 14:09:03'),(3,13,1,'<p>test</p>','2020-11-23 14:10:26','2020-11-23 14:10:26'),(4,13,1,'<p>23</p><img class=\'commentimg\' src=\'http://localhost:3000/upload/微信截图_20201106131008.png\'/>','2020-11-23 14:44:31','2020-11-23 14:44:31'),(5,14,1,'<p>666</p>','2020-11-27 16:00:27','2020-11-27 16:00:27'),(6,10,1,'<p>测试·</p>','2020-11-30 17:44:45','2020-11-30 17:44:45');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `music`
--

DROP TABLE IF EXISTS `music`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `music` (
  `music` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `auther` varchar(50) NOT NULL,
  `content` varchar(50) NOT NULL,
  `text` varchar(50) DEFAULT NULL,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`music`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `music`
--

LOCK TABLES `music` WRITE;
/*!40000 ALTER TABLE `music` DISABLE KEYS */;
INSERT INTO `music` VALUES (1,'小情歌','苏打绿','http://localhost:3000/upload/小情歌.m4a','','2020-11-28 15:00:49','2020-11-28 15:00:49'),(2,'桥边姑娘','海伦','http://localhost:3000/upload/桥边姑娘.m4a','http://localhost:3000/upload/11.png','2020-11-29 10:16:16','2020-11-29 10:16:16'),(3,'幻昼','在轩','http://localhost:3000/upload/幻昼.m4a','http://localhost:3000/upload/11.png','2020-11-29 14:02:38','2020-11-29 14:02:38'),(4,'坠入海底','柴三岁','http://localhost:3000/upload/坠入海底.m4a','http://localhost:3000/upload/11.png','2020-11-29 14:03:15','2020-11-29 14:03:15');
/*!40000 ALTER TABLE `music` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `role` varchar(10) DEFAULT NULL,
  `tips` varchar(150) DEFAULT NULL,
  `createTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `avator` varchar(150) DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`userid`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'tz','123456','123456789@qq.com',NULL,'132123555','2020-11-19 11:50:06','2020-12-03 15:58:40','http://localhost:3000/upload/微信截图_20201106130856.png'),(2,'hjj','123456','123456789@126.com',NULL,NULL,'2020-11-21 14:34:56','2020-11-21 14:34:56',NULL),(3,'0','0',NULL,NULL,NULL,'2020-11-23 14:07:13','2020-11-23 14:07:13',NULL),(4,'xw','123456','123455@qq.com',NULL,NULL,'2020-11-30 11:24:03','2020-11-30 11:24:03',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-18 11:19:09
