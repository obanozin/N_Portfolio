$(function() {
    $('#main-title').hide();
    $('#main-title').fadeIn(2000);
 
    $('.menu-trigger').on('click', function() {
      $(this).toggleClass('active');
      $('#sp-menu').fadeToggle();
      return false;
    });
   });
