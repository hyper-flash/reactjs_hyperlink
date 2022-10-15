-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 10, 2022 at 01:14 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_car`
--

CREATE TABLE `tbl_car` (
  `id` bigint(20) NOT NULL,
  `company_id` bigint(20) NOT NULL,
  `name` varchar(64) NOT NULL,
  `image` text NOT NULL,
  `fuel_type` varchar(16) NOT NULL,
  `top_speed` int(4) NOT NULL,
  `engine` int(6) NOT NULL,
  `price` decimal(15,2) NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `is_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_car`
--

INSERT INTO `tbl_car` (`id`, `company_id`, `name`, `image`, `fuel_type`, `top_speed`, `engine`, `price`, `is_active`, `is_created`, `is_updated`) VALUES
(1, 1, 'Audi Q3', 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/28379/q3-exterior-right-front-three-quarter-93448.jpeg?isig=0&q=75&wm=1', 'Petrol', 228, 1655, '1500000.00', 1, '2022-10-06 11:22:31', '2022-10-06 11:31:14'),
(2, 1, 'Audi Q2', 'https://imgd.aeplcdn.com/664x374/n/cw/ec/22801/q2-exterior-right-front-three-quarter-70077.jpeg?q=75', 'Petrol', 250, 1984, '1000000.00', 1, '2022-10-06 11:26:05', '2022-10-06 11:31:07'),
(3, 4, 'Bentley Bentayga', 'https://imgd.aeplcdn.com/664x374/n/cw/ec/55335/bentayga-exterior-right-front-three-quarter-2.jpeg?q=75', 'Petrol', 290, 3944, '42000000.00', 1, '2022-10-06 11:33:26', '2022-10-06 11:33:26'),
(4, 4, 'Flying Spur', 'https://imgd.aeplcdn.com/664x374/ec/A4/ab/9775/img/m/Bentley-Continental-Flying-Spur-Right-Front-Three-Quarter-52651_ol.jpg?v=201711021421&q=75', 'Petrol', 280, 3944, '17000000.00', 1, '2022-10-06 11:35:22', '2022-10-06 11:35:22'),
(5, 2, 'BMW 3 Series', 'https://imgd.aeplcdn.com/664x374/cw/ec/37067/BMW-3-Series-Exterior-167583.jpg?wm=0&q=75', 'Petrol', 245, 1999, '4500000.00', 1, '2022-10-06 11:37:08', '2022-10-06 11:37:08'),
(6, 2, 'BMW 3 Series Gran Limousine', 'https://imgd.aeplcdn.com/664x374/n/cw/ec/52639/3-series-gran-limousine-exterior-right-front-three-quarter-2.jpeg?q=75', 'Diesel', 235, 1995, '5500000.00', 1, '2022-10-06 11:39:01', '2022-10-06 11:39:01'),
(7, 5, 'Toyota Vellfire', 'https://imgd.aeplcdn.com/664x374/n/cw/ec/41217/toyota-vellfire-right-front-three-quarter5.jpeg?q=75', 'Hybrid', 246, 2494, '9500000.00', 1, '2022-10-06 11:41:41', '2022-10-06 11:41:41'),
(8, 5, 'Toyota Urban Cruiser Hyryder', 'https://imgd.aeplcdn.com/664x374/n/cw/ec/124027/urban-cruiser-hyryder-exterior-right-front-three-quarter-3.jpeg?isig=0&q=75', 'Hybrid', 180, 1462, '1200000.00', 1, '2022-10-06 11:43:56', '2022-10-06 11:43:56'),
(9, 3, 'Maruti Brezza', 'https://imgd.aeplcdn.com/664x374/n/cw/ec/107543/vitara-brezza-2022-exterior-right-front-three-quarter.jpeg?isig=0&q=75', 'Petrol', 149, 1462, '10000000.00', 1, '2022-10-06 11:45:11', '2022-10-06 11:45:11'),
(10, 3, 'Maruti Grand Vitara', 'https://imgd.aeplcdn.com/664x374/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75', 'Petrol', 149, 1499, '1200000.00', 1, '2022-10-06 11:47:27', '2022-10-06 11:47:27');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_company`
--

CREATE TABLE `tbl_company` (
  `id` bigint(20) NOT NULL,
  `name` varchar(64) NOT NULL,
  `image` text NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_company`
--

INSERT INTO `tbl_company` (`id`, `name`, `image`, `is_active`, `is_created`, `id_updated`) VALUES
(1, 'Audi', 'https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854', 1, '2022-10-06 11:09:37', '2022-10-06 12:03:33'),
(2, 'Bmw', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png', 1, '2022-10-06 11:09:53', '2022-10-06 12:01:40'),
(3, 'Suzuki', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/2560px-Suzuki_logo_2.svg.png', 1, '2022-10-06 11:09:53', '2022-10-06 12:02:02'),
(4, 'Bentley', 'https://www.carlogos.org/car-logos/bentley-logo-1400x800-show.png', 1, '2022-10-06 11:10:25', '2022-10-06 12:02:51'),
(5, 'Toyota', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Toyota_EU.svg/1200px-Toyota_EU.svg.png', 1, '2022-10-06 11:11:16', '2022-10-06 12:01:18');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order`
--

CREATE TABLE `tbl_order` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `qty` int(2) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` bigint(20) NOT NULL,
  `name` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `language` enum('en') DEFAULT NULL,
  `is_online` tinyint(4) NOT NULL DEFAULT 0,
  `last_login` datetime DEFAULT NULL,
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `name`, `email`, `password`, `language`, `is_online`, `last_login`, `is_deleted`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'kenil Donga', 'kenildongakd@gmail.com', 'Lg6x5Ua3QcwNtIFCwydL9Q==', 'en', 0, '2022-10-10 16:34:33', 0, 1, '2022-10-06 09:34:07', '2022-10-10 11:13:19');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_token`
--

CREATE TABLE `tbl_user_token` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `token` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `insertdate` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatetime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_user_token`
--

INSERT INTO `tbl_user_token` (`id`, `user_id`, `token`, `insertdate`, `updatetime`) VALUES
(1, 1, 'jwv93vlh5gts5o8xtfz1owvep9cx0o6vp67e80t7ety5y8inuwgw9xd5ddxv6om5', '2022-10-06 08:49:58', '2022-10-10 11:13:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_car`
--
ALTER TABLE `tbl_car`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `tbl_company`
--
ALTER TABLE `tbl_company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_order`
--
ALTER TABLE `tbl_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `tbl_user_token`
--
ALTER TABLE `tbl_user_token`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_car`
--
ALTER TABLE `tbl_car`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_company`
--
ALTER TABLE `tbl_company`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_order`
--
ALTER TABLE `tbl_order`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `tbl_user_token`
--
ALTER TABLE `tbl_user_token`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_car`
--
ALTER TABLE `tbl_car`
  ADD CONSTRAINT `tbl_car_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `tbl_company` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
