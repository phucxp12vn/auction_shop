-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: auction_shop
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auctions`
--

DROP TABLE IF EXISTS `auctions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auctions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_bid` bigint(20) NOT NULL,
  `last_bid` bigint(20) NOT NULL,
  `bidAmount` bigint(20) NOT NULL,
  `timeStart` datetime NOT NULL,
  `timeEnd` datetime NOT NULL,
  `seller` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `winner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` smallint(6) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auctions`
--

LOCK TABLES `auctions` WRITE;
/*!40000 ALTER TABLE `auctions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auctions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2016_06_01_000001_create_oauth_auth_codes_table',1),(4,'2016_06_01_000002_create_oauth_access_tokens_table',1),(5,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),(6,'2016_06_01_000004_create_oauth_clients_table',1),(7,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),(8,'2019_08_19_000000_create_failed_jobs_table',1),(9,'2019_11_17_084537_create_products_table',2),(10,'2014_10_13_000000_create_users_table',3),(11,'2014_10_14_000000_create_users_table',4),(12,'2019_11_21_123017_create_auctions_table',4),(13,'2019_11_21_123705_create_products_table',4),(14,'2019_11_22_123017_create_auctions_table',5);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
INSERT INTO `oauth_access_tokens` VALUES ('0299955915348ee8d3cb81208c2533bd8200e8a2d2e7e8ee053ff76e76095410436f5a6b8d281bf3',1,1,'Personal Access Token','[]',0,'2019-10-20 00:29:46','2019-10-20 00:29:46','2019-10-27 07:29:46'),('02d28c554e5feec2668c02dd4d0c826c71f02dc212ce45c3ae6a0e1872cbd487bd16736a421c447f',1,1,'Personal Access Token','[]',0,'2019-11-18 18:39:18','2019-11-18 18:39:18','2020-11-19 01:39:18'),('0b6b475475b1bc20d11a77a8b6c7167e6a1349c3a9e0f1c409a4fd5919af661648ca0ccf9e48598a',1,1,'Personal Access Token','[]',0,'2019-11-18 17:39:06','2019-11-18 17:39:06','2020-11-19 00:39:06'),('0be26ee9aeaf94e8f3ecacf91ac656a3bffc6e5d5ccab03a063b88ffb90981f8ab41cb6105d35b4f',1,1,'Personal Access Token','[]',0,'2019-11-18 06:10:06','2019-11-18 06:10:06','2020-11-18 13:10:06'),('12e442c8d01ec541d4a1753cdd23617529f7a7d52703c391629d52190a9f080bd8268e957292a6c5',1,1,'Personal Access Token','[]',0,'2019-11-17 01:59:01','2019-11-17 01:59:01','2019-11-24 08:59:02'),('2093223379adc7f8e1d79bd5253645dfea251a3c62ca9b392515076c41ab58efddb27341d0b7576c',1,1,'Personal Access Token','[]',0,'2019-10-20 00:43:38','2019-10-20 00:43:38','2019-10-27 07:43:38'),('213bce61f7601acb5d0707c256d412cdf70879be00c220d48c4f42226f5712366e820f564471b1d8',1,1,'Personal Access Token','[]',1,'2019-10-19 19:43:15','2019-10-19 19:43:15','2019-10-27 02:43:15'),('244a272e3f1f50c41c01c457a4be7137cf92ab73ba8473ea45be8c9572c535a26ad80b765e98368c',1,1,'Personal Access Token','[]',0,'2019-10-20 00:24:27','2019-10-20 00:24:27','2019-10-27 07:24:27'),('27301ccf873993efde4432181ce901814ff40f56c735fcedc6c7606e1e72e0c346220dcb141e0f42',1,1,'Personal Access Token','[]',0,'2019-11-18 05:54:01','2019-11-18 05:54:01','2019-11-25 12:54:01'),('288b92c89fd81ba386c4ec6daa62915caee00afdbb31ac1d426904712451dc88e40d0929597a7b53',1,1,'Personal Access Token','[]',0,'2019-11-18 18:42:12','2019-11-18 18:42:12','2020-11-19 01:42:12'),('2be7c58991071c873c199d57e32e01d39f82b441b7c2296f6ca0869446d13b598f64b774bb1b9db8',1,1,'Personal Access Token','[]',0,'2019-11-18 17:53:33','2019-11-18 17:53:33','2020-11-19 00:53:33'),('2c723c9150f5f940cf0d46b056b5e9f1a92fce77ec9c3ca1896f3e9d87ce318dfc952ad01e37a2ec',1,1,'Personal Access Token','[]',0,'2019-10-20 00:50:48','2019-10-20 00:50:48','2019-10-27 07:50:48'),('2d25f388869244fdab9b7bab06a1288e4c5b5e2445f6a340146cf18198a6bef475541eec3375ca0e',1,1,'Personal Access Token','[]',0,'2019-10-20 00:46:46','2019-10-20 00:46:46','2019-10-27 07:46:46'),('2fbb6dbc7cbc8bda9e3dd08a2081762cacbb6b897cc323404a426fcb5d4b690c0e95e091b7d405f8',1,1,'Personal Access Token','[]',0,'2019-10-20 00:51:42','2019-10-20 00:51:42','2019-10-27 07:51:43'),('34ece4c86b1beb35a65c0a0d54c726a0acbd74cfb4f0a4ed60a34557251c61be0be847c76bc115d6',1,1,'Personal Access Token','[]',0,'2019-10-20 00:43:29','2019-10-20 00:43:29','2019-10-27 07:43:29'),('3cc63101ed876b2f0721bc4a42c1b11335aec1fb559c05a14b2ff8212211bdb5f6aed2e2ef4659c7',1,1,'Personal Access Token','[]',0,'2019-10-20 00:42:56','2019-10-20 00:42:56','2019-10-27 07:42:56'),('40305efeee862fe134656f1bd620656821461efc87741e26d955f5a582de0d4ec128586680cbe56b',1,1,'Personal Access Token','[]',0,'2019-11-18 17:59:39','2019-11-18 17:59:39','2020-11-19 00:59:39'),('4073a91d1208ccaec06359929092ba56eaa310827aa67d120251b54ed46650b6d36f48fa4db3eef8',1,1,'Personal Access Token','[]',0,'2019-10-20 00:47:00','2019-10-20 00:47:00','2019-10-27 07:47:00'),('42e6c7aaf195bd73e366dcbc2643d4aa7b15b8dd3ad056a1a9beddda1e08d7ba037eb22072553f5e',1,1,'Personal Access Token','[]',0,'2019-11-21 06:04:35','2019-11-21 06:04:35','2020-11-21 13:04:35'),('4f3a1af5967daf6df96dd8bab372e4ad0b6390ef76b41c11c523a78fe88f2daf0ed3c1a4cd49fb3f',1,1,'Personal Access Token','[]',0,'2019-10-20 00:29:44','2019-10-20 00:29:44','2019-10-27 07:29:44'),('4f93c7e3ebd84764bef16d5398a073809dda9ef0695b91382778c7fcab533e26448bc3b32ff39582',1,1,'Personal Access Token','[]',0,'2019-11-18 18:08:56','2019-11-18 18:08:56','2020-11-19 01:08:56'),('5834329af27244bdb51e71666b6cf4df5c6fa18ff96101d1eb4e84d6aee64145d03f81954c085a2e',1,1,'Personal Access Token','[]',0,'2019-10-20 00:47:52','2019-10-20 00:47:52','2019-10-27 07:47:52'),('595138c38ae2aac7b945f3bc79854b4c2e0af842fb6f5e1194ccbac5f46aac9b8082ffa9008e63ca',1,1,'Personal Access Token','[]',0,'2019-11-20 05:29:25','2019-11-20 05:29:25','2020-11-20 12:29:25'),('5c75c7c57adff1c9b104dea864cb763f812f7f47aa48f9e77ac8579d971bda28af9c4bcb2b579982',1,1,'Personal Access Token','[]',0,'2019-10-20 00:46:47','2019-10-20 00:46:47','2019-10-27 07:46:47'),('67c9395f896ab3ea6e04cc4f58580faee94c22ea2d3de481506b7f7b3935c463dfa83a91ce97eed8',1,1,'Personal Access Token','[]',0,'2019-10-20 00:29:44','2019-10-20 00:29:44','2019-10-27 07:29:45'),('6b6407a1f290ea8018d3c7d8c72db4e145e1dc8e0bb716d8b574c6be10b449de9d5a90c594abe5c2',1,1,'Personal Access Token','[]',0,'2019-10-20 00:51:17','2019-10-20 00:51:17','2019-10-27 07:51:17'),('6dba3b03fc565235ee85ef1c5491b0cccb67159e010533a0481c120035d629ffbb9aa6d791480090',1,1,'Personal Access Token','[]',0,'2019-10-20 00:24:25','2019-10-20 00:24:25','2019-10-27 07:24:26'),('7af5985ec4568db65dca23c052bc2ddecd7bb285c81aab9982d2bbe9c913c3f347dc6ea67ff37de3',1,1,'Personal Access Token','[]',0,'2019-11-18 06:06:50','2019-11-18 06:06:50','2020-11-18 13:06:50'),('88ee65a6e2eb09833592b9d5fd2d5fadcc3c2f02e7bafb4e7f9c485f9c5b9d2c2ddbb9a4b6e25deb',1,1,'Personal Access Token','[]',0,'2019-10-20 00:29:47','2019-10-20 00:29:47','2019-10-27 07:29:47'),('9135f82bae40a31a004d1f127dc98b7b750205e3ce3eec59581427b3b49f437ad43d1e900571cb17',1,1,'Personal Access Token','[]',0,'2019-11-20 05:28:52','2019-11-20 05:28:52','2020-11-20 12:28:52'),('935ca946a761d98df2c73bf66f08e1491c2d3a386b1e2333f1fd653365f4a160afd2bc5b452658b7',1,1,'Personal Access Token','[]',0,'2019-11-18 05:53:44','2019-11-18 05:53:44','2019-11-25 12:53:44'),('956fbcd978df51b9bb3ea601d00ed909b16ba78a34d6bfbdf7bb820baf6ad4e033466fa41848a22a',1,1,'Personal Access Token','[]',0,'2019-11-18 18:06:23','2019-11-18 18:06:23','2020-11-19 01:06:23'),('97c10a8c63619f3e5b19cc942d48ad3255f46716ec438c4e7716860e866499410c2592594264b440',1,1,'Personal Access Token','[]',0,'2019-10-20 00:46:46','2019-10-20 00:46:46','2019-10-27 07:46:46'),('999fba5a921000f58a5668527d6a35845d898bfb6eca8032dca978e39e488d0ff49ded9d69f4e9fd',1,1,'Personal Access Token','[]',0,'2019-10-20 00:41:22','2019-10-20 00:41:22','2019-10-27 07:41:22'),('9bd8aa285cc9f900a799373ced02b0b7ac75ab58cc55f26b6c104f393702ceec42cf3d2d4a621f6a',1,1,'Personal Access Token','[]',0,'2019-11-18 18:08:11','2019-11-18 18:08:11','2020-11-19 01:08:11'),('a66c9cce6619092beba136d17c7c5e8b5e8177b6126e900ed1f89c7077a48a9ac804c718ac1e30f6',1,1,'Personal Access Token','[]',0,'2019-11-18 06:06:42','2019-11-18 06:06:42','2020-11-18 13:06:42'),('acefd902fc1c1d275eaf9de363d10c28c89ec1a94a33eeb4bdc43c150bcaa62938baa8d2976c7a02',1,1,'Personal Access Token','[]',0,'2019-10-20 00:44:16','2019-10-20 00:44:16','2019-10-27 07:44:16'),('b151c37a3335c8de5a267e5ac9d8e2abae302a6412fc08e5ec77f41dfce883e5b455c5ae2145db6b',1,1,'Personal Access Token','[]',0,'2019-10-20 00:29:41','2019-10-20 00:29:41','2019-10-27 07:29:42'),('b2b0afe1505f356878095a4bcfbbb2cec775ddcd1670fb56ee6f609fbcb12383f1212327944f0421',1,1,'Personal Access Token','[]',0,'2019-10-20 00:46:44','2019-10-20 00:46:44','2019-10-27 07:46:45'),('b4ec7b0004e3c8e5b435f331f8a4906ecac5f459eb939a275bea211e6a9514c497ef122c3bb5bc4f',1,1,'Personal Access Token','[]',0,'2019-11-18 18:08:09','2019-11-18 18:08:09','2020-11-19 01:08:09'),('b9a17d1f01f7ae7e01fc23312ef058c725f1c93adcb289f68cc52190feb9eb0eefc2db180c0bdd54',1,1,'Personal Access Token','[]',0,'2019-10-20 00:42:10','2019-10-20 00:42:10','2019-10-27 07:42:11'),('bf5eac1b842e14396cc87daa820326f1ca590b0191db0163a32ec4f4a77dcf1905c98cf5caf9d2a5',1,1,'Personal Access Token','[]',0,'2019-11-20 05:30:05','2019-11-20 05:30:05','2020-11-20 12:30:05'),('c6ce6c270e09e663011453df2708eab8c56a1a26e41929aeea6949e976ac32ba696eb5b658312f1d',1,1,'Personal Access Token','[]',0,'2019-11-18 18:06:32','2019-11-18 18:06:32','2020-11-19 01:06:32'),('c8222e366a6a9913f26192114a029305ec3e2b1a9901bf56801b424e795332d4e56514282c2b3fea',1,1,'Personal Access Token','[]',0,'2019-10-20 00:41:38','2019-10-20 00:41:38','2019-10-27 07:41:38'),('cac78e65eb1dafc9267a01141ef43077f315e3e70d6cda3ee523f26b247782630a35ca1826c67d3c',1,1,'Personal Access Token','[]',0,'2019-10-20 00:46:47','2019-10-20 00:46:47','2019-10-27 07:46:47'),('d209320686f31a61f88e1ae2c375c9c2fa40efb1ab9fe5eb671b55da6bf2989fe1711e64ad57a530',1,1,'Personal Access Token','[]',0,'2019-10-20 00:29:42','2019-10-20 00:29:42','2019-10-27 07:29:42'),('df4f0ca5aa357f5a034267e973cb542e8cd44bde84764ada8596a0cb86a248525ae5ec8eab05b851',1,1,'Personal Access Token','[]',1,'2019-10-19 19:47:33','2019-10-19 19:47:33','2019-10-27 02:47:33'),('e4ecb4a8f3d0169effdb1651595049b872cb5ed51046b586fd6307f89ea48b7054c9e20130d4448d',1,1,'Personal Access Token','[]',0,'2019-11-21 05:26:42','2019-11-21 05:26:42','2020-11-21 12:26:42'),('eda791c2fa3a12c38c216d64275289345b18245ffe2ce8c4d88a920a60d38762f292f2baef8314e1',1,1,'Personal Access Token','[]',0,'2019-11-18 05:54:03','2019-11-18 05:54:03','2019-11-25 12:54:03'),('f1628ae7deb6560abd605b4c09201824beb5b6f59bb0c9e9a8201e45baa1bf14003f68133125ed83',1,1,'Personal Access Token','[]',0,'2019-10-20 00:29:40','2019-10-20 00:29:40','2019-10-27 07:29:40'),('fc9e361472d2af371e92340ee8198608090e54721f4af148a70803084ca0cf8f8099054e15df2604',1,1,'Personal Access Token','[]',0,'2019-10-20 00:29:43','2019-10-20 00:29:43','2019-10-27 07:29:43');
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_auth_codes`
--

LOCK TABLES `oauth_auth_codes` WRITE;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` VALUES (1,NULL,'auction_shop Personal Access Client','kKPxdQ4BgONc6jzwNztINY0J4gC1F3eLKnLz2v82','http://localhost',1,0,0,'2019-10-19 19:43:07','2019-10-19 19:43:07'),(2,NULL,'auction_shop Password Grant Client','ZA1eiEIVf2UWwWtQeh95ziElHsYGQPyGvARnQ33S','http://localhost',0,1,0,'2019-10-19 19:43:07','2019-10-19 19:43:07');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` VALUES (1,1,'2019-10-19 19:43:07','2019-10-19 19:43:07');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_refresh_tokens`
--

LOCK TABLES `oauth_refresh_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `auction_id` bigint(20) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pictuer` blob NOT NULL,
  `price` bigint(20) NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` smallint(6) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneNumber` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `power` smallint(6) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user1@gmail.com','$2y$10$2If6PaSOs4VirDsdjaFcue9AqB7HNW0ugoWgIzBFIIVy4Un9pdIgi','User1','\"10/11 ABC\"','123456789',1,NULL,'2019-11-21 06:04:03','2019-11-21 06:04:03');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-21 20:25:04
