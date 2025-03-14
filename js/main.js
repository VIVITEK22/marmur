if ($("#pl-bg").length) {
  LottieInteractivity.create({
    player: "#pl-bg",
    mode: "cursor",

    actions: [
      {
        position: { x: [0.4, 0.54], y: [0, 0.5] },
        type: "loop",
        frames: [0, 29],
      },
      {
        position: { x: [0.55, 0.7], y: [0, 0.5] },
        type: "loop",
        frames: [30, 59],
      },
      {
        position: { x: [0.71, 0.84], y: [0, 0.5] },
        type: "loop",
        frames: [60, 89],
      },
      {
        position: { x: [0.85, 1], y: [0, 0.5] },
        type: "loop",
        frames: [90, 119],
      },
      {
        position: { x: [0.4, 0.54], y: [0.51, 1] },
        type: "loop",
        frames: [120, 149],
      },

      {
        position: { x: [0.55, 0.7], y: [0.51, 1] },
        type: "loop",
        frames: [150, 179],
      },
      {
        position: { x: [0.71, 0.84], y: [0.51, 1] },
        type: "loop",
        frames: [180, 209],
      },
      {
        position: { x: [0.85, 1], y: [0.51, 1] },
        type: "loop",
        frames: [210, 239],
      },
      {
        position: { x: [0, 0.39], y: [0, 1] },
        type: "stop",
        frames: [240],
      },
      {
        position: { x: -1, y: -1 },
        type: "stop",
        frames: [240],
      },
    ],
  });
}
if ($("#hero-video").length) {
  $("body").on("click touchstart", function () {
    const videoElement = document.getElementById("hero-video");
    if (videoElement.playing) {
      // video is already playing so do nothing
    } else {
      videoElement.play();
    }
  });
}

$("[data-fancybox]").fancybox({
  autoFocus: false,
});
$.fancybox.defaults.backFocus = false;

//input placeholder
$(document).on("input", ".keyUp", function () {
  if ($(this).val() != "") {
    $(this).addClass("not-empty");
  } else {
    $(this).removeClass("not-empty");
  }
});
$(document).on("input", ".js-footer-form-input", function () {
  if ($(".js-footer-form-input.not-empty").length != 0) {
    $(".js-footer-form-list").addClass("hover-active");
  } else {
    $(".js-footer-form-list").removeClass("hover-active");
  }
});

//toggle mute video
$(document).on("click", ".js-video-muted-btn", function () {
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $("#hero-video").prop("muted", false);
  } else {
    $("#hero-video").prop("muted", true);
  }
});

//parallax
lax.init();

document.addEventListener(
  "mousemove",
  function (e) {
    lax.__cursorX = e.clientX;
    lax.__cursorY = e.clientY;
  },
  false
);

lax.addDriver("cursorX", function () {
  return lax.__cursorX || 0;
});

lax.addDriver("cursorY", function () {
  return lax.__cursorY || 0;
});

lax.addElements(".parallax-el-1", {
  cursorX: {
    translateX: [
      [0, "screenWidth"],
      [15, -15],
    ],
  },
  cursorY: {
    translateY: [
      [0, "screenHeight"],
      [15, -15],
    ],
  },
});
lax.addElements(".parallax-el-2", {
  cursorX: {
    translateX: [
      [0, "screenWidth"],
      [25, -25],
    ],
  },
  cursorY: {
    translateY: [
      [0, "screenHeight"],
      [25, -25],
    ],
  },
});
lax.addElements(".parallax-el-3", {
  cursorX: {
    translateX: [
      [0, "screenWidth"],
      [40, -40],
    ],
  },
  cursorY: {
    translateY: [
      [0, "screenHeight"],
      [40, -40],
    ],
  },
});

//scroll parallax
lax.addDriver("scrollY", function () {
  return window.scrollY;
});
lax.addElements(".js-home-about", {
  scrollY: {
    translateY: [
      ["elCenterY", "elOutY"],
      [0, "440"],
    ],
  },
});
lax.addElements(".js-home-services", {
  scrollY: {
    translateY: [
      ["elInY", "elOutY"],
      [0, "360"],
    ],
  },
});

