-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 20 2023 г., 09:24
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `InternetStore`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Basket`
--

CREATE TABLE `Basket` (
  `basket_id` int NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Basket`
--

INSERT INTO `Basket` (`basket_id`, `user_id`) VALUES
(1, 1),
(2, 2),
(5, 3),
(11, 10),
(12, 17),
(6, 19);

-- --------------------------------------------------------

--
-- Структура таблицы `Cart_item`
--

CREATE TABLE `Cart_item` (
  `id` int NOT NULL,
  `basket_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Cart_item`
--

INSERT INTO `Cart_item` (`id`, `basket_id`, `product_id`, `quantity`) VALUES
(23, 5, 1, 1),
(24, 5, 1, 1),
(25, 6, 1, 2),
(30, 6, 3, 1),
(31, 6, 5, 1),
(32, 6, 4, 1),
(33, 6, 2, 1),
(35, 6, 3, 1),
(38, 6, 9, 1),
(39, 1, 1, 3),
(42, 1, 2, 3),
(62, 1, 3, 1),
(63, 1, 5, 1),
(64, 1, 6, 1),
(65, 1, 7, 1),
(66, 1, 8, 1),
(67, 1, 9, 1),
(68, 1, 10, 1),
(69, 1, 15, 1),
(70, 1, 14, 2),
(97, 11, 4, 1),
(98, 11, 2, 1),
(99, 11, 3, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `Categories`
--

CREATE TABLE `Categories` (
  `categories_id` int NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Categories`
--

INSERT INTO `Categories` (`categories_id`, `name`) VALUES
(1, 'Электроника'),
(2, 'Бытовая техника'),
(3, 'Спорт и отдых'),
(4, 'Дом и сад'),
(5, 'Аксессуары'),
(6, 'Книги');

-- --------------------------------------------------------

--
-- Структура таблицы `Orders`
--

CREATE TABLE `Orders` (
  `order_id` int NOT NULL,
  `order_date` datetime NOT NULL,
  `user_id` int NOT NULL,
  `total_price` decimal(10,0) NOT NULL,
  `status` int NOT NULL,
  `payment_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Orders`
--

INSERT INTO `Orders` (`order_id`, `order_date`, `user_id`, `total_price`, `status`, `payment_type`) VALUES
(2, '2023-05-19 08:53:26', 17, '50670', 1, 'По карте'),
(9, '2023-05-19 11:26:05', 17, '41990', 1, 'По карте'),
(10, '2023-05-19 11:26:45', 17, '29500', 1, 'По карте'),
(11, '2023-05-19 11:30:53', 17, '41990', 1, 'По карте'),
(12, '2023-05-19 11:54:43', 17, '388', 1, 'По карте');

-- --------------------------------------------------------

--
-- Структура таблицы `Oreder_details`
--

CREATE TABLE `Oreder_details` (
  `order_details_id` int NOT NULL,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Oreder_details`
--

INSERT INTO `Oreder_details` (`order_details_id`, `order_id`, `product_id`, `quantity`) VALUES
(5, 2, 7, 1),
(6, 2, 11, 1),
(7, 2, 8, 1),
(8, 2, 6, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `Products`
--

CREATE TABLE `Products` (
  `product_id` int NOT NULL,
  `article` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `category_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Products`
--

INSERT INTO `Products` (`product_id`, `article`, `name`, `description`, `price`, `image_url`, `category_id`) VALUES
(1, '12345678901', 'Apple Iphone', 'Iphone с диагональю экрана 6 дюймов', '89000', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-10/764/849/999/913/25/100039500627b0.jpeg', 1),
(2, '23456789012', 'Пылесос Timberk T-VCC-230 серый', 'Пылесос Timberk T-VCC-230 серый', '12999', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/132/746/584/411/216/14/600009051681b0.png', 2),
(3, '34567890123', 'Велосипед', 'Велосипед Stels Pilot 950 MD V011 2020 19\" темно-синий', '29500', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/184/721/539/041/611/51/100028430639b0.jpeg', 3),
(4, '45678901234', 'Газонокосилка', 'Электрическая газонокосилка Bosch ARM 37 06008A6201 1400 Вт', '11890', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-20/562/454/879/281/310/100000381132b0.jpg', 4),
(5, '56789012345', 'Чехол для смартфона', 'Чехол Clear Case (MagSafe) для iPhone 14 Pro Max, прозрачный', '388', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/163/555/163/192/193/600008951125b0.png', 5),
(6, '67890123456', 'Книга', 'Книга Эксмо Гравити Фолз. Дневник 3', '1800', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/1725198/100023083588b0.jpg', 6),
(7, '78901234567', 'Наушники', 'Беспроводные наушники Apple AirPods Pro Custom Color Black', '20990', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-2/14/35/76/91/26/23/100026029138b0.jpg', 1),
(8, '89012345678', 'Стиральная машина', 'Стиральная машина Beko RSPE78612S', '25990', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/251/940/024/414/947/100028173343b0.jpg', 2),
(9, '90123456789', 'Скакалка', 'Скакалка утяжелённая ZDK FIT, черный', '500', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/101/736/820/752/113/48/600006953624b0.webp', 3),
(10, '10234567890', 'Гриль', 'Гриль REDMOND SteakMaster RGM-M813', '13490', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/191/965/315/412/022/41/600005528165b0.jpeg', 4),
(11, '11234567891', 'Солнечные очки', 'Солнцезащитные очки мужские TS Traveler', '1890', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-34/739/774/878/194/3/600003974557b0.jpeg', 5),
(12, '12234567892', 'Книга', 'Книга Гарри Поттер и Философский камень', '600', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/818/595/697/110/101/1/100022940613b1.jpg', 6),
(13, '13234567893', 'Планшет', 'Планшет Xiaomi Mi Pad5 11\" 2021 6/128GB Gray Wi-Fi', '29990', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/202/258/553/311/310/54/600004925184b0.webp', 1),
(14, '14234567894', 'Микроволновка', 'Микроволновая печь с грилем Samsung MG30T5018AK', '16990', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/38/56/32/30/58/3/100026631576b0.jpg', 2),
(15, '15234567895', 'Гантели', 'Разборные гантели URM B00027 2 x 10 кг, черный', '3050', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/119/376/000/342/019/24/600003319564b0.jpg', 3),
(16, '16234567896', 'Диван', 'Диван-кровать Турин лайт темно-серый двуспальный раскладной для дома Divan24', '10500', 'https://ir.ozone.ru/s3/multimedia-e/wc1000/6310070174.jpg', 4),
(17, '17234567897', 'Ремень', 'Ремень мужской FABRETTI FR2480-12 светло-коричневый, р. 125', '2990', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/790/013/194/122/818/9/100047614454b0.jpg', 5),
(18, '18234567898', 'Книга', 'Книга Думай и богатей', '284', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-1/45/80/27/85/26/100023088194b0.jpg', 6),
(19, '19234567899', 'Смарт-часы', 'Apple Watch Series 8 GPS 45mm Midnight Aluminum Case with Midnight Sport Band - M/L', '41990', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/687/956/432/101/113/8/600009176097b1.jpeg', 1),
(20, '20234567900', 'Мультиварка', 'Мультиварка-скороварка Philips HD2137/40', '30000', 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-14/075/564/823/311/648/600011427241b0.jpeg', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `Statuses`
--

CREATE TABLE `Statuses` (
  `statuses_id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Statuses`
--

INSERT INTO `Statuses` (`statuses_id`, `name`) VALUES
(1, 'Принят в работу'),
(2, 'Передано в доставку'),
(3, 'Доставлено'),
(4, 'Получено'),
(5, 'Отменено');

-- --------------------------------------------------------

--
-- Структура таблицы `Users`
--

CREATE TABLE `Users` (
  `user_id` int NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `login` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `date_of_birthday` date DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Users`
--

INSERT INTO `Users` (`user_id`, `full_name`, `login`, `password`, `phone`, `email`, `date_of_birthday`, `gender`, `address`) VALUES
(1, 'Александр Смирнов', 'asmirnov', 'As12345!', '89051231234', 'asmirnov@example.com', '1985-02-14', 'м', 'ул. Гагарина, д.15, кв.8'),
(2, 'Елена Иванова', 'eivanova', 'El98765$', '89123752325', 'eivanova@example.com', '1991-06-24', 'ж', 'ул. Чкалова, д.3, кв.15'),
(3, 'Сергей Кузнецов', 'skuznetsov', 'Sergey_K123', '89219499234', 'skuznetsov@example.com', '1988-09-10', 'м', 'пр. Мира, д.25, кв.61'),
(4, 'Ольга Петрова', 'opetrova', 'OlgaPetrova2021!', '89523985983', 'opetrova@example.com', '1993-12-05', 'ж', 'ул. Ленина, д.5, кв.3'),
(5, 'Дмитрий Попов', 'dpopov', 'Dima_93Popov', '89031235441', 'dpopov@example.com', '1993-11-20', 'м', 'ул. Комсомольская, д.18, кв.28'),
(6, 'Анастасия Соколова', 'asokolova', 'AnaSt_arrR', '89651231254', 'asokolova@example.com', '1987-04-29', 'ж', 'ул. Цветочная, д.24, кв.10'),
(7, 'Игорь Михайлов', 'imikhailov', 'Imi%1&Ha)', '89377623234', 'imikhailov@example.com', '1989-06-23', 'м', 'ул. Красноармейская, д.8, кв.44'),
(8, 'Татьяна Васильева', 'tvasilieva', 'Tanya_V2021', '89021441232', 'tvasilieva@example.com', '1990-05-15', 'ж', 'ул. Зеленая, д.19, кв.105'),
(9, 'Вадим Павлов', 'vpavlov', 'VadiM_P75', '89523495874', 'vpavlov@example.com', '1975-08-30', 'м', 'ул. Жуковского, д.13, кв.9'),
(10, 'Юлия Новикова', 'jnovikova', 'JuliaNew82', '89213752859', 'jnovikova@example.com', '1982-10-12', 'ж', 'ул. Парковая, д.6, кв.23'),
(11, 'Артур Лебедев', 'alebedev', 'ArturLeb47', '89029991230', 'alebedev@example.com', '1997-07-21', 'м', 'ул. Республики, д.11, кв.28'),
(12, 'Мария Орлова', 'morlova', 'Maria0rl', '89163339282', 'morlova@example.com', '1984-01-05', 'ж', 'ул. 8 Марта, д.9, кв.54'),
(13, 'Антон Виноградов', 'avinogradov', 'AntonVino_989', '89015552635', 'avinogradov@example.com', '1989-10-08', 'м', 'ул. Маяковского, д.7, кв.13'),
(14, 'Екатерина Никитина', 'enikitina', 'KatyaNik2020', '89533885260', 'enikitina@example.com', '2000-03-25', 'ж', 'ул. Гоголя, д.24, кв.11'),
(15, 'Георгий Лукин', 'glukin', 'Ge0rgL111', '89098563245', 'glukin@example.com', '1995-02-09', 'м', 'ул. Соловьева, д.10, кв.38'),
(16, 'Наталья Чернышева', 'nchernysheva', 'Nataly333#', '89151757733', 'nchernysheva@example.com', '1989-04-19', 'ж', 'ул. Победы, д.7, кв.22'),
(17, 'Максим Воробьев', 'mvorobiev', 'MaxV0r0b!', '89091583265', 'mvorobiev@example.com', '1996-06-29', 'м', 'ул. Кирова, д.12, кв.45'),
(18, 'Виктория Степанова', 'vstepanova', 'Viktoria42$5', '89675291285', 'vstepanova@example.com', '1982-07-01', 'ж', 'ул. Мамина-Сибиряка, д.4, кв.33'),
(19, 'Федор Жуков', 'fzhukov', 'FedorJ_331!_', '89113293466', 'fzhukov@example.com', '2001-11-30', 'м', 'ул. Блюхера, д.16, кв.8'),
(20, 'Алла Жданова', 'azhdanova', 'AllaZhdano2020!', '89522456398', 'azhdanova@example.com', '1994-09-27', 'ж', 'ул. Энгельса, д.2, кв.55');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Basket`
--
ALTER TABLE `Basket`
  ADD PRIMARY KEY (`basket_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `Cart_item`
--
ALTER TABLE `Cart_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `basket_id` (`basket_id`);

--
-- Индексы таблицы `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`categories_id`);

--
-- Индексы таблицы `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `status` (`status`);

--
-- Индексы таблицы `Oreder_details`
--
ALTER TABLE `Oreder_details`
  ADD PRIMARY KEY (`order_details_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Индексы таблицы `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Индексы таблицы `Statuses`
--
ALTER TABLE `Statuses`
  ADD PRIMARY KEY (`statuses_id`);

--
-- Индексы таблицы `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Basket`
--
ALTER TABLE `Basket`
  MODIFY `basket_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `Cart_item`
--
ALTER TABLE `Cart_item`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `Categories`
--
ALTER TABLE `Categories`
  MODIFY `categories_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `Orders`
--
ALTER TABLE `Orders`
  MODIFY `order_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `Oreder_details`
--
ALTER TABLE `Oreder_details`
  MODIFY `order_details_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `Products`
--
ALTER TABLE `Products`
  MODIFY `product_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `Statuses`
--
ALTER TABLE `Statuses`
  MODIFY `statuses_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `Users`
--
ALTER TABLE `Users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `Basket`
--
ALTER TABLE `Basket`
  ADD CONSTRAINT `basket_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `Cart_item`
--
ALTER TABLE `Cart_item`
  ADD CONSTRAINT `cart_item_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Products` (`product_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `cart_item_ibfk_2` FOREIGN KEY (`basket_id`) REFERENCES `Basket` (`basket_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `Orders`
--
ALTER TABLE `Orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`status`) REFERENCES `Statuses` (`statuses_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `Oreder_details`
--
ALTER TABLE `Oreder_details`
  ADD CONSTRAINT `oreder_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `Orders` (`order_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `oreder_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `Products` (`product_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `Products`
--
ALTER TABLE `Products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`categories_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
