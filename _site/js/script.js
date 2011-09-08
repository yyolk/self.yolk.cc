/* Author:
Joseph Chiocchi
*/


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