//services item hover
if ($(".js-h-services-item").length == 3) {
  $(".js-h-services-item").hover(
    function () {
      $(".js-services-bg").removeClass("active");
      $(".js-services-bg").eq($(this).index()).addClass("active");
      if ($(this).index() == "1") {
        $(".js-h-services-pl").css({
          left: "33.33333333%",
          width: "33.33333333%",
        });
      } else if ($(this).index() == "2") {
        $(".js-h-services-pl").css({
          left: "66.666666666%",
          width: "33.33333333%",
        });
      } else {
        $(".js-h-services-pl").css({
          left: 0,
          width: "33.33333333%",
        });
      }
    },
    function () {
      $(".js-services-bg").removeClass("active");
      $(".js-services-bg").eq(0).addClass("active");
      $(".js-h-services-pl").css({
        left: 0,
        width: "33.33333333%",
      });
    }
  );
} else {
  $(".js-h-services-item").hover(
    function () {
      $(".js-services-bg").removeClass("active");
      $(".js-services-bg").eq($(this).index()).addClass("active");
      if ($(this).index() == "1") {
        $(".js-h-services-pl").css({
          left: "50%",
          width: "50%",
        });
      } else if ($(this).index() == "2") {
        $(".js-h-services-pl").css({
          left: "50%",
          width: "50%",
        });
      } else {
        $(".js-h-services-pl").css({
          left: 0,
          width: "50%",
        });
      }
    },
    function () {
      $(".js-services-bg").removeClass("active");
      $(".js-services-bg").eq(0).addClass("active");
      $(".js-h-services-pl").css({
        left: 0,
        width: "50%",
      });
    }
  );
}

//menu
$("body").append(
  '<style type="text/css">.simple-compensate { margin-right: ' +
    getScrollbarWidth() +
    "px; }</style>"
);
var bodyMargin;
$(document).on("click", ".js-menu-open", function () {
  $(".header").toggleClass("menu-open");
  $(".header-menu").toggleClass("menu-open");
  clearTimeout(bodyMargin);
  if ($(".header-menu").hasClass("menu-open")) {
    $("body").addClass("menu-open");
    $("body").addClass("simple-compensate");
    $(".header").addClass("simple-compensate");
    $(".js-project-list").addClass("simple-compensate");
  } else {
    bodyMargin = setTimeout(function () {
      $("body").removeClass("menu-open");
      $("body").removeClass("simple-compensate");
      $(".header").removeClass("simple-compensate");
      $(".js-project-list").removeClass("simple-compensate");
    }, 400);
  }
});

function getScrollbarWidth() {
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  outer.style.msOverflowStyle = "scrollbar";
  document.body.appendChild(outer);
  const inner = document.createElement("div");
  outer.appendChild(inner);
  var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  if (
    $(window).innerHeight() ==
    $(".main").innerHeight() + $(".footer").innerHeight()
  ) {
    scrollbarWidth = 0;
  }
  return scrollbarWidth;
}

//scroll simple anim
var scrollItems = $(".js-scroll-anim");
scrollItems.addClass("translate-y-anim");

$(window).on("load scroll", function () {
  var scrollCenter = $(window).scrollTop() + $(window).innerHeight() / 2;
  var scrollBottom = $(window).scrollTop() + $(window).innerHeight();
  scrollItems.each(function (i, el) {
    var top = $(el).offset().top;
    if (scrollBottom > top) {
      $(el).addClass("anim-active");
    } else {
      $(el).removeClass("anim-active");
      if ($(el).hasClass("cards__list")) {
        $(el).children(".cards__item").css("padding-top", "0");
      }
    }
  });
  if ($(window).scrollTop() > 0) {
    $(".header").addClass("header-fixed");
    $("body").addClass("header-fixed");
  } else {
    $(".header").removeClass("header-fixed");
    $("body").removeClass("header-fixed");
  }
  if (
    $(window).scrollTop() > 300 &&
    scrollBottom < $(".main").innerHeight() - 200
  ) {
    $(".js-project-list").addClass("hide");
  } else {
    $(".js-project-list").removeClass("hide");
  }
});

