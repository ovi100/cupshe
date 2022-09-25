$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.scrollup').fadeIn();
      if ($(window).width() > 768) {
        $(".header .searchbox-holder").fadeIn(0);
        $(".header .offer-text").fadeOut(0);
      }
      $(".footer-fixed-nav").removeClass("slide");

    } else {
      $('.scrollup').fadeOut();
      if ($(window).width() > 768) {
        $(".header .offer-text").fadeIn(0);
        $(".header .searchbox-holder").fadeOut(0);
      }
      $(".footer-fixed-nav").addClass("slide");
    }
  });

  if ($(window).width() < 768) {
    $(".sidenav-toggle").click(function (e) {
      e.preventDefault();
      $("body").addClass('scroll-off');
      $(".sidenav").addClass("show-sidenav");
    });

    $(".sidenav-close,.sidenav-overlay").click(function (e) {
      e.preventDefault();
      $("body").removeClass('scroll-off');
      $(".sidenav").removeClass("show-sidenav");
    });
  }

  if ($(window).width() < 993) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".sort-mFilter").addClass('fixed-sort');
      } else {
        $(".sort-mFilter").removeClass('fixed-sort');
      }
    });
  }

  $('.scrollup').click(function () {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
      window.scrollTo(0, 0);
    }
    else {
      $('html,body').animate({
        scrollTop: 0
      }, 500, function () {
        $('html,body').clearQueue();
      });
    }
  });

  // Sidebar Cart JS
  $(".cart-icon,.fixed-nav-cart-icon").click(function (event) {
    event.preventDefault();
    $("body").addClass('scroll-off');
    $(".sidebar-cart-holder").addClass("show-sidebar-cart");
  });

  $(".sidecart-close-button,.sidebar-cart-overlay").click(function (event) {
    event.preventDefault();
    $("body").removeClass('scroll-off');
    $(".sidebar-cart-holder").removeClass("show-sidebar-cart");
  });

  $(".search-input").focus(function () {
    $(".search-suggestions").fadeIn("slow");
  });

  $(".search-input").blur(function () {
    $(".search-suggestions").fadeOut("slow");
  });

  $("#sidebar-toggle").click(function () {
    $("#sidenav").toggleClass("show-sidenav");
  });
  $("#sidenav-overlay").click(function (event) {
    event.preventDefault();
    $("#sidenav").removeClass("show-sidenav");
  });

  // Mobile Filter

  $(".mFilter").click(function () {
    $(".filter-col").addClass("show-collection-filter");
    $("body").addClass('scroll-off');
  });
  $(".filter-close").click(function () {
    $(".filter-col").removeClass("show-collection-filter");
    $("body").removeClass('scroll-off');
  });

  // Mobile Sort Options

  $(".mSort-open").click(function () {
    $(".sort").addClass("mSort-show");
    $("body").addClass('scroll-off');
  });

  $(".mSort-close,.sort-overlay").click(function () {
    $(".sort").removeClass("mSort-show");
    $("body").removeClass('scroll-off');
  });

  $('#home-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  if ($(window).width() < 1024) {
    $('.pd-mobile-slider').slick({
      infinite: false,
      speed: 500,
      slidesToShow: 1
    });
  }

  // Collection Slider/Slick

  $('.collection-slider').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    speed: 800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  // Related Products slider

  $('.related-product-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 701,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      }
    ]
  });

  $(".pzoom").elevateZoom({
    borderSize: 0,
    gallery: 'thumb-control',
    galleryActiveClass: 'active',
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 500,
    zoomWindowWidth: 600,
    zoomWindowHeight: 500,
    zoomWindowOffetx: 10
  });

  $('[data-fancybox]').fancybox({
    protect: true
  });

});
