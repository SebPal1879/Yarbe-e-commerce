-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-06-2023 a las 20:15:04
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`idc`, `namec`) VALUES
(1, 'Cardiovascular'),
(2, 'Hematology'),
(3, 'Oncology'),
(4, 'Hormonal'),
(18, 'Eye Conditions');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodop`
--

CREATE TABLE `metodop` (
  `idm` int(11) NOT NULL,
  `namem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `metodop`
--

INSERT INTO `metodop` (`idm`, `namem`) VALUES
(1, 'Cash'),
(2, 'Electronic transaction');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(9, 'Hormonal01', 'Hormonious', 'Hormonious.jpg', 'ENZ-22090', 'ORA-00758', 176389, 'Hormonal', 'Cash'),
(10, 'Hormonal02', 'GHR Complex', 'GHRComplex.jpg', '7083', 'Mg 180 Cap', 199900, 'Hormonal', 'Electronic transaction'),
(11, 'Oncologia01', 'Brineura', 'Brineura.jpg', '20142418-1', 'Injectable x 2', 82447, 'Oncology', 'Electronic transaction'),
(12, 'Oncologia02', 'Berinert', 'Berinert.jpg', '20094884-1', 'Inhibitor 500UI/1U', 748345, 'Oncology', 'Electronic transaction');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(250) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `descripcion`) VALUES
(1, 'Administrator'),
(2, 'Customer');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id`, `name`, `idc`, `mail`, `password`, `role`) VALUES
(1, 'Sebastian', 12345678, 'sebastian@gmail.com', '123456', 1),
(3, 'jorge', 12346578, 'jorge@gmail.com', '123456', 1),
(4, 'David', 123654785, 'david@gmail.com', '000000', 2);

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