$(document).click(function (e) {
  if (
    !$(".js-project-list-wrap").is(e.target) &&
    $(".js-project-list-wrap").has(e.target).length === 0 &&
    !$(".js-projects-open").is(e.target) &&
    $(".js-projects-open").has(e.target).length === 0
  ) {
    $(".js-project-list").removeClass("active");
    $(".js-projects-open").removeClass("active");
  }
});

//portfolio filter
$(".portfolio").css(
  "min-height",
  $(window).innerHeight() - $(".post-title").innerHeight()
);

$(document).on("click", ".js-portfolio-filter", function () {
  if (!$(this).hasClass("active")) {
    $(this).addClass("active").siblings().removeClass("active");
    // projectFilter($(this).data('value'));
    $grid.isotope({ filter: $(this).attr("data-filter") });
  }
  return false;
});

function projectFilter(value) {
  $.ajax({
    url: true_obj.ajaxurl,
    data: {
      tax_value: value,
      action: "project_filter",
    },
    type: "POST",
    beforeSend: function () {
      $("#project-list").addClass("loading");
    },
    success: function (data) {
      $("#project-list").removeClass("loading");
      $("#project-list").html(data);
    },
  });
}

//project list
$(".js-project-list").mouseenter(function () {
  $(".js-project-list-wrap").stop().animate({ scrollTop: 0 }, 0);
});

//sliders
var homeBannerSlider = new Swiper(".home-banner__slider", {
  speed: 700,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 0,
  simulateTouch: false,
  autoplay: {
    delay: 3200,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".home-banner__pagination",
    clickable: true,
    bulletActiveClass: "active",
  },
});
homeBannerSlider.autoplay.stop();
var bannerAutoplay;
var homeSliderLength =
  $(".home-banner__slide").length -
  $(".home-banner__slide.swiper-slide-duplicate").length;
homeBannerSlider.on("slideChange", function () {
  $(".js-h-banner-bg").eq(0).removeClass("anim");
  homeBgSlide(homeBannerSlider.realIndex);
  $(".js-h-banner-current").html("0" + (homeBannerSlider.realIndex + 1));
  if (homeBannerSlider.realIndex + 2 > homeSliderLength) {
    $(".js-h-banner-next").html("01");
  } else {
    $(".js-h-banner-next").html("0" + (homeBannerSlider.realIndex + 2));
  }
});
function homeBgSlide(realIndex) {
  var homeBgIndex = $(".js-h-banner-bg").eq(realIndex);
  $(".js-h-banner-bg").removeClass("active");
  homeBgIndex.addClass("active");
  $(".js-h-banner-bg").find("video").trigger("pause");
  if (homeBgIndex.hasClass("js-video-bg")) {
    homeBgIndex.find("video").trigger("play");
  }
}
$(document).on(
  "click",
  ".home-banner__slide.swiper-slide-next, .js-h-banner-next",
  function () {
    homeBannerSlider.slideNext();
    return false;
  }
);

