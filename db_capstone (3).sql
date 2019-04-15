-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2019 at 02:31 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_capstone`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_administrator`
--

CREATE TABLE `tbl_administrator` (
  `id` int(11) NOT NULL,
  `user_name` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `user_status` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_administrator`
--

INSERT INTO `tbl_administrator` (`id`, `user_name`, `password`, `user_status`) VALUES
(1, 'administrator', 'admin123a', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_foods`
--

CREATE TABLE `tbl_foods` (
  `food_id` int(11) NOT NULL,
  `food_name` varchar(255) NOT NULL,
  `food_description` text NOT NULL,
  `food_ing1` varchar(50) NOT NULL,
  `food_ing2` varchar(50) NOT NULL,
  `food_ing3` varchar(50) NOT NULL,
  `food_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_foods`
--

INSERT INTO `tbl_foods` (`food_id`, `food_name`, `food_description`, `food_ing1`, `food_ing2`, `food_ing3`, `food_price`) VALUES
(1, 'Ham Silog', 'Ham + Egg + Rice', 'Ham', 'Egg', 'Rice', 35),
(3, 'Burger Silog', 'Burger + Egg + Rice', 'Burger', 'Egg', 'Rice', 35),
(4, 'Long Silog', 'Longganisa + Egg + Rice', 'Longganisa(Pork)', 'Egg', 'Rice', 40),
(5, 'Hot Silog', 'Hotdog + Egg + Rice', 'Hotdog', 'Egg', 'Rice', 35),
(6, 'Tuyo Silog', 'Tuyo + Egg + Rice', 'Tuyo', 'Egg', 'Rice', 30),
(7, 'Bacon Silog', 'Bacon + Egg + Rice', 'Bacon', 'Egg', 'Rice', 40),
(8, 'Pork To Silog', 'Pork Tocino + Egg + Rice', 'Pork Tocino', 'Egg', 'Rice', 40),
(9, 'Chicken To Silog', 'Chicken Tocino + Egg + Rice', 'Chicken Tocino', 'Egg', 'Rice', 40),
(10, 'TapSiLog', 'Tapa + Egg + Rice', 'Tapa', 'Egg', 'Rice', 55),
(11, 'Chicken Long Silog', 'Chicken Longganisa + Egg + Rice', 'Longganisa(Chicken)', 'Egg', 'Rice', 40),
(12, 'Liempo Silog', 'Liempo + Egg + Rice', 'Liempo', 'Egg', 'Rice', 60),
(13, 'Chicken Silog', 'Chicken + Egg + Rice', 'Chicken', 'Egg', 'Rice', 60),
(16, 'Rice', 'Extra Rice', 'Rice', 'Rice', 'Rice', 12);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_inventory`
--

CREATE TABLE `tbl_inventory` (
  `fld_id` int(11) NOT NULL,
  `fld_name` varchar(50) NOT NULL,
  `fld_stocks` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_inventory`
--

INSERT INTO `tbl_inventory` (`fld_id`, `fld_name`, `fld_stocks`) VALUES
(1, 'Ham', 23),
(2, 'Burger', 10),
(3, 'Longganisa(Pork)', 29),
(4, 'Longganisa(Chicken)', 19),
(5, 'Hotdog', 9),
(6, 'Tuyo', 7),
(7, 'Bacon', 31),
(8, 'Pork Tocino', 16),
(9, 'Chicken Tocino', 20),
(10, 'Lumpia', 20),
(11, 'Egg', 15),
(12, 'Tapa', 24),
(13, 'Bangus', 22),
(14, 'Liempo', 10),
(15, 'Pork Chop', 21),
(16, 'Chicken', 19),
(17, 'Sisig', 21),
(18, 'Rice', 44),
(19, '', 99999);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_invlogs`
--

CREATE TABLE `tbl_invlogs` (
  `fld_id` int(11) NOT NULL,
  `fld_name` varchar(50) NOT NULL,
  `fld_oldstocks` int(11) NOT NULL,
  `fld_additional` int(11) NOT NULL,
  `fld_totalstocks` int(11) NOT NULL,
  `fld_dateadded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fld_staff` varchar(50) NOT NULL,
  `fld_status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_invlogs`
--

INSERT INTO `tbl_invlogs` (`fld_id`, `fld_name`, `fld_oldstocks`, `fld_additional`, `fld_totalstocks`, `fld_dateadded`, `fld_staff`, `fld_status`) VALUES
(1, 'Ham', 2, 22, 24, '2018-12-01 21:53:47', 'Doy Bello', ''),
(2, 'Burger', 5, 7, 12, '2018-12-01 22:00:30', 'Doy Bello', ''),
(3, 'Chicken', 8, 2, 10, '2018-12-04 06:17:13', 'Melner Balce', ''),
(4, 'Chicken', 10, 2, 12, '2018-12-04 06:17:29', 'Melner Balce', ''),
(5, 'Chicken', 9, 2, 11, '2018-12-04 17:01:37', 'Mig Atienza', ''),
(6, 'Burger', 10, 2, 12, '2018-12-04 17:02:13', 'Mig Atienza', ''),
(7, 'Longganisa(Pork)', 10, 1, 11, '2018-12-04 17:02:51', 'Mig Atienza', ''),
(8, 'Egg', 10, 2, 12, '2018-12-05 00:04:32', 'Mig Atienza', ''),
(9, 'Egg', -14, 99, 85, '2018-12-10 07:18:18', 'John Raymond Samonte', ''),
(10, 'Rice', 4, 35, 39, '2018-12-10 07:18:24', 'John Raymond Samonte', ''),
(11, 'Burger', 2, 22, 24, '2018-12-13 17:50:02', 'Mig Atienza', ''),
(12, 'Hotdog', 6, 22, 28, '2018-12-13 17:50:07', 'Mig Atienza', ''),
(13, 'Tapa', 19, 5, 24, '2019-01-06 16:11:25', 'Mig Atienza', ''),
(14, 'Burger', 0, 1, 1, '2019-01-06 16:11:41', 'Mig Atienza', ''),
(15, 'Longganisa(Pork)', 0, 1, 1, '2019-01-06 17:04:08', 'Mig Atienza', ''),
(16, 'Bacon', 0, 10, 10, '2019-01-06 18:44:24', 'Mig Atienza', ''),
(17, 'Burger', 1, 22, 23, '2019-01-06 18:44:30', 'Mig Atienza', ''),
(18, 'Longganisa(Pork)', 1, 12, 13, '2019-01-06 18:44:34', 'Mig Atienza', ''),
(19, 'Rice', 5, 35, 40, '2019-01-06 18:44:49', 'Mig Atienza', ''),
(20, 'Longganisa(Chicken)', 15, 5, 20, '2019-01-06 18:54:25', 'Angelo Erni', ''),
(21, 'Chicken', 5, 2, 7, '2019-01-06 18:54:35', 'Angelo Erni', ''),
(22, 'Ham', 5, 5, 10, '2019-01-06 18:55:21', 'Angelo Erni', ''),
(23, 'Bacon', 8, 3, 11, '2019-01-07 05:21:11', 'Arturo M. Atienza', ''),
(24, 'Hama', 0, 1, 1, '2019-01-14 18:54:02', 'Mig Atienza', ''),
(25, 'Hama', 0, 1, 1, '2019-01-14 18:54:10', 'Mig Atienza', ''),
(26, 'Hamasdas', 0, 0, 0, '2019-01-14 18:54:16', 'Mig Atienza', ''),
(27, 'Hamasdas', 0, 12, 12, '2019-01-14 18:54:18', 'Mig Atienza', ''),
(28, 'Ham1', 0, 123, 123, '2019-01-14 18:59:52', 'Mig Atienza', ''),
(29, 'Ham', 11, 333, 344, '2019-01-14 19:00:10', 'Mig Atienza', ''),
(30, 'Ham', 3, 2, 5, '2019-02-06 07:54:49', 'Mig Atienza', ''),
(31, 'Ham', 5, 2, 7, '2019-04-05 06:37:02', 'Mig Atienza', ''),
(32, 'Ham', 7, 4, 11, '2019-04-05 06:57:04', 'Mig Atienza', 'Restock'),
(33, 'Bacon', 10, 4, 14, '2019-04-05 06:58:23', 'Mig Atienza', 'Restock'),
(34, 'Ham', 11, 9, 20, '2019-04-05 06:58:50', 'Mig Atienza', 'Restock'),
(35, 'Bacon', 0, 0, 0, '2019-04-05 07:39:38', 'administrator', 'Truncate/Reset'),
(36, 'Bangus', 0, 0, 0, '2019-04-05 07:40:09', 'administrator', 'Truncate/Reset'),
(37, 'Burger', 16, 0, 0, '2019-04-05 07:47:47', 'administrator', 'Truncate/Reset'),
(38, 'Bacon', 0, 0, 0, '2019-04-05 07:52:43', 'administrator', 'Truncate/Reset'),
(39, 'Longganisa(Pork)', 13, 0, 0, '2019-04-05 10:33:02', 'administrator', 'Truncate/Reset'),
(40, 'Rice', 0, 32, 32, '2019-04-10 07:13:16', 'Mig Atienza', 'Restock'),
(41, 'Bacon', 0, 32, 32, '2019-04-10 07:13:21', 'Mig Atienza', 'Restock'),
(42, 'Longganisa(Pork)', 0, 33, 33, '2019-04-10 07:13:32', 'Mig Atienza', 'Restock'),
(43, 'Burger', 0, 23, 23, '2019-04-10 07:13:35', 'Mig Atienza', 'Restock'),
(44, 'Bangus', 0, 22, 22, '2019-04-10 07:13:40', 'Mig Atienza', 'Restock'),
(45, 'Ham', 2, 33, 35, '2019-04-10 07:13:43', 'Mig Atienza', 'Restock'),
(46, 'Egg', 0, 35, 35, '2019-04-14 11:05:40', 'Mig Atienza', 'Restock'),
(47, 'Rice', 0, 55, 55, '2019-04-14 12:06:59', 'Mig Atienza', 'Restock');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_orders`
--

CREATE TABLE `tbl_orders` (
  `fld_id` int(11) NOT NULL,
  `fld_menu` varchar(255) NOT NULL,
  `fld_service` varchar(255) NOT NULL,
  `fld_price` int(11) NOT NULL,
  `fld_qty` int(11) NOT NULL,
  `fld_totalprice` int(11) NOT NULL,
  `fld_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fld_staff` varchar(255) NOT NULL,
  `fld_unique_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_orders`
--

INSERT INTO `tbl_orders` (`fld_id`, `fld_menu`, `fld_service`, `fld_price`, `fld_qty`, `fld_totalprice`, `fld_date`, `fld_staff`, `fld_unique_id`) VALUES
(1, 'Ham Silog', '', 35, 1, 35, '2019-04-14 10:47:34', 'Mig Atienza', 1),
(2, 'Burger Silog', '', 35, 1, 35, '2019-04-14 10:47:34', 'Mig Atienza', 1),
(4, 'Ham Silog', '', 35, 1, 35, '2019-04-14 11:05:55', 'Mig Atienza', 2),
(5, 'Burger Silog', '', 35, 1, 35, '2019-04-14 11:05:55', 'Mig Atienza', 2),
(7, 'Ham Silog', '', 35, 5, 175, '2019-04-14 11:06:21', 'Mig Atienza', 3),
(8, 'Tuyo Silog', '', 30, 2, 60, '2019-04-14 11:06:21', 'Mig Atienza', 3),
(10, 'Rice', '', 12, 2, 24, '2019-04-14 12:04:10', 'Mig Atienza', 4),
(11, 'Chicken Silog', '', 60, 1, 60, '2019-04-14 12:04:10', 'Mig Atienza', 4),
(13, 'Bacon Silog', '', 40, 1, 40, '2019-04-14 12:06:34', 'Mig Atienza', 5),
(14, 'Rice', '', 12, 2, 24, '2019-04-14 12:06:34', 'Mig Atienza', 5),
(16, 'Tuyo Silog', '', 30, 1, 30, '2019-04-14 12:07:25', 'Mig Atienza', 6),
(17, 'Hot Silog', '', 35, 1, 35, '2019-04-14 12:07:25', 'Mig Atienza', 6),
(19, 'Ham Silog', '', 35, 1, 35, '2019-04-14 12:09:09', 'Mig Atienza', 7),
(20, 'Ham Silog', '', 35, 1, 35, '2019-04-14 12:09:56', 'Mig Atienza', 8),
(21, 'Burger Silog', '', 35, 1, 35, '2019-04-14 12:09:56', 'Mig Atienza', 8),
(23, 'Burger Silog', '', 35, 10, 350, '2019-04-14 12:10:34', 'Mig Atienza', 9);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_purchase`
--

CREATE TABLE `tbl_purchase` (
  `fld_id` int(11) NOT NULL,
  `fld_menu` varchar(255) NOT NULL,
  `fld_price` int(11) NOT NULL,
  `fld_qty` int(11) NOT NULL,
  `fld_ing1` varchar(50) NOT NULL,
  `fld_ing2` varchar(50) NOT NULL,
  `fld_ing3` varchar(50) NOT NULL,
  `fld_totalprice` int(11) NOT NULL,
  `fld_staff` varchar(50) NOT NULL,
  `fld_uniqueid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_password` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_fullname` varchar(25) NOT NULL,
  `date_registered` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_remarks` varchar(25) NOT NULL,
  `user_status` varchar(25) NOT NULL,
  `user_position` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `user_name`, `user_password`, `user_email`, `user_fullname`, `date_registered`, `user_remarks`, `user_status`, `user_position`) VALUES
(1, 'migz01', 'asdasd123', 'migzatienza01@gmail.com', 'Mig Atienza', '2018-11-15 11:08:08', 'Activated', 'Inactive', 'Staff'),
(2, 'lester', 'lester123', 'lestersamonte011@gmail.com', 'lester samonte', '2018-11-15 13:35:21', 'Activated', 'Inactive', 'Staff'),
(3, 'neris', '123', 'neris@yahoo.com', 'Neris Milanio', '2018-11-19 06:04:53', 'Activated', 'Inactive', 'Staff'),
(4, 'ced', '123', 'ced@gmail.com', 'Cedric Labrador', '2018-11-19 06:07:12', 'Deactivated', 'Inactive', ''),
(5, 'arturo01', 'pogiako123', 'arturoatienza@gmail.com', 'Arturo M. Atienza', '2019-01-07 05:17:14', 'Deactivated', 'Inactive', ''),
(6, 'paulamae', 'asd', 'paulamae@gmail.com', 'Paula Mae Hernandez', '2019-03-04 10:39:58', 'Activated', 'Inactive', 'Staff');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_vieworders`
--

CREATE TABLE `tbl_vieworders` (
  `fld_orderid` int(11) NOT NULL,
  `fld_staff` varchar(255) NOT NULL,
  `fld_maintotal` int(11) NOT NULL,
  `fld_payment` int(11) NOT NULL,
  `fld_change` int(11) NOT NULL,
  `fld_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fld_status` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_vieworders`
--

INSERT INTO `tbl_vieworders` (`fld_orderid`, `fld_staff`, `fld_maintotal`, `fld_payment`, `fld_change`, `fld_date`, `fld_status`) VALUES
(1, 'Mig Atienza', 70, 70, 0, '2019-04-14 10:47:34', 'Completed'),
(2, 'Mig Atienza', 70, 70, 0, '2019-04-14 11:05:55', 'Completed'),
(3, 'Mig Atienza', 235, 235, 0, '2019-04-14 11:06:21', 'Completed'),
(4, 'Mig Atienza', 84, 90, 6, '2019-04-14 12:04:10', 'Completed'),
(5, 'Mig Atienza', 64, 100, 36, '2019-04-14 12:06:34', 'Completed'),
(6, 'Mig Atienza', 65, 60, -5, '2019-04-14 12:07:25', 'Not Yet'),
(7, 'Mig Atienza', 35, 35, 0, '2019-04-14 12:09:09', 'Not Yet'),
(8, 'Mig Atienza', 70, 100, 100, '2019-04-14 12:09:56', 'Not Yet'),
(9, 'Mig Atienza', 350, 500, 150, '2019-04-14 12:10:35', 'Not Yet');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_administrator`
--
ALTER TABLE `tbl_administrator`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_foods`
--
ALTER TABLE `tbl_foods`
  ADD PRIMARY KEY (`food_id`);

--
-- Indexes for table `tbl_inventory`
--
ALTER TABLE `tbl_inventory`
  ADD PRIMARY KEY (`fld_id`);

--
-- Indexes for table `tbl_invlogs`
--
ALTER TABLE `tbl_invlogs`
  ADD PRIMARY KEY (`fld_id`);

--
-- Indexes for table `tbl_orders`
--
ALTER TABLE `tbl_orders`
  ADD PRIMARY KEY (`fld_id`);

--
-- Indexes for table `tbl_purchase`
--
ALTER TABLE `tbl_purchase`
  ADD PRIMARY KEY (`fld_id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `tbl_vieworders`
--
ALTER TABLE `tbl_vieworders`
  ADD PRIMARY KEY (`fld_orderid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_administrator`
--
ALTER TABLE `tbl_administrator`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_foods`
--
ALTER TABLE `tbl_foods`
  MODIFY `food_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_inventory`
--
ALTER TABLE `tbl_inventory`
  MODIFY `fld_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `tbl_invlogs`
--
ALTER TABLE `tbl_invlogs`
  MODIFY `fld_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `tbl_orders`
--
ALTER TABLE `tbl_orders`
  MODIFY `fld_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `tbl_purchase`
--
ALTER TABLE `tbl_purchase`
  MODIFY `fld_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_vieworders`
--
ALTER TABLE `tbl_vieworders`
  MODIFY `fld_orderid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
