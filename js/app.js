$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > 50);
  });
});