var jkSlider = new Swiper(".home-jk__slider", {
  speed: 6000,
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  disableOnInteraction: true,
  allowTouchMove: false,
  navigation: {
    prevEl: ".home-jk__prev",
    nextEl: ".home-jk__next",
  },
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
var reviewsSlider = new Swiper(".reviews__slider", {
  speed: 600,
  slidesPerView: 2,
  loop: true,
  spaceBetween: 30,
  autoHeight: true,
  navigation: {
    prevEl: ".reviews__prev",
    nextEl: ".reviews__next",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
  },
});

function preloaderDone() {
  $("body").addClass("anim-load");
  if ($(".home-banner__slider").length) {
    homeBannerSlider.autoplay.start();
  }
}
var $grid;

window.onload = function () {
  setTimeout(function () {
    if (!$(".preloader").hasClass("done")) {
      $(".preloader").addClass("done");
      $(".js-h-banner-bg").eq(0).addClass("anim");
      if ($(".js-h-banner-bg").eq(0).hasClass("js-video-bg")) {
        $(".js-h-banner-bg").eq(0).find("video").trigger("play");
      }
      $("body").stop().animate({ scrollTop: 0 }, 0);
      $("html").stop().animate({ scrollTop: 0 }, 0);
      $grid = $(".portfolio__row-n").isotope({
        itemSelector: ".portfolio__col-n",
        layoutMode: "masonry",
      });
      $grid.isotope({
        filter: $(".js-portfolio-filter.active").attr("data-filter"),
      });
      setTimeout(function () {
        preloaderDone();
        $("body").removeClass("simple-compensate");
        setTimeout(function () {
          $("#hero-video").trigger("play");
        }, 400);
      }, 300);
    }
  }, 400);
};

//forms
var emailRegEx = /^[\w-\.]+@[a-z0-9-]+\.[a-z]{2,12}$/i;

$(document).on("input", ".js-input", function () {
  $(this).removeClass("error");
});

$(".feedback-section__form")
  .find(".js-input")
  .on("input", function () {
    if ($(".feedback-section__form").find(".form-result").hasClass("ok")) {
      $(".feedback-section__form").find(".form-result").removeClass("ok");
    } else if (
      $(".feedback-section__form").find(".form-result").hasClass("error")
    ) {
      $(".feedback-section__form").find(".form-result").removeClass("error");
    }
    if ($(this).val().length > 2) {
        $(this).addClass("not-empty");
      } else {
        $(this).removeClass("not-empty");
      }
      if ($(".feedback-section__form .js-input.not-empty").length >= 1) {
        $(".feedback-section__button").attr("disabled", false);
      } else {
        $(".feedback-section__button").attr("disabled", true);
      }
  });

$(".excursion__form")
  .find(".js-input")
  .on("input", function () {
    if ($(".excursion").find(".form-result").hasClass("ok")) {
      $(".excursion").find(".form-result").removeClass("ok");
    } else if ($(".excursion").find(".form-result").hasClass("error")) {
      $(".excursion").find(".form-result").removeClass("error");
    }
  });

$('input[name="email"]').on("input", function () {
  $('input[name="tel"]').removeClass("error");
  $(this).removeClass('error');
});

$('input[name="tel"]').on("input", function () {
  $('input[name="email"]').removeClass("error");
  $('.excursion__input[name="name"]').removeClass("error");
  $(this).removeClass('error');
});

$('.excursion__input[name="name"]').on("input", function () {
  $(this).removeClass('error');
  $('.excursion__input[name="tel"]').removeClass("error");
});


// new page forms
$(document).on("submit", ".excursion__form", function (e) {
  e.preventDefault();
  const $form = $(this);
  const $name = $form.find('[name="name"]');
  const $tel = $form.find('[name="tel"]');

  if ($name.val().length < 2 && $tel.val().length < 4) {
    $name.addClass("error");
    $tel.addClass("error");
  }

  if ($form.find(".js-input.error").length == 0) {
    $.ajax({
      type: "POST",
      url: site.theme_path + "/inc/forms/excursion-form.php",
      data: $form.serialize(),
      beforeSend: function () {
        $form.addClass("loading");
      },
      success: function (response) {
        $form.trigger("reset");
        $form.removeClass("loading").addClass("success");
        $form.find(".js-input").removeClass("error not-empty");
        if (response) {
          $(".excursion").find(".form-result").addClass("ok");
        } else {
          $(".excursion").find(".form-result").addClass("error");
        }
      },
    });
  }
  return false;
});

$(document).on("submit", ".feedback-section__form", function (e) {
  e.preventDefault();
  const $form = $(this);
  const $name = $form.find('[name="name"]');
  const $last_name = $form.find('[name="last-name"]');
  const $tel = $form.find('[name="tel"]');
  const $msg = $form.find('[name="message"]');

  if ($name.val().length < 2 && $tel.val().length < 2 && $last_name.val().length < 2 && $msg.val().length < 2) {
    $name.addClass("error");
  }

  if ($form.find(".js-input.error").length == 0) {
    $.ajax({
      type: "POST",
      url: site.theme_path + "/inc/forms/feedback-section-form.php",
      data: $form.serialize(),
      beforeSend: function () {
        $form.find(".feedback-section__button").attr("disabled", true);
      },
      success: function (response) {
        $form.find(".feedback-section__button").attr("disabled", false);
        $form.trigger("reset");
        $form.removeClass("loading").addClass("success");
        $form.find(".js-input").removeClass("error not-empty");
        if (response) {
          $form.find(".form-result").addClass("ok");
        } else {
          $form.find(".form-result").addClass("error");
        }
      },
    });
  }
  return false;
});

$(document).on("submit", ".example__form", function (e) {
  e.preventDefault();
  const $form = $(this);
  const $name = $form.find('[name="name"]');
  const $msg = $form.find('[name="msg"]');
  const $tel = $form.find('[name="tel"]');
  const $mail = $form.find('[name="mail"]');

  if ($name.val().length < 2 && $tel.val().length < 2 && $msg.val().length < 2 && $mail.val().length < 2) {
    $name.addClass("error");
  }

  if ($form.find(".js-input.error").length == 0) {
    $.ajax({
      type: "POST",
      url: site.theme_path + "/inc/forms/form-example-project.php",
      data: $form.serialize(),
      beforeSend: function () {
        $form.find(".example__form-button").attr("disabled", true);
      },
      success: function (response) {
        $form.find(".example__form-button").attr("disabled", false);
        $form.trigger("reset");
        $form.removeClass("loading").addClass("success");
        $form.find(".js-input").removeClass("error not-empty");
        if (response) {
          $(".example").find(".form-result").addClass("ok");
        } else {
          $(".example").find(".form-result").addClass("error");
        }
      },
    });
  }
  return false;
});

$(document).on("submit", ".modal__example-form", function (e) {
  e.preventDefault();
  const $form = $(this);
  const $name = $form.find('[name="name"]');
  const $msg = $form.find('[name="msg"]');
  const $tel = $form.find('[name="tel"]');
  const $mail = $form.find('[name="mail"]');

  if ($name.val().length < 2 && $tel.val().length < 2 && $msg.val().length < 2 && $mail.val().length < 2) {
    $name.addClass("error");
  }

  if ($form.find(".js-input.error").length == 0) {
    $.ajax({
      type: "POST",
      url: site.theme_path + "/inc/forms/form-example-project.php",
      data: $form.serialize(),
      beforeSend: function () {
        $form.find(".example__form-button").attr("disabled", true);
      },
      success: function (response) {
        $form.find(".example__form-button").attr("disabled", false);
        $form.trigger("reset");
        $form.removeClass("loading").addClass("success");
        $form.find(".js-input").removeClass("error not-empty");
        if (response) {
          $(".modal").find(".form-result").addClass("ok");
        } else {
          $(".modal").find(".form-result").addClass("error");
        }
      },
    });
  }
  return false;
});

$(document).on("submit", ".js-form-feedback", function () {
  var $form = $(this);
  var $name = $form.find('[name="name"]');
  var $tel = $form.find('[name="tel"]');
  var $email = $form.find('[name="email"]');

  if ($name.val().length < 2) {
    $name.addClass("error");
  }

  if ($tel.val().length < 4 && !emailRegEx.test($email.val())) {
    $tel.addClass("error");
    $email.addClass("error");
  }

  if ($form.find(".js-input.error").length == 0) {
    $.ajax({
      type: "POST",
      url: site.theme_path + "/inc/forms/form-feedback.php",
      data: $(this).serialize(),
      beforeSend: function () {
        $form.addClass("loading");
      },
      success: function (response) {
        $form.trigger("reset");
        $form.removeClass("loading").addClass("success");
        $form.find(".js-input").removeClass("error not-empty");
        if (response) {
          $form.find(".js-form-result").addClass("ok");
        } else {
          $form.find(".js-form-result").addClass("error");
        }
      },
    });
  }
  return false;
});

$(document).on("submit", ".js-form-feedback-simple", function () {
  var $form = $(this);
  var $name = $form.find('[name="name"]');
  var $tel = $form.find('[name="tel"]');

  if ($name.val().length < 2) {
    $name.addClass("error");
  }

  if ($tel.val().length < 4) {
    $tel.addClass("error");
  }

  if ($form.find(".js-input.error").length == 0) {
    $.ajax({
      type: "POST",
      url: site.theme_path + "/inc/forms/form-feedback-simple.php",
      data: $(this).serialize(),
      beforeSend: function () {
        $form.addClass("loading");
      },
      success: function (response) {
        $form.trigger("reset");
        $form.removeClass("loading").addClass("success");
        $form.find(".js-input").removeClass("error not-empty");
        if (response) {
          $form.find(".js-form-result").addClass("ok");
        } else {
          $form.find(".js-form-result").addClass("error");
        }
      },
    });
  }
  return false;
});

// new page functions
const $page = $("html, body");
$('a[href*="#"]').click(function (e) {
  e.preventDefault();
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - $(".header").height(),
    },
    400
  );
  return false;
});

