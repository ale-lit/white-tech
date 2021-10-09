$(document).ready(function(){

    $('.city-change__act-city').click(function(){
        // Показываем / Прячем список
        $('.city-change__list').slideToggle(300);
    })

    $('.city-change__list-item').click(function(){
        // Убираем активный класс у всех пунктов
        $('.city-change__list-item').each(function(){
            $(this).removeClass('city-change__list-item_active');
        });
        // Добавляем активный класс выбранному
        $(this).addClass('city-change__list-item_active');
        // Прячем список
        $('.city-change__list').slideToggle(300);
        // Выводим выбранный город
        $cityName = $(this).text();        
        $('.city-change__act-city').text($cityName);
    })

})