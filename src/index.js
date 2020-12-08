import "./main.scss"
import "owl.carousel"
import "owl.carousel/src/scss/owl.carousel.scss"

$(document).ready(function () {
  $(".owl-one").owlCarousel({
    loop: true,
    items: 3,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      300: {
        items: 1.2,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 2.5,
        nav: true,
        loop: false
      }
    }
  })
})

$(document).ready(function () {
  $(".owl-two").owlCarousel({
    loop: true,
    items: 4,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      300: {
        items: 1.2,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      },
      1240: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  })
})