$(".info__block-item").on("mouseover", function () {
  if ($(this).hasClass("info__block--active")) {
    return false;
  }
  $(".info__block--active").removeClass("info__block--active");
  $(this).addClass("info__block--active");

  const number = $(this).data("number");
  if (number == 1) {
    $(".info__line6").css("top", "0");
    $(".info__line2").css("bottom", "0");
    $(".info__line5").css("top", "0");
    $(".info__line5").css("height", "95%");
    $(".info__item-line").css("left", "7%");
    $(".info__line3").css("bottom", "25%");
    $(".info__line8").css("bottom", "9.5%");
    $(".info__line7").css("top", "30%");
    $(".info__span1").css("left", "51%");
    $(".info__span6").css("bottom", "30%");
    $(".info__span4").css("left", "20%");
    $(".info__span2").css("top", "20%");
    $(".info__span3").css("width", "10%");
    $(".info__mobile-span1").css('right', '0');
    $(".info__mobile-span2").css('right', '0');
    $(".info__mobile-span3").css('top', '19%');
    $(".info__mobile-line2").css('height', '70%');
    $(".info__mobile-line3").css('height', '35%');
    $(".info__mobile-line4").css('height', '30%');
  } else {
    const width = $(this).width();
    $(".info__item-line").css("left", `calc(7% + ${width * (number - 1)}px)`);
  }
  if (number == 2) {
    $(".info__line2").css("bottom", "20%");
    $(".info__line6").css("top", "40%");
    $(".info__line5").css("top", "20%");
    $(".info__line5").css("height", "80%");
    $(".info__line3").css("bottom", "25%");
    $(".info__line8").css("bottom", "9.5%");
    $(".info__line7").css("top", "30%");
    $(".info__span1").css("left", "49%");
    $(".info__span6").css("bottom", "48%");
    $(".info__span4").css("left", "20%");
    $(".info__span2").css("top", "20%");
    $(".info__span3").css("width", "10%");
    $(".info__mobile-span3").css('top', '10%');
    $(".info__mobile-span2").css('right', '10%');
    $(".info__mobile-line2").css('height', '50%');
    $(".info__mobile-line3").css('height', '35%');
    $(".info__mobile-line4").css('height', '40%');
  }
  if (number == 3) {
    $(".info__line8").css("bottom", "24%");
    $(".info__line3").css("bottom", "9.5%");
    $(".info__line5").css("top", "0");
    $(".info__line5").css("height", "80%");
    $(".info__line2").css("bottom", "0");
    $(".info__line7").css("top", "30%");
    $(".info__span1").css("left", "51%");
    $(".info__span4").css("left", "24%");
    $(".info__span2").css("top", "24%");
    $(".info__span6").css("bottom", "48%");
    $(".info__span3").css("width", "10%");
    $(".info__mobile-span2").css('right', '27%');
    $(".info__mobile-span3").css('top', '26%');
    $(".info__mobile-line2").css('height', '30%');
    $(".info__mobile-line3").css('height', '25%');
    $(".info__mobile-line4").css('height', '45%');
  }
  if (number == 4) {
    $(".info__line2").css("bottom", "20%");
    $(".info__line6").css("top", "40%");
    $(".info__line3").css("bottom", "25%");
    $(".info__line8").css("bottom", "9.5%");
    $(".info__line7").css("top", "21%");
    $(".info__span6").css("bottom", "30%");
    $(".info__span1").css("left", "49%");
    $(".info__span4").css("left", "24%");
    $(".info__span2").css("top", "24%");
    $(".info__span3").css("width", "7%");
    $(".info__mobile-span3").css('top', '12%');
    $(".info__mobile-span2").css('right', '15%');
    $(".info__mobile-line2").css('height', '15%');
    $(".info__mobile-line3").css('height', '10%');
    $(".info__mobile-line4").css('height', '30%');
  }
});
$(".info__block-item").on("click", function () {
  if (!$(this).hasClass("info__block--active")) {
    $(".info__block--active").removeClass("info__block--active");
    $(this).addClass("info__block--active");
  }
  if ($(this).attr('href') == '') {
    e.preventDefault();
  }
});

