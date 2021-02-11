$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.mainNav').removeClass('transparent');
      $('.mainNav').addClass('bg-dark');
    } else {
      $('.mainNav').addClass('transparent');
      $('.mainNav').removeClass('bg-dark');
    }
  });

  console.log("HELLO")



