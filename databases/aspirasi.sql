/*
Navicat PGSQL Data Transfer

Source Server         : local
Source Server Version : 90506
Source Host           : localhost:5432
Source Database       : aspirasi_siantar
Source Schema         : public

Target Server Type    : PGSQL
Target Server Version : 90506
File Encoding         : 65001

Date: 2017-05-09 08:15:28
*/


-- ----------------------------
-- Table structure for movie
-- ----------------------------
DROP TABLE IF EXISTS "public"."movie";
CREATE TABLE "public"."movie" (
"id" int4 NOT NULL,
"poster_path" varchar(255) COLLATE "default",
"adult" bool,
"overview" varchar(255) COLLATE "default",
"release_date" varchar COLLATE "default",
"genre_ids" varchar(160) COLLATE "default",
"original_title" varchar(255) COLLATE "default",
"original_language" varchar(255) COLLATE "default",
"title" varchar(255) COLLATE "default",
"backdrop_path" varchar(255) COLLATE "default",
"popularity" float4,
"vote_count" int2,
"video" bool,
"vote_average" float4,
"datecreated" timestamp(6),
"dateupdated" timestamp(6)
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of movie
-- ----------------------------
INSERT INTO "public"."movie" VALUES ('1', 'local', 'f', 'overview', '2017-08-01', '[1,6,9]', 'origial title', 'original lang', 'Movie title', 'path', '2', '1', 't', '1', null, null);
INSERT INTO "public"."movie" VALUES ('2', 'Local', 'f', 'Film Sejarah lutung di jawa', '1979-06-01', null, 'Oroginal', 'lang', 'Lutung Kasarung', null, '4', '7', 'f', '78', null, '2017-04-23 16:51:15.166');
INSERT INTO "public"."movie" VALUES ('3', 'Local', 'f', 'Kerajaan Majaphit History', '1987-01-21', null, null, null, 'Brama Kumbara', null, null, null, null, '80', '2017-04-23 17:06:56.33', null);
INSERT INTO "public"."movie" VALUES ('4', 'Local', 'f', 'Kerajaan Majaphit History 2', '1989-01-21', null, null, null, 'Brama Kumbara 2', null, null, null, null, '80', '2017-04-23 17:10:56.216', '2017-04-23 17:18:45.27');
INSERT INTO "public"."movie" VALUES ('5', 'Local', 'f', 'Kerajaan Majaphit History 3', '1991-11-19', null, null, null, 'Brama Kumbara 3', null, null, null, null, '80', '2017-04-23 17:18:01.236', '2017-04-23 17:19:45.146');
INSERT INTO "public"."movie" VALUES ('6', 'Local', 'f', 'Kerajaan Majaphit History 4Aa', '1992-11-19', null, null, null, 'Brama Kumbara 4Aa', null, null, null, null, '80', '2017-04-23 17:26:09.806', '2017-04-23 17:27:41.928');
INSERT INTO "public"."movie" VALUES ('7', 'Local', 'f', 'Ada Apa Dengan Cinta', '1992-11-19', null, null, null, 'AADC', null, null, null, null, '80', '2017-04-23 17:27:41.928', null);
INSERT INTO "public"."movie" VALUES ('8', 'Local', 'f', 'Ada Apa Dengan Cinta 2', '2015-11-19', null, null, null, 'AADC 2', null, null, null, null, '80', '2017-04-23 17:30:41.792', null);
INSERT INTO "public"."movie" VALUES ('9', 'Local', 'f', 'Amerika vs Somalia', '1995-11-19', null, null, null, 'Black Hack Down', null, null, null, null, '80', '2017-04-23 17:34:33.956', null);
INSERT INTO "public"."movie" VALUES ('10', 'Local', 'f', 'Kong Skull Islanda', '2017-04-19', null, null, null, 'Skull Island', null, null, null, null, '80', '2017-04-23 21:19:14.421', null);
INSERT INTO "public"."movie" VALUES ('11', 'Local', 'f', 'Warkop DKI', '2017-04-19', null, null, null, 'Dono Warkop', null, null, null, null, '80', '2017-04-23 21:25:36.532', null);

-- ----------------------------
-- Table structure for tbl_user
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_user";
CREATE TABLE "public"."tbl_user" (
"id" varchar(22) COLLATE "default" NOT NULL,
"firstname" varchar(50) COLLATE "default",
"lastname" varchar(50) COLLATE "default",
"email" varchar(120) COLLATE "default",
"datecreated" timestamp(6),
"dateupdated" timestamp(6),
"age" int2,
"userid" int4 DEFAULT 0,
"password" varchar(150) COLLATE "default",
"roles" varchar(20) COLLATE "default",
"name" varchar(255) COLLATE "default",
"image" text COLLATE "default",
"remote_id" int4 DEFAULT 0
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of tbl_user
-- ----------------------------
INSERT INTO "public"."tbl_user" VALUES ('17042017070001fxy1', 'Dina', 'Wulansari', 'dina@gmail.com', '2017-04-20 17:07:17.886', null, '22', '1', 'eyJhbGciOiJIUzI1NiJ9.cGxlYXNl.FLDGLORF-AN60Bc9gYfKyJ2bQCRVyS9WOWEvM4OI09M', 'admin', 'Dina Wulansari', null, '1');
INSERT INTO "public"."tbl_user" VALUES ('17042206010001gdf1', 'Fatih', 'Abiyasa', 'fatih@abiyasa.com', '2017-04-22 06:01:45.873', null, '17', '0', 'eyJhbGciOiJIUzI1NiJ9.cGVybWlzaQ.jjvpsNt8cFw9zyqXxepFJF_EPchjSzTzKgquoYL0nGE', 'users', 'Fatih Abiyasa', null, '2');
INSERT INTO "public"."tbl_user" VALUES ('17042206080001mhf1', 'Rangga', 'Praditya', 'rangga@praditya.com', '2017-04-22 06:08:33.797', null, '19', '0', 'eyJhbGciOiJIUzI1NiJ9.cGxlYXNlYmFuZ2V0ZG9uZ3lhaA.OmT2xYIOYzTyyucUbghdMWYj7e0ef7BQCaTe_LFTg4k', 'users', 'Rangga Praditya', null, '3');
INSERT INTO "public"."tbl_user" VALUES ('17042206100002mhf0', 'Bima', 'Sena', 'bima@sena.com', '2017-04-22 06:10:33.798', null, '29', '0', 'eyJhbGciOiJIUzI1NiJ9.amwucHJpYmFkaS5nZy5tYXNqaWQubjAyMzYucGF5YWdlbGk.SdOQN8QGrSTVEiYm1gvOyiby4a-YrQ0b8BxMkaXORFo', 'users', 'Bimasena', null, '4');

-- ----------------------------
-- Table structure for tbl_user_address
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_user_address";
CREATE TABLE "public"."tbl_user_address" (
"iduser" varchar(22) COLLATE "default",
"type" varchar(15) COLLATE "default",
"street" varchar(50) COLLATE "default",
"zip" varchar(20) COLLATE "default",
"city" varchar(50) COLLATE "default",
"country" varchar(50) COLLATE "default",
"state" varchar(50) COLLATE "default"
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of tbl_user_address
-- ----------------------------
INSERT INTO "public"."tbl_user_address" VALUES ('17042017070001fxy1', 'billing', 'Bill 28', '', 'Bill Bystrica', '', 'Bill Ssss');
INSERT INTO "public"."tbl_user_address" VALUES ('17042017070001fxy1', 'postal', 'Postal 28', '97401', 'Postal Bystrica', '', 'Postal Slovakia');

-- ----------------------------
-- Table structure for tbl_user_hobby
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_user_hobby";
CREATE TABLE "public"."tbl_user_hobby" (
"iduser" varchar(22) COLLATE "default",
"name" varchar(50) COLLATE "default"
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of tbl_user_hobby
-- ----------------------------
INSERT INTO "public"."tbl_user_hobby" VALUES ('17042206010001gdf1', 'GUnung');
INSERT INTO "public"."tbl_user_hobby" VALUES ('17042206010001gdf1', 'Programming a');
INSERT INTO "public"."tbl_user_hobby" VALUES ('17042206010001gdf1', 'Renang');
INSERT INTO "public"."tbl_user_hobby" VALUES ('17042206010001gdf1', 'Sepeda');
INSERT INTO "public"."tbl_user_hobby" VALUES ('17042206080001mhf1', 'GUnung');
INSERT INTO "public"."tbl_user_hobby" VALUES ('17042206080001mhf1', 'Programming a');
INSERT INTO "public"."tbl_user_hobby" VALUES ('17042206080001mhf1', 'Renang');
INSERT INTO "public"."tbl_user_hobby" VALUES ('17042206080001mhf1', 'Sepeda');
INSERT INTO "public"."tbl_user_hobby" VALUES ('17042206100002mhf0', 'GUnung');
INSERT INTO "public"."tbl_user_hobby" VALUES ('17042206100002mhf0', 'Programming a');
INSERT INTO "public"."tbl_user_hobby" VALUES ('17042206100002mhf0', 'Renang');
INSERT INTO "public"."tbl_user_hobby" VALUES ('17042206100002mhf0', 'Sepeda');

-- ----------------------------
-- Table structure for tbl_user_job
-- ----------------------------
DROP TABLE IF EXISTS "public"."tbl_user_job";
CREATE TABLE "public"."tbl_user_job" (
"iduser" varchar(22) COLLATE "default",
"name" varchar(50) COLLATE "default",
"year" int2,
"ddd" int2
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of tbl_user_job
-- ----------------------------
INSERT INTO "public"."tbl_user_job" VALUES ('17042017070001fxy1', 'Delphi Developer', '2006', null);
INSERT INTO "public"."tbl_user_job" VALUES ('17042017070001fxy1', 'Vegas', '2000', null);

-- ----------------------------
-- Alter Sequences Owned By 
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table movie
-- ----------------------------
ALTER TABLE "public"."movie" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tbl_user
-- ----------------------------
ALTER TABLE "public"."tbl_user" ADD PRIMARY KEY ("id");
