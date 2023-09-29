$(document).ready(function() {
    /* Плавная прокрутка меню */
    $('nav a[href^="#"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },500);
        $('nav a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.menu__mobile .nav_list').toggle(500);//меню само свернется при переходе по ссылке
        $('.menu__burger').toggleClass('close');//toggleClass добавляет класс если его неи или убирает класс если он есть
        return false;
    });
    /* Мобильное меню */
    $('.menu__burger').click(function() {
        $('.menu__mobile .nav_list').toggle(500);
        $(this).toggleClass('close');
    });
});

//смена языка
let result = 0;
document.querySelector('.nav_btn-border-1').onclick = function() {
        if (result == 0) {
            document.querySelector(".lang").innerHTML = 'RU'
            result++;
        } else {
            document.querySelector(".lang").innerHTML = 'EN'
            result--;
        } 
    }


//Кнопка с ссылкой 
document.querySelector('.nav_btn-border-2').onclick = function(e) {
    window.location = '#!';
};

document.querySelector('.nav_btn-fill').onclick = function(e) {
    window.location = '#!';
};

document.querySelector('.content_btn').onclick = function(e) {
    window.location = '#!';
};