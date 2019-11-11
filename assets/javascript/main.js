$(function () {
  $('#open-dropdown-menu').click(function () {
    $(this).toggleClass('is-active');
    $('.navigation-menu.dropdown').toggleClass('is-opened');
  });

  $('#recall-menu-toggle').click(function () {
    $(this).toggleClass('is-active');
    $('.recall-menu').toggleClass('is-opened');
  });

  $('#languages-menu-toggle').click(function () {
    $(this).toggleClass('is-active');
    $('.languages-menu').toggleClass('is-opened');
  });

  
});
