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

  $('.offer').click(function () {
    $(this).toggleClass('show-details');
  });

  $('.close-modal').click(function () {
    $(this).parents('.modal-box').toggleClass('opened');
  });

  $('.open-modal').click(function () {
    $(`#${$(this).data().modalId}`).toggleClass('opened');
  });

  $('.answer-head').click(function () {
    $(this).parents('.answer').toggleClass('opened');
  });

  $('.answer-head').click(function () {
    $(this).parents('.answer').toggleClass('opened');
  });

  $('input[type=radio][name=application-type]').change(function () {
    $('.downpayment-input-block').toggle(400);
  });

  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.range').on('input', function () {
    const min = this.min;
    const max = this.max - min;
    const current = this.value - min;
    const percentage = current * 100 / max;

    $(this).css('background', `linear-gradient(90deg, #2b5099, #00979a, #78b801 ${percentage}%, #ced4da ${percentage}%, #ced4da 100%)`);
    $(this).parents('.calculator-block').find('.input.money').val(this.value);
  });

  $('.show-more').click(function () {
    $(this).parent().find('.hideable').fadeToggle("fast", "linear");
    const newText = $(this).data().toggleText;
    $(this).data().toggleText = $(this).html();
    $(this).html(newText);
  });

});
