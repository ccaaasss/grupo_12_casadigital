-- Dumping data for table `audio`

INSERT INTO `audio` (audioLang)
VALUES
("Español"),
("Inglés"),
("Portugués"),
("Francés"),
("Alemán");

-- Dumping data for table `categories`

INSERT INTO `categories` (category_name)
VALUES
("Finanzas"),
("Excel"),
("Desarollo"),
("Fotografía");

-- Dumping data for table `currencies`

INSERT INTO `currencies` (currency)
VALUES
("AR$"),
("USD");

-- Dumping data for table `courses`

INSERT INTO `courses` (creation_date, course_title, short_description, long_description, price, discount, requirements, who_can, top_seller, category_id, audio_id, currency_id,  course_owner, image, video)
VALUES
('2019-05-24','Inversor bursatil','Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.','Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',18219,28,'Nullam sit amet turpis elementum ligula vehicula consequat.','Fusce congue\, diam id ornare imperdiet\, sapien urna pretium nisl\, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',0,1,1,1,'Javier Gómez','course_1.jpg','course_1.mp4'),
('2017-7-12','Educación financiera','In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.','Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes\, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes\, nascetur ridiculus mus. Etiam vel augue.',3779,0,'Nulla nisl. Nunc nisl. Duis bibendum\, felis sed interdum venenatis\, turpis enim blandit mi\, in porttitor pede justo eu massa.','Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede\, venenatis non\, sodales sed\, tincidunt eu\, felis. Fusce posuere felis sed lacus. Morbi sem mauris\, laoreet ut\, rhoncus aliquet\, pulvinar sed\, nisl. Nunc rhoncus dui vel sem.',0,1,1,1,'Javier Gómez','course_2.jpg','course_2.mp4'),
('2020-03-11','Excel Completo - Desde Principiante Hasta Avanzado','Donec diam neque\, vestibulum eget\, vulputate ut\, ultrices vel\, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra\, magna vestibulum aliquet ultrices\, erat tortor sollicitudin mi\, sit amet lobortis sapien sapien non mi.','In hac habitasse platea dictumst. Aliquam augue quam\, sollicitudin vitae\, consectetuer eget\, rutrum at\, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',3811,17,'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.','Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',0,2,3,1,'Diego López','course_3.jpg','course_3.mp4'),
('2020-03-09','Visual Studio Code: Mejora tu velocidad para codificar','Aliquam erat volutpat. In congue. Etiam justo.','Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros\, viverra eget\, congue eget\, semper rutrum\, nulla. Nunc purus. Phasellus in felis.',7492,32,'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.','Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',1,3,3,1,'Fabián Schwartz','course_4.jpg','course_4.mp4'),
('2021-03-05','Finanzas para Emprendedores: Venture Capital','Proin risus. Praesent lectus. Vestibulum quam sapien\, varius ut\, blandit non\, interdum in\, ante.','Donec ut mauris eget massa tempor convallis. Nulla neque libero\, convallis eget\, eleifend luctus\, ultricies eu\, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo\, sollicitudin ut\, suscipit a\, feugiat et\, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue\, diam id ornare imperdiet\, sapien urna pretium nisl\, ut volutpat sapien arcu sed augue.',16131,31,'Nullam orci pede\, venenatis non\, sodales sed\, tincidunt eu\, felis.','Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra\, magna vestibulum aliquet ultrices\, erat tortor sollicitudin mi\, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',1,1,5,1,'Javier Gómez','course_5.jpg','course_5.mp4'),
('2021-03-07','Macros y VBA: Programa\, automatiza y amplía Microsoft Excel.','In blandit ultrices enim. Lorem ipsum dolor sit amet\, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu\, adipiscing molestie\, hendrerit at\, vulputate vitae\, nisl.','Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede\, malesuada in\, imperdiet et\, commodo vulputate\, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet\, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu\, adipiscing molestie\, hendrerit at\, vulputate vitae\, nisl.',9032,22,'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.','Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros\, viverra eget\, congue eget\, semper rutrum\, nulla. Nunc purus.',1,2,1,1,'Diego López','course_6.jpg','course_6.mp4'),
('2020-04-03','Inteligencia Financiera: Guía completa Finanzas Personales','Vivamus metus arcu\, adipiscing molestie\, hendrerit at\, vulputate vitae\, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.','In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio\, condimentum id\, luctus nec\, molestie sed\, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique\, est et tempus semper\, est quam pharetra magna\, ac consequat metus sapien ut nunc.',10329,46,'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.','Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus\, aliquet at\, feugiat non\, pretium quis\, lectus.',0,1,4,1,'Juan Gabriel Gomila Salas','course_7.jpg','course_7.mp4'),
('2018-02-25','Curso Maestro de Python 3: Aprende Desde Cero','Maecenas tristique\, est et tempus semper\, est quam pharetra magna\, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.','Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede\, venenatis non\, sodales sed\, tincidunt eu\, felis. Fusce posuere felis sed lacus. Morbi sem mauris\, laoreet ut\, rhoncus aliquet\, pulvinar sed\, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',3773,28,'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.','Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor\, turpis nec euismod scelerisque\, quam turpis adipiscing lorem\, vitae mattis nibh ligula nec sem.',0,3,1,1,'Diego López','course_8.jpg','course_8.mp4'),
('2019-02-12','React JS - Curso de introducción desde cero y primeros pasos','Mauris enim leo\, rhoncus sed\, vestibulum sit amet. Integer aliquet\, massa id lobortis convallis\, tortor risus dapibus augue\, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.','Quisque porta volutpat erat. Quisque erat eros\, viverra eget\, congue eget\, semper rutrum\, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio\, porttitor id\, consequat in\, consequat ut\, nulla. Sed accumsan felis.',12167,10,'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio\, elementum eu\, interdum eu\, tincidunt in\, leo.','Donec diam neque\, vestibulum eget\, vulputate ut\, ultrices vel\, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra\, magna vestibulum aliquet ultrices\, erat tortor sollicitudin mi\, sit amet lobortis sapien sapien non mi.',1,3,4,1,'Juan Gabriel Gomila Salas','course_9.jpg','course_9.mp4'),
('2021-03-05','Introduction to FHIR','Quisque erat eros\, viverra eget\, congue eget\, semper rutrum\, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.','Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes\, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes\, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',4072,21,'Phasellus in felis.','Proin risus. Praesent lectus. Vestibulum quam sapien\, varius ut\, blandit non\, interdum in\, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',0,3,2,1,'Juan Gabriel Gomila Salas','course_10.jpg','course_10.mp4'),
('2021-03-12','Tablas Dinámicas: Análisis de datos en Microsoft Excel.','Domina las Tablas Dinámicas. Aprende la herramienta más potente de Excel para obtener estadísticas sin crear fórmulas.','Utilizar la herramienta más potente disponible en Excel para analizar datos. Podrán analizar datos sin crear fórmulas\, con tan solo unos clics de ratón.
\nCrear\, modificar\, actualizar\, configurar y eliminar Tablas Dinámicas en las que mostrar diferentes tipos de resultados y visualizaciones.
\nCrear Gráficos Dinámicos con los que mostrar los resultados de las Tablas Dinámicas de una manera más visual\, pero sin perder la funcionalidad de las Tablas.
\nUtilizar datos externos para sus análisis en Tablas Dinámicas: Access\, archivos de texto\, CSV e incluso aprenderá a combinar diferentes archivos de una carpeta para su análisis.
\nTransformar y filtrar la información que alimenta a una Tabla Dinámica usando Power Query.
\nDiseñar modelos de datos con Power Pivot y sin él\, para poder crear tablas dinámicas utilizando varios orígenes de datos\, por ejemplo varias tablas de Excel.
\nAutomatizar con Macros el trabajo con Tablas Dinámicas para ser todavía más eficientes en nuestros análisis.
\nDiseñar Cuadros de Mando o Dashboardas en los que integrar todas estas funcionalidades que veremos en el curso.',6450,10,'Conocimiento básico de Excel\, solo necesitas saber desenvolverte con soltura por el programa.','Publico en general',0,2,2,1,'Diego López','course_11.jpg','course_11.mp4'),
('2021-03-12','Universidad Excel 2021','Domina las Tablas Dinámicas. Aprende la herramienta más potente de Excel para obtener estadísticas sin crear fórmulas.','Utilizar la herramienta más potente disponible en Excel para analizar datos. Podrán analizar datos sin crear fórmulas\, con tan solo unos clics de ratón.
\nCrear\, modificar\, actualizar\, configurar y eliminar Tablas Dinámicas en las que mostrar diferentes tipos de resultados y visualizaciones.
\nCrear Gráficos Dinámicos con los que mostrar los resultados de las Tablas Dinámicas de una manera más visual\, pero sin perder la funcionalidad de las Tablas.
\nUtilizar datos externos para sus análisis en Tablas Dinámicas: Access\, archivos de texto\, CSV e incluso aprenderá a combinar diferentes archivos de una carpeta para su análisis.
\nTransformar y filtrar la información que alimenta a una Tabla Dinámica usando Power Query.
\nDiseñar modelos de datos con Power Pivot y sin él\, para poder crear tablas dinámicas utilizando varios orígenes de datos\, por ejemplo varias tablas de Excel.
\nAutomatizar con Macros el trabajo con Tablas Dinámicas para ser todavía más eficientes en nuestros análisis.
\nDiseñar Cuadros de Mando o Dashboardas en los que integrar todas estas funcionalidades que veremos en el curso.',7250,10,'Conocimiento básico de Excel\, solo necesitas saber desenvolverte con soltura por el programa.','Publico en general',1,2,2,1,'Profesor Ejemplo','course_12.jpg','course_12.mp4'),
('2021-03-12','Fotografía Masterclass','La Mejor Clase de Fotografía Digital en Línea: Cómo tomar fotos increíbles para principiantes y fotógrafos avanzados','Sabrás cómo tomar fotos increíbles que impresionan a tu familia y amigos
\nSabrá cómo funciona realmente la cámara\, por lo que puede tomar mejores fotos con la configuración manual
\nSabrás cómo fotografiar en diferentes escenarios como retratos de familia\, paisajes\, aérea\, producto\, vida silvestre y mucho más.
\nSabrás cómo componer imágenes bellamente con reglas básicas de fotografía.
\nSabrás cómo iluminar tus sujetos con flash y luz natural.
\nSabrás editar tus fotos como un profesional.
\nSabrás cómo hacer dinero con la fotografía.
\nSabrás cómo tomar mejores fotos con tus teléfonos inteligentes.',2675,5,'¡Debería estar emocionado de aprender fotografía y listo para actuar!
\nNo se requiere una cámara elegante\, cualquier cámara lo ayudará a aprender a medida que le indiquemos actividades prácticas.
\nNo se requieren conocimientos previos de fotografía.','Quien quiera tomar mejores fotos.
\nAbsolutos principiantes que quieren convertirse en fotógrafos expertos.',1,4,2,1,'Profesor Ejemplo','course_13.jpg','course_13.mp4'),
('2021-03-12','Guia Compelta de Fotografía','La Mejor Clase de Fotografía Digital en Línea: Cómo tomar fotos increíbles para principiantes y fotógrafos avanzados','Sabrás cómo tomar fotos increíbles que impresionan a tu familia y amigos
\nSabrá cómo funciona realmente la cámara\, por lo que puede tomar mejores fotos con la configuración manual
\nSabrás cómo fotografiar en diferentes escenarios como retratos de familia\, paisajes\, aérea\, producto\, vida silvestre y mucho más.
\nSabrás cómo componer imágenes bellamente con reglas básicas de fotografía.
\nSabrás cómo iluminar tus sujetos con flash y luz natural.
\nSabrás editar tus fotos como un profesional.
\nSabrás cómo hacer dinero con la fotografía.
\nSabrás cómo tomar mejores fotos con tus teléfonos inteligentes.',13125,15,'¡Debería estar emocionado de aprender fotografía y listo para actuar!
\nNo se requiere una cámara elegante\, cualquier cámara lo ayudará a aprender a medida que le indiquemos actividades prácticas.
\nNo se requieren conocimientos previos de fotografía.','Quien quiera tomar mejores fotos.
\nAbsolutos principiantes que quieren convertirse en fotógrafos expertos.',0,4,2,1,'Profesor Ejemplo','course_14.jpg','course_14.mp4'),
('2021-03-12','Edición/Fotografía de Bodas & Sesiones','La Mejor Clase de Fotografía Digital en Línea: Cómo tomar fotos increíbles para principiantes y fotógrafos avanzados','Sabrás cómo tomar fotos increíbles que impresionan a tu familia y amigos
\nSabrá cómo funciona realmente la cámara\, por lo que puede tomar mejores fotos con la configuración manual
\nSabrás cómo fotografiar en diferentes escenarios como retratos de familia\, paisajes\, aérea\, producto\, vida silvestre y mucho más.
\nSabrás cómo componer imágenes bellamente con reglas básicas de fotografía.
\nSabrás cómo iluminar tus sujetos con flash y luz natural.
\nSabrás editar tus fotos como un profesional.
\nSabrás cómo hacer dinero con la fotografía.
\nSabrás cómo tomar mejores fotos con tus teléfonos inteligentes.',7590,30,'¡Debería estar emocionado de aprender fotografía y listo para actuar!
\nNo se requiere una cámara elegante\, cualquier cámara lo ayudará a aprender a medida que le indiquemos actividades prácticas.
\nNo se requieren conocimientos previos de fotografía.','Quien quiera tomar mejores fotos.
\nAbsolutos principiantes que quieren convertirse en fotógrafos expertos.',0,4,2,1,'Profesor Ejemplo','course_15.jpg','course_15.mp4'),
('2021-03-12','Curso de fotografía digital CON PRÁCTICAS','La Mejor Clase de Fotografía Digital en Línea: Cómo tomar fotos increíbles para principiantes y fotógrafos avanzados','Sabrás cómo tomar fotos increíbles que impresionan a tu familia y amigos
\nSabrá cómo funciona realmente la cámara\, por lo que puede tomar mejores fotos con la configuración manual
\nSabrás cómo fotografiar en diferentes escenarios como retratos de familia\, paisajes\, aérea\, producto\, vida silvestre y mucho más.
\nSabrás cómo componer imágenes bellamente con reglas básicas de fotografía.
\nSabrás cómo iluminar tus sujetos con flash y luz natural.
\nSabrás editar tus fotos como un profesional.
\nSabrás cómo hacer dinero con la fotografía.
\nSabrás cómo tomar mejores fotos con tus teléfonos inteligentes.',11000,0,'¡Debería estar emocionado de aprender fotografía y listo para actuar!
\nNo se requiere una cámara elegante\, cualquier cámara lo ayudará a aprender a medida que le indiquemos actividades prácticas.
\nNo se requieren conocimientos previos de fotografía.','Quien quiera tomar mejores fotos.
\nAbsolutos principiantes que quieren convertirse en fotógrafos expertos.',1,4,2,1,'Profesor Ejemplo','course_16.jpg','course_16.jpg');

-- Dumping data for table `roles`

INSERT INTO `roles` (role_name)
VALUES
("user"),
("admin");

-- Dumping data for table `subcategories`

INSERT INTO `subcategories` (id_category, subcategory_name)
VALUES
(1, 'subcategoria1'),
(2, 'subcategoría2'),
(3, 'subcategoría3'),
(4, 'subcategoría4');

-- Dumping data for table `subtitles`

INSERT INTO `subtitles` (ccLang)
VALUES
("Español"),
("Inglés"),
("Portugués"),
("Francés"),
("Alemán");

-- Dumping data for table `subtitles`

INSERT INTO `course_subtitle` (id_course, id_subtitle)
VALUES
(1, 3),
(2, 5),
(3, 2),
(4, 2),
(5, 2),
(6, 4),
(7, 2),
(8, 4),
(9, 2),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1);

-- Dumping data for table `users`

INSERT INTO `users` (first_name, last_name, email, password, birth_date, image, role_id)
VALUES
('Flavio','Salinas','flavio@hotmail.com','$2b$10$2LRXUxYMjazn/i6.EyRuLuYoBoxsWCJt300XrZbXrudA5D6RBIsFq','1972-11-30','img-1616548415996.jpg',2),
('Juan','Pérez','juan@gmail.com','$2b$10$.u7FCu5Ug0WJ/UpGIG9tG.Wl7Ll2Mj3y4A1NHii0BT6IcNFHlaoQi','1986-08-11','default-avatar.jpg',1);