$(".cards__list").on("transitionstart", function () {
  if ($(this).hasClass("anim-active")) {
    if ($(window).width() <= 991) {
      $(this)
        .children(".cards__item:nth-of-type(2n)")
        .css("padding-top", "10px");
    } else {
      if ($(this).children(".cards__item--select").data("number") % 2 == 1) {
        $(this)
          .children(".cards__item:nth-of-type(2n)")
          .css("padding-top", "55px");
      } else {
        $(this)
          .children(".cards__item:nth-of-type(2n+1)")
          .css("padding-top", "55px");
      }
    }
  }
});

if (document.querySelector(".result__image-line")) {
  $(".result__image-line").draggable({
    containment: ".result__item",
    axis: "x",
    drag: function (_, ui) {
      ui.position.left = Math.max(32, ui.position.left);
      if (ui.position.left > $(".result__item").width() - 32) {
        ui.position.left = $(".result__item").width() - 32;
      }
      $(this)
        .closest(".result__image-section")
        .children(".result__image.visual")
        .css("width", `${ui.position.left}px`);
    },
  });
}

const resultSwiper = new Swiper(".result__item", {
  slidesPerView: 1,
  allowTouchMove: false,
});

let resultIndex = 0;

$(".result__span-item").on("click", function () {
  if ($(this).hasClass("result__span--active")) {
    return;
  } else {
    $(".result__span--active").removeClass("result__span--active");
    $(this).addClass("result__span--active");
    resultIndex = $(this).data("number");
    resultSwiper.slideTo(+resultIndex);
    $(".result__right--active").removeClass("result__right--active");
    $(`.result__right-body[data-number=${resultIndex}]`).addClass(
      "result__right--active"
    );
  }
});

