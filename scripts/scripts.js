$(document).ready(function(){

    // Display list
    $('.city-change__act-city').click(function(){
        // Display / hide list
        $('.city-change__list').slideToggle(300);
    })

    // Select new city
    $('.city-change__list-item').click(function(){
        // Remove active class from all items
        $('.city-change__list-item').each(function(){
            $(this).removeClass('city-change__list-item_active');
        });
        // Add active class to selected item
        $(this).addClass('city-change__list-item_active');
        // Hide list
        $('.city-change__list').slideToggle(300);
        // Change select city
        $cityName = $(this).text();        
        $('.city-change__act-city').text($cityName);
    })

})