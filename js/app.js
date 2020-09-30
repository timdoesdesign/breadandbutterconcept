$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > 50);
  });
});

$("#submit").click(function(event){
  event.preventDefault();
});
