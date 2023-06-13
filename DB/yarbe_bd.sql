-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-06-2023 a las 05:06:50
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `yarbe_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `idc` int(11) NOT NULL,
  `namec` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `ordernum` int(11) NOT NULL,
  `address` varchar(100) NOT NULL,
  `mediop` varchar(45) NOT NULL,
  `total` double NOT NULL,
  `cantidad` int(11) NOT NULL,
  `usuarios_Id` int(11) NOT NULL,
  `prodcomprado` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`ordernum`, `address`, `mediop`, `total`, `cantidad`, `usuarios_Id`, `prodcomprado`) VALUES
(0, '', '0', 0, 0, 0, NULL),
(0, '', '0', 0, 0, 0, NULL),
(0, '', '0', 0, 0, 0, NULL),
(18, 'asd dsa AU (123)', '0', 657633, 0, 0, NULL),
(0, '', '0', 0, 0, 0, NULL),
(3, 'asd dsa AU (123)', '0', 657633, 0, 0, NULL),
(0, '', '0', 0, 0, 0, NULL),
(1, 'CL Lunaria AF (6)', '0', 657633, 0, 0, NULL),
(17, 'CL Lunaria AF (6)', '0', 117225, 0, 0, NULL),
(3, '123 123 AU (123)', '0', 217211, 0, 0, NULL),
(0, '', '0', 0, 0, 0, NULL),
(16, '123 123 BS (123)', '0', 71646, 0, 0, NULL),
(7, '123 123 BS (123)', '0', 71646, 0, 0, NULL),
(23, '123 123 UA (123)', '0', 71646, 0, 0, NULL),
(14, '85678 6578 AW (675856)', '0', 230345, 0, 0, NULL),
(17, '85678 6578 AW (675856)', '0', 230345, 0, 0, NULL),
(0, '', '0', 0, 0, 0, NULL),
(0, '', '0', 0, 0, 0, NULL),
(0, '', '0', 0, 0, 0, NULL),
(28, '85678 6578 AW (675856)', '0', 230345, 0, 0, NULL),
(13, '85678 6578 AW (675856)', '0', 230345, 0, 0, NULL),
(0, '', '0', 0, 0, 0, NULL),
(27, '85678 6578 AW (675856)', '0', 230345, 0, 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodop`
--

CREATE TABLE `metodop` (
  `idm` int(11) NOT NULL,
  `namem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `idp` int(11) NOT NULL,
  `idname` varchar(30) NOT NULL,
  `titulo` varchar(40) NOT NULL,
  `imagen` varchar(120) NOT NULL,
  `code` varchar(50) NOT NULL,
  `content` varchar(70) NOT NULL,
  `cost` int(9) NOT NULL,
  `namec` varchar(30) NOT NULL,
  `mediop` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idp`, `idname`, `titulo`, `imagen`, `code`, `content`, `cost`, `namec`, `mediop`) VALUES
(1, 'Cardiovascular01', 'Natto-K', 'Nattok.jpg', 'ENZ-22090', '90 unid', 217211, 'Cardiovascular', 'Electronic transaction'),
(2, 'Cardiovascular02', 'Clinical Cardio-6', 'Clininical Cardio-6.jpg', 'PRT-13383', '90 unid', 220211, 'Cardiovascular', 'Electronic transaction'),
(3, 'Cardiovascular03', 'HeartBeat', 'HeortBeat.jpg', 'NAP-47421', '90 unid', 230345, 'Cardiovascular', 'Electronic transaction'),
(4, 'Eye01', 'Natural Vision', 'NaturalVision.jpg', 'DRB-00311', '60 unid', 71646, 'Eye Conditions', 'Cash'),
(5, 'Eye02', 'Eye Pressure Support', 'Eye Pressure Support.jpg', 'LEX-15143', '30 unid', 120126, 'Eye Conditions', 'Cash'),
(6, 'Eye03', 'Mascular Vision', 'Mascular Vision.jpg', 'NOW-03402', '90 unid', 117225, 'Eye Conditions', 'Cash'),
(7, 'Hematologia01', 'Vessel Due F', 'Vesseñ Due F.jpg', '428M98', 'Box 10 Ampoules', 640000, 'Hematology', 'Electronic transaction'),
(8, 'Hematologia02', 'Bolentax', 'Bolentax.jpg', '750112', 'Box With 2', 987970, 'Hematology', 'Cash'),
(9, 'Hormonal01', 'Hormonious', '../stock/Hormonious.jpg', 'ENZ-22090', 'ORA-00758', 176389, 'Hormonal', 'Cash'),
(10, 'Hormonal02', 'GHR Complex', 'GHRComplex.jpg', '7083', 'Mg 180 Cap', 199900, 'Hormonal', 'Electronic transaction'),
(11, 'Oncologia01', 'Brineura', 'Brineura.jpg', '20142418-1', 'Injectable x 2', 82447, 'Oncology', 'Electronic transaction'),
(12, 'Oncologia02', 'Berinert', 'Berinert.jpg', '20094884-1', 'Inhibitor 500UI/1U', 748345, 'Oncology', 'Electronic transaction');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `idc` int(11) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  `role` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idc`);

--
-- Indices de la tabla `metodop`
--
ALTER TABLE `metodop`
  ADD PRIMARY KEY (`idm`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idp`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `metodop`
--
ALTER TABLE `metodop`
  MODIFY `idm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `idp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
