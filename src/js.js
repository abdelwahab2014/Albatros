function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });


//control navbar collapse
$(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse collapse show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });
});
 





//https://script.google

//https://script.google.com/macros/s/AKfycbz5eMi-3xklbB98qY9UPLNhjTYDBM9IbpPfDYNKId702t0ZVp7mXzCWi3clpY4xfOBO/exec




$(window).on('resize', function() {
  var win = $(this);
  if (win.width() < 600) {

    $('#navbar_id').addClass('container');

  } else {
    $('#navbar_id').removeClass('container');
  }
});