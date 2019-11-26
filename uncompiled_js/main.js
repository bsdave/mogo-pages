

$(function () {
  $('html').addClass('js');

  initializeTogglers();
  initializeRanges();

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

  $('.close-application-body').click(function () {
    $('.application-body-box').addClass('force-hide');
  });

  $('input[type=radio][name=application-type]').change(function () {
    if ($(this).val() == 'leaseback') {
      $('.downpayment-input-block').fadeOut(400);
    } else {
      $('.downpayment-input-block').fadeIn(400);
    }
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

  $('.show-more').click(function () {
    $(this).parent().find('.hideable').fadeToggle("fast", "linear");
    const newText = $(this).data().toggleText;
    $(this).data().toggleText = $(this).html();
    $(this).html(newText);
  });

  if ($("#floating-application").length > 0) {
    const floatingApplication = new Dragdealer('floating-application', {
      x: 0.5,
      steps: 3,
      callback: function (x) {
        if (x != 0.5) {
          $('.floating-application-box').addClass('opacity');
        }
      }
    });

    $("#open-floating-application").click(function () {
      $('.application-body-box').toggleClass('opened');
      floatingApplication.disable();
    });

    $(".close-application").click(function () {
      $('.application-body-box').toggleClass('opened');
      floatingApplication.enable();
    });
  }

  $('.inputfile').change(function (e) {
    let span = $(this).next('label').find('span');

    span.html(e.target.value.split('\\').pop());
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) {
      $('.floating-application-box').addClass('visible');
      $('.application-body-box').addClass('visible');
    } else {
      $('.floating-application-box').removeClass('visible');
      $('.application-body-box').removeClass('visible');
    };
  });
});

const initializeTogglers = () => {
  const allTogglers = {
    '#open-dropdown-menu': '.navigation-menu.dropdown',
    '#recall-menu-toggle': '.recall-menu',
    '#languages-menu-toggle': '.languages-menu'
  }
  const allTogglersIds = Object.keys(allTogglers);

  for (const [key, value] of Object.entries(allTogglers)) {
    let allExceptCurrent = allTogglersIds.filter(v => v !== key);

    $(key).click(function () {
      $(this).toggleClass('is-active');
      $(value).toggleClass('is-opened');

      for (const [_, elementId] of Object.entries(allExceptCurrent)) {
        $(elementId).removeClass('is-active');
        $(allTogglers[elementId]).removeClass('is-opened');
      };
    });
  }
};

const initializeRanges = () => {
  $('.range').each(function () {
    recalculateRangeValue(this);
  });

  $('.range').on('input', function () {
    recalculateRangeValue(this);
  });
};

const recalculateRangeValue = (range) => {
  const min = range.min;
  const max = range.max - min;
  const current = range.value - min;
  const percentage = current * 100 / max;

  $(range).css('background', `linear-gradient(90deg, #2b5099, #00979a, #78b801 ${percentage}%, #ced4da ${percentage}%, #ced4da 100%)`);
  $(range).parents('.calculator-block').find('.input.money').val(range.value);
}
