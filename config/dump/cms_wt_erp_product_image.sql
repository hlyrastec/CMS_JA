-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: 127.0.0.1    Database: cms_wt_erp
-- ------------------------------------------------------
-- Server version	5.7.27-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product_image`
--

DROP TABLE IF EXISTS `product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_image` (
  `id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `url` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_image`
--

LOCK TABLES `product_image` WRITE;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` VALUES (7,9,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_923651-MLB31419550329_072019-F.webp'),(8,9,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_711585-MLB31419546367_072019-F.webp'),(9,9,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_683165-MLB31419550311_072019-F.webp'),(10,9,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_670846-MLB31419546375_072019-F.webp'),(11,10,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_961971-MLB31419521997_072019-F.webp'),(12,10,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_689825-MLB31419547689_072019-F.webp'),(13,10,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_715038-MLB31419548664_072019-F.webp'),(14,10,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_871004-MLB31419550144_072019-F.webp'),(15,3,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_772843-MLB31190580458_062019-F.webp'),(16,6,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_772843-MLB31190580458_062019-F.webp'),(17,7,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_772843-MLB31190580458_062019-F.webp'),(18,3,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_996366-MLB31190577905_062019-F.webp'),(19,6,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_996366-MLB31190577905_062019-F.webp'),(20,7,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_996366-MLB31190577905_062019-F.webp'),(21,3,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_988520-MLB31190580180_062019-F.webp'),(22,6,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_988520-MLB31190580180_062019-F.webp'),(23,7,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_988520-MLB31190580180_062019-F.webp'),(24,3,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_928722-MLB31190589109_062019-F.webp'),(25,6,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_928722-MLB31190589109_062019-F.webp'),(26,7,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_928722-MLB31190589109_062019-F.webp'),(27,26,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_818244-MLB31498972733_072019-F.webp'),(28,26,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_986789-MLB31498988535_072019-F.webp'),(29,39,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_994834-MLB31637343115_072019-F.webp'),(30,39,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_880382-MLB31637343617_072019-F.webp'),(31,52,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_968416-MLB31498980211_072019-F.webp'),(32,52,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_676363-MLB31498978737_072019-F.webp'),(36,27,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_914251-MLB31499264300_072019-F.webp'),(37,27,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_893776-MLB31499243475_072019-F.webp'),(38,27,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_944210-MLB31499259856_072019-F.webp'),(39,40,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_647582-MLB31637418984_072019-O.webp'),(40,40,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_922406-MLB31637438834_072019-F.webp'),(41,53,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_844052-MLB31499287530_072019-O.webp'),(42,53,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_920649-MLB31499267855_072019-F.webp'),(43,53,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_626313-MLB31499290505_072019-F.webp'),(46,28,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_686256-MLB31499295947_072019-F.webp'),(47,28,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_929677-MLB31499325059_072019-F.webp'),(48,28,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_725307-MLB31499330511_072019-F.webp'),(49,41,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_638411-MLB31637475175_072019-F.webp'),(50,41,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_827291-MLB31637491050_072019-F.webp'),(51,54,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_913216-MLB31499309648_072019-F.webp'),(52,54,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_664313-MLB31499300808_072019-F.webp'),(53,54,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_949365-MLB31499307181_072019-O.webp'),(54,30,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_757661-MLB31489198431_072019-F.webp'),(55,30,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_635423-MLB31489210626_072019-F.webp'),(56,30,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_968130-MLB31489209645_072019-F.webp'),(57,30,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_946645-MLB31489194828_072019-F.webp'),(58,56,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_992259-MLB31489216682_072019-F.webp'),(59,56,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_867231-MLB31489228091_072019-F.webp'),(60,56,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_956261-MLB31489198491_072019-F.webp'),(61,43,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_944890-MLB31489198379_072019-F.webp'),(65,59,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_938060-MLB31498783777_072019-F.webp'),(66,59,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_887875-MLB31498792678_072019-F.webp'),(67,59,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_712652-MLB31498763885_072019-F.webp'),(68,33,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_991989-MLB31498767755_072019-F.webp'),(69,33,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_606526-MLB31498763787_072019-F.webp'),(70,33,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_961302-MLB31498789118_072019-F.webp'),(71,46,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_855674-MLB31637386042_072019-O.webp'),(72,36,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_614333-MLB31188151337_062019-F.webp'),(73,37,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_614333-MLB31188151337_062019-F.webp'),(74,36,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_637125-MLB31188157169_062019-F.webp'),(75,37,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_637125-MLB31188157169_062019-F.webp'),(76,36,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_630382-MLB31188161413_062019-F.webp'),(77,37,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_630382-MLB31188161413_062019-F.webp'),(78,62,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_740157-MLB31116893591_062019-O.webp'),(83,63,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_740157-MLB31116893591_062019-F.webp'),(84,62,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_699296-MLB31116881470_062019-F.webp'),(85,63,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_699296-MLB31116881470_062019-F.webp'),(86,62,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_938859-MLB31116882843_062019-F.webp'),(87,63,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_938859-MLB31116882843_062019-F.webp'),(88,49,'https://http2.mlstatic.com/coldre-universal-modular-verde-ja-rio-militar-D_NQ_NP_891206-MLB31637493260_072019-F.webp'),(89,50,'https://http2.mlstatic.com/coldre-universal-modular-verde-ja-rio-militar-D_NQ_NP_891206-MLB31637493260_072019-F.webp'),(90,49,'https://http2.mlstatic.com/coldre-universal-modular-verde-ja-rio-militar-D_NQ_NP_910947-MLB31637511578_072019-F.webp'),(91,50,'https://http2.mlstatic.com/coldre-universal-modular-verde-ja-rio-militar-D_NQ_NP_910947-MLB31637511578_072019-F.webp'),(92,38,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_656091-MLB31498880362_072019-F.webp'),(93,38,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_699347-MLB31498880360_072019-F.webp'),(95,64,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_812664-MLB31498880408_072019-F.webp'),(96,64,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_911695-MLB31498887753_072019-F.webp'),(97,51,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_753711-MLB31637402319_072019-F.webp'),(99,83,'https://http2.mlstatic.com/bandoleira-operacional-1-ponto-ja-rio-militar-D_NQ_NP_784857-MLB31117454275_062019-F.webp'),(100,65,'https://i.imgur.com/PElazsL.jpg'),(101,66,'https://i.imgur.com/PElazsL.jpg'),(102,67,'https://i.imgur.com/L6aF3oN.jpg'),(103,68,'https://i.imgur.com/L6aF3oN.jpg'),(104,69,'https://i.imgur.com/1khKOSI.jpg'),(105,70,'https://i.imgur.com/1khKOSI.jpg'),(107,77,'https://i.imgur.com/ggH6qMa.jpg'),(108,77,'https://i.imgur.com/cRSdJ3E.jpg'),(110,17,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_860142-MLB31552975657_072019-O.webp'),(111,18,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_860142-MLB31552975657_072019-O.webp'),(113,25,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_860142-MLB31552975657_072019-O.webp'),(114,25,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_667436-MLB31552963755_072019-F.webp'),(115,25,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_891795-MLB31552950470_072019-O.webp'),(117,25,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_679317-MLB31552953402_072019-F.webp'),(119,17,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_667436-MLB31552963755_072019-F.webp'),(120,18,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_667436-MLB31552963755_072019-F.webp'),(121,17,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_891795-MLB31552950470_072019-O.webp'),(122,18,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_891795-MLB31552950470_072019-O.webp'),(123,17,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_679317-MLB31552953402_072019-F.webp'),(124,18,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_679317-MLB31552953402_072019-F.webp');
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-13 17:52:47
