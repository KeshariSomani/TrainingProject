-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 26, 2022 at 10:03 AM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `jobbyo`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_job`
--

CREATE TABLE IF NOT EXISTS `add_job` (
  `jobid` int(10) NOT NULL AUTO_INCREMENT,
  `jb_ttl` varchar(200) NOT NULL,
  `m_qual` int(50) NOT NULL,
  `s_range` varchar(10) NOT NULL,
  `jb_des` varchar(1000) NOT NULL,
  PRIMARY KEY (`jobid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `add_job`
--

INSERT INTO `add_job` (`jobid`, `jb_ttl`, `m_qual`, `s_range`, `jb_des`) VALUES
(1, 'wwww', 3, '864551', 'poigfd'),
(2, 'wsdfghjkl', 6, '68664', 'sadfghjk'),
(3, 'sdfghujkl', 0, '5655', 'djfhd'),
(4, 'sadfghmj', 3, '8525414152', 'ASDFGHJK'),
(5, 'SSSS', 0, '25865312', 'sdfbnnm'),
(6, 'efghjk', 5, '5256532', 'qqqqq'),
(7, 'sdfghjkl', 0, '8964512', 'sdxfcghjnk'),
(8, 'ghjkl', 0, '65284512', 'asdfrghjukl'),
(9, 'CA', 0, '8745210153', 'require CA '),
(10, 'edrftgyh', 0, '512542', 'fdghjnkml,'),
(11, 'fdghjk', 0, '452115', 'dfghjkl'),
(12, 'erthujkl;', 0, '454512', 'dfhuj'),
(13, 'erghjk', 0, '95635412', 'wedrfhjk'),
(14, 'fhjkl,', 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE IF NOT EXISTS `admin_login` (
  `adid` varchar(50) NOT NULL DEFAULT '',
  `passwd` varchar(50) NOT NULL,
  PRIMARY KEY (`adid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`adid`, `passwd`) VALUES
('somanikeshari8726@gmail.com', '1504somani');

-- --------------------------------------------------------

--
-- Table structure for table `apply_job`
--

CREATE TABLE IF NOT EXISTS `apply_job` (
  `jobid` int(50) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `jbttl` varchar(200) NOT NULL,
  `email_add` varchar(50) NOT NULL,
  `mob` varchar(20) NOT NULL,
  PRIMARY KEY (`jobid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `apply_job`
--

INSERT INTO `apply_job` (`jobid`, `name`, `jbttl`, `email_add`, `mob`) VALUES
(1, 'szdcbk,;', 'zxcvbnm,./', 'somanikeshari8726@gmail.com', '06393808047'),
(2, 'Somani keshari', 'sxcvbnm,.', 'somanikeshari8726@gmail.com', '06393808047'),
(3, 'Somani keshari', 'sdxfcghjnkl;', 'somanikeshari8726@gmail.com', '06393808047'),
(4, 'nanndi', 'ias', 'somanikeshari8726@gmail.com', '845125452'),
(5, 'dileep keshari', 'asdfghjk', 'dileep23@gmail.com', '5158745623'),
(6, 'Somani keshari', 'budget', 'somanikeshari8726@gmail.com', '06393808047');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE IF NOT EXISTS `enquiry` (
  `f_name` varchar(20) NOT NULL,
  `l_name` varchar(20) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mob` varchar(20) NOT NULL,
  `msg` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`f_name`, `l_name`, `email`, `mob`, `msg`) VALUES
('ooo', 'lll', 'somanikeshari8726@gmail.com', '1222', 'submit'),
('qqq', 'keg', 'somanikeshari8726@gmail.com', '55555', 'submit'),
('1111', '2222', 'somanikeshari8726@gmail.com', '444444', 'submit'),
('vv', 'll', 'somanikeshari8726@gmail.com', '111', 'submit'),
('Somani', 'keshari', 'somanikeshari8726@gmail.com', '234567890', 'submit'),
('fgjk', 'dfghujkl', 'somanikeshari8726@gmail.com', '964512', 'submit'),
('dfgthsrtghj', 'dfgbm,', 'e@gmail.com', '8542542325', 'fghkl;''');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE IF NOT EXISTS `registration` (
  `f_name` varchar(50) NOT NULL,
  `l_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL DEFAULT '',
  `c_no` varchar(15) NOT NULL,
  `strt` varchar(50) NOT NULL,
  `city` varchar(20) NOT NULL,
  `state` varchar(20) NOT NULL,
  `qual` varchar(100) NOT NULL,
  `gnd` varchar(20) NOT NULL,
  `chs_pwd` varchar(20) NOT NULL,
  `rescv` varchar(3000) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`f_name`, `l_name`, `email`, `c_no`, `strt`, `city`, `state`, `qual`, `gnd`, `chs_pwd`, `rescv`) VALUES
('dileep', 'keshari', 'dileep23@gmail.com', '8425125412510', 'Tathai road', 'Mirzapur', 'Uttar Pradesh', 'Graduation', 'on', '123456', 'IMG-20180621-WA0016.jpg'),
('sxxc', 'sdfgth', 'somanikeshari826@gmail.com', '56120254', 'Tathai roadasdfghj', 'Mirzapurasdfg', 'Uttar Pradesh', 'Graduation', 'on', 'zxsdfghju', 'anu3.jpg'),
('Somani', 'keshari', 'somanikeshari8726@gmail.com', '98645312', 'Draupadi Hostel (Room no. 48), Purvanchal Universi', 'Jaunpur', 'Uttar Pradesh', 'Diploma', 'on', '875323', 'IMG-20201201-WA0081.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
