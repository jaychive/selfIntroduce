$(document).ready(function () {
  // 모바일 햄버거 버튼 클릭 시
  $("#allMenu").click(function () {
    $(this).toggleClass('open');
  });

  // 스크롤 시 상단바 디자인 변형
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('body').addClass('scroll');
    } else {
      $('body').removeClass('scroll');
    }
  });

});