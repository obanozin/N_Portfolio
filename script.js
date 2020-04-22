
$(function(){
    $('.main-title').fadeIn(2000);
    imagesChange();
    function imagesChange (){
        var images = [ `url(images/top0.jpg)`, `url(images/top1.jpg)`];
        var backgroundRandom = function(){
            $('.main-top').delay(5000).queue(function(next) {
                $(this).css('background-image',images[1]);
                next();
            });
            $('.main-top').delay(5000).queue(function(next) {
                $(this).css('background-image',images[0]);
                next();
            });
        }
        setInterval(backgroundRandom, 0);        
    }
});


