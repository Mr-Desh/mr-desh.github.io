<!DOCTYPE html>
<html lang="en">

<head>
    <title>Project 6 "ROBO SCHOOL"</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.2.1 -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous" />

    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" />

    <!-- FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="../../assets/css/main.css">

    <!-- My CSS -->
    <link rel="stylesheet" href="assets/css/style.css" />
</head>

<body>
    <div id="modal1" class="modal"></div>
    <div id="modal2" class="modal"></div>
    <div id="modal3" class="modal"></div>
    <div id="modal4" class="modal"></div>
    <div id="modal5" class="modal"></div>
    <div id="overlay"></div>    
    <div id="header-portfolio"></div>
    <header>
        <div class="container">
            <div class="row text-center">
                <div class="col-sm col-md-4 col-lg-3 header__logo">robo.school</div>
                <div class="col-sm col-md-4 col-lg-6">
                    <nav>
                        <div class="nav__item"><a href="#about">О школе</a></div>
                        <div class="nav__item"><a href="#coaches">Тренеры</a></div>
                        <div class="nav__item"><a href="#packege">Стоимость</a></div>
                    </nav>
                </div>
                <div class="col-sm col-md-4 col-lg-3 header__phone">+7 800 000 11 22</div>
            </div>
        </div>
    </header>
    <main >
        <div id="up" class="up">UP</div>
        <section class="school">
            <div class="container">
                <div class="row">
                    <div class="col-12-xs col-sm-6 course">
                        <h1>robo school</h1>
                        <p>Курсы повышения квалификации по роботехнике для педагогов начальной школы</p>
                        <div class="school__take-course">Записаться на курс</div>
                    </div>
                    <div class="col-12-xs col-sm-6 text-center">
                        <img src="images/hero-image.png" alt="hero image" />
                    </div>
                </div>
            </div>
        </section>
        <section class="about" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <span>
                            <strong>Robo School</strong> - учреждение для формирования кадрового педагогического резерва в свере робототезники и
                            программирования
                        </span>
                    </div>
                    <div class="text-center text-sm-start col-sm-6 col-xl-3">
                        <p>10</p>
                        УМК по различным направлениям по роботетехнике
                    </div>
                    <div class="text-center text-sm-start col-sm-6 col-xl-3">
                        <p>20</p>
                        Шкоп, в которых запущена работотехника
                    </div>
                    <div class="text-center text-sm-start col-sm-6 col-xl-3">
                        <p>100</p>
                        Педагогов прошедших курсы повышения квалификации
                    </div>
                    <div class="text-center text-sm-start col-sm-6 col-xl-3">
                        <p>10 000</p>
                        Обученных детей на базе собственных центров
                    </div>
                </div>
            </div>
        </section>
        <section class="perspectives">
            <div class="container">
                <div class="row g-5">
                    <div class="col-12">
                        <h2>Что вы получите после курса</h2>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <p>Удостоверение</p>
                        Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <p>Знания</p>
                        По основам разработки учебно-методических комплексов по робототехниук и программированию
                    </div>
                    <div class="col-xs-12 col-sm-4 perspectives__tooltip-toggle">
                        <p>
                            Практику <sup><i class="bi bi-info-circle"></i></sup>
                        </p>
                        <span class="perspectives__tooltip">При наличии свободных мест</span>
                        Возможность пройти практику по преподаванию побототехники на базе R:ED LAB (в оффлайн или онлайн формате)
                    </div>
                </div>
            </div>
        </section>
        <section class="coaches" id="coaches">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Профессиональные тренеры</h2>
                    </div>
                    <div class="col-12">
                        <div class="coaches__slider">
                            <div class="coaches__slider__item">
                                <img src="images/photo_coach-1.jpg" alt="photo coach 1" />
                                <p>Ирина Лайм</p>
                                преподаватель по робототехнике <br />
                                <div id="IrinaLaim" class="more">Подробнее</div>
                            </div>
                            <div class="coaches__slider__item">
                                <img src="images/photo_coach-2.jpg" alt="photo coach 2" />
                                <p>Марина Орлова</p>
                                преподаватель по робототехнике <br />
                                <div id="MarinaOrlova" class="more">Подробнее</div>
                            </div>
                            <div class="coaches__slider__item">
                                <img src="images/photo_coach-3.jpg" alt="photo coach 3" />
                                <p>Максим Петров</p>
                                преподаватель по программированию <br />
                                <div id="MaksimPetrov" class="more">Подробнее</div>
                            </div>
                            <div class="coaches__slider__item">
                                <img src="images/photo_coach-4.jpg" alt="photo coach 4" />
                                <p>Константин Назаров</p>
                                преподаватель по робототехнике <br />
                                <div id="KonstantinNazarov" class="more">Подробнее</div>
                            </div>
                            <div class="coaches__slider__item">
                                <img src="images/photo_coach-5.jpg" alt="photo coach 5" />
                                <p>Лиза Весенняя</p>
                                преподаватель по программированию <br />
                                <div id="LisaVesennyaya" class="more">Подробнее</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="packege" id="packege">
            <div class="container">
                <div class="row packege">
                    <div class="col-12">
                        <h2>Выберите нужный пакет</h2>
                    </div>
                    <div class="col-12 col-sm-12 col-md-4 text-center packege-item__parent">
                        <div class="packege-item">
                            <h3>-- pro --</h3>
                            <h2>20.000 ₽</h2>
                            УМК по робототехнике и программированию
                            <div class="packege__order">Оставить заявку</div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-4 text-center packege-item__parent">
                        <div class="packege-item">
                            <h3>-- robo --</h3>
                            <h2>15.000 ₽</h2>
                            УМК по робототехнике
                            <div class="packege__order">Оставить заявку</div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-4 text-center packege-item__parent">
                        <div class="packege-item">
                            <h3>-- prog --</h3>
                            <h2>10.000 ₽</h2>
                            УМК по программированию
                            <div class="packege__order">Оставить заявку</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="forms">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p>Запишитесь на курс со скидкой 10%</p>
                        Акция действительна до 10 марта 2022 года
                    </div>
                    <div class="col text-center">
                        <form action="" method="POST">
                            <input type="text" name="name" id="name" placeholder="Имя">
                            <input type="number" name="phone" placeholder="Телефон (без +7)">
                            <input type="email" name="email" id="email" placeholder="E-mail">
                            <input type="submit" value="Оформить заявку" class="submit">
                        </form>
                        <?php
                        $output = "";
                        if (
                            isset($_POST["name"]) && ($_POST["name"] != "") && isset($_POST["phone"]) && ($_POST["phone"] != "") &&
                            isset($_POST["email"]) && ($_POST["email"] != "")
                        ) {
                            if ((strlen($_POST["phone"]) == 10)) {
                                $name = $_POST["name"];
                                $phone = $_POST["phone"];
                                $email = $_POST["email"];

                                $output = "
                                            Форма обработана успешно! <br>
                                            Введенные данные: <br>
                                            Вас зовут: $name<br />
                                            Ваш номер телефона: +7 $phone<br />
                                            Ваша почта: $email<br />
                                    ";
                            } else {
                                $output = "
                                        Проверьте правильность ввода номера телефона. Обратите внимание, что следует вводить без +7!
                                    ";
                            }
                        } else {
                            $output = "
                                    Пожалуйста заполните все поля!
                                ";
                        }
                        echo $output;
                        ?>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center col-md-6">ROBO.SCHOOL</div>
                <div class="col-12 text-center col-md-6 text-md-end">+7 800 000 11 22</div>
                <div class="col-12 text-center">
                    <p>© ROBO.SCHOOL</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Main JS -->
    <script src="../../assets/js/main.js"></script>

    <!-- My JavaScript -->
    <script src="assets/js/main.js"></script>
    <!-- Bootstrap JavaScript Libraries -->
    <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>

    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"></script>
</body>

</html>