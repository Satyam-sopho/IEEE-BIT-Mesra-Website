$(document).ready(function(){

  $('#main-text').hide().delay(200).fadeIn('slow');
  $('.ieee-logo').hide().delay(200).fadeIn('slow');
  $('#scroll-down-icon').hide().delay(200).fadeIn('slow');
  
  //Below code block is for smooth scrolling on clicking of internal links 
  
  $('#slider').click(function(e){
    e.preventDefault();  //To prevent the default action on clicking the internal links
    var linkHref = $(this).attr('href');  
    $('html,body').animate({
      scrollTop: $(linkHref).offset().top
    },700);       //700 milliseconds...
  });

  $('.ieee-logo').hover(
    function(){
      $(this).stop().animate({height: '+=4px'},100);
      $(this).stop().animate({width: '+=6.83px'},100);
    }, function(){
      $(this).stop().animate({height: '-=4px'},100);
      $(this).stop().animate({width: '-=6.83px'},100);
    }
  );
    

});