$('.result__right-button').on('click', function() {
  if (resultSwiper.slideNext()) {
    resultIndex += 1;
    $(".result__span--active").removeClass("result__span--active");
    $(`.result__span-item[data-number="${resultIndex}"]`).addClass("result__span--active");
    $(".result__right--active").removeClass("result__right--active");
    $(`.result__right-body[data-number=${resultIndex}]`).addClass("result__right--active");
  }
});

$('.result__button-next').on('click', function() {
  if (resultSwiper.slideNext()) {
    resultIndex += 1;
    $(".result__span--active").removeClass("result__span--active");
    $(`.result__span-item[data-number="${resultIndex}"]`).addClass("result__span--active");
    $(".result__right--active").removeClass("result__right--active");
    $(`.result__right-body[data-number=${resultIndex}]`).addClass("result__right--active");
  }
});

$('.result__button-prev').on('click', function() {
  if (resultSwiper.slidePrev()) {
    resultIndex -= 1;
    $(".result__span--active").removeClass("result__span--active");
    $(`.result__span-item[data-number="${resultIndex}"]`).addClass("result__span--active");
    $(".result__right--active").removeClass("result__right--active");
    $(`.result__right-body[data-number=${resultIndex}]`).addClass("result__right--active");
  }
});

$(window).on("resize", function (e) {
  $(".result__desc").css("width", $(".result__item").width());
});

const employeesSwiper = new Swiper(".employees__swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
});

$(".employees__item").on("mouseover", function () {
  if ($(this).hasClass("employees__item--active")) {
    return false;
  } else {
    $(".employees__item--active").removeClass("employees__item--active");
    $(this).addClass("employees__item--active");
    const number = $(this).data("image");
    console.log($(`.employees__block-image${number}`));
    $(".employees__image--active").removeClass("employees__image--active");
    $(`.employees__block-image${number}`).css("z-index", `${number}`);
    $(`.employees__block-image${number}`).addClass("employees__image--active");
  }
});

const videoSwiper = new Swiper(".video__swiper-mobile", {
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 27,
});

