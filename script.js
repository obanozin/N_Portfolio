$(function() {
    $('.main-title').fadeIn(2000);
    
    


    //$(window).on('load scroll', function (){
      //$(window).scroll(function (){
        //$('.fadein').each(function(){
            //var position = $(this).offset().top;
            //var scroll = $(window).scrollTop();
            //var windowHeight = $(window).height();
            //if (scroll > position - windowHeight + 300){
                //$(this).addClass('active');
            //};
        //});
    //});
   //});
  });


var picks_src = new Array("images/IMG_20190313_130836.jpg", "images/IMG_20190308_125356.jpg", "images/IMG_20150628_150706.jpg");
var num = -1

slideshow_timer();

function slideshow_timer(){
    if (num == 2){
        num = 0
    }
    else {
        num ++;
    }
    document.getElementById("top-slide").src=picks_src[num];
    setTimeout("slideshow_timer()", 1000); 
}

  //https://linkage-design.net/jquery-scroll-fadein