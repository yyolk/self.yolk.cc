/* Author:
Joseph Chiocchi
*/

var col = 1;

$(function(){
    $('.box').each(function(){
        $(this).addClass(function(i){
            if (++col > 3) col = 1;
            return 'col'+col;
        });
    });

});


$(function(){
    var $container = $("#masonry");


    $(window).resize(function(){

        $container.masonry({
          itemSelector: '.box',
            isResizable: false,
            isAnimated: true,
            columnWidth: $container.width() / 4,
            gutterWidth: 0,
           animationOptions: 
          {
            duration: 400,
            easing: 'linear',
            queue: false 
          }
        });
    }).resize();
});