$(".projects__filters-item").on("click", function () {
  $(".projects__filters-item--active").removeClass(
    "projects__filters-item--active"
  );
  $(this).addClass("projects__filters-item--active");
});

$(".design-list__example-item").each(function () {
  $(this).css("z-index", "-1");
  new Swiper($(this).find(".design-list__example-swiper")[0], {
    slidesPerView: 1,
    navigation: {
      nextEl: $(this).find(".design-list__example-next")[0],
      prevEl: ".design-list__example-prev",
    },
    pagination: {
      el: $(this).find(".design-list__example-pagination")[0],
      clickable: true,
    },
  });
});

$(".design-list__item-button").on("click", function () {
  const number = $(this).closest(".design-list__item").data("number");
  $(`.design-list__example-item:nth-of-type(${number})`).addClass(
    "design-list__example-item--active"
  );
  $(`.design-list__example-item:nth-of-type(${number})`).css("z-index", "120");
});

$(".design-list__example-item").on("click", function (e) {
  if ($(e.target).hasClass("design-list__example-item--active")) {
    $(e.target).removeClass("design-list__example-item--active");
    const timeout = setTimeout(function () {
      $(e.target).css("z-index", "-1");
      clearTimeout(timeout);
    }, 400);
  }
});

new Swiper(".services__reviews-swiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  autoHeight: true,
  pagination: {
    el: $(".services__reviews-pagination")[0],
    clickable: true,
  },
});

let max = 0;

$(".projects__item").each(function (_, el) {
  if ($(el).outerHeight() > max) {
    max = $(el).outerHeight();
  }
});

$(".projects__item").css("height", `${max}px`);

$(window).on('resize', function() {
  max = 0;

  $(".projects__item").each(function (_, el) {
    if ($(el).outerHeight() > max) {
      max = $(el).outerHeight();
    }
  });

  $(".projects__item").css("height", `${max}px`);
});

$('.projects__grid').isotope({ filter: '*' });

$(".projects__filters-item").on("click", function () {
  $(".projects__filters-item--active").removeClass(
    "projects__filters-item--active"
  );
  $(this).addClass("projects__filters-item--active");
  const filter = $(this).attr('data-filter');
  $('.projects__grid').isotope({ filter: filter })
});

$(".modal-button").on("click", function () {
  $('dialog.modal input[name="form-text"]').val('Получить пример дизайн проекта');
  $("dialog.modal .example__title")[0].style.display = 'block';
  $("dialog.modal .example__title--count").css('display', 'none');
  $("dialog.modal .example__title-desc").css('display', 'block');
  $("dialog.modal")[0].show();
  $("dialog.modal").css("z-index", "150");
  $("dialog.modal").addClass("modal--active");
  $(".back").css("z-index", "140");
  $(".back").addClass("back--active");
});

$(".modal-button--count").on("click", function () {
  $('dialog.modal input[name="form-text"]').val('Получить расчёт стоимости');
  $("dialog.modal .example__title")[0].style.display = 'none';
  $("dialog.modal .example__title--count").css('display', 'block');
  $("dialog.modal .example__title-desc").css('display', 'none');
  $("dialog.modal")[0].show();
  $("dialog.modal").css("z-index", "150");
  $("dialog.modal").addClass("modal--active");
  $(".back").css("z-index", "140");
  $(".back").addClass("back--active");
});


$('.back').on('click', function() {
  $('dialog.modal').removeClass('modal--active');
  $('.back').removeClass('back--active');
  const timeout = setTimeout(function() {
    $('dialog.modal')[0].close();
    $('dialog.modal').css('z-index', '-1');
    $('.back').css('z-index', '-1');
    $('.modal__example-form').trigger('reset');
    clearTimeout(timeout);
  }, 500)
});

$('.project__list-row').each(function(_, el) {
  new Swiper(el, {
    slidesPerView: 'auto',
    allowTouchMove: false,
    waitForTransition: false,
    loop: true,
    speed: 2500,
    autoplay: {
      enabled: true,
      delay: 0
    },
    breakpoints: {
      0: {
        spaceBetween: 10,
      },
      992: {
        spaceBetween: 20
      }
    }
  })
});