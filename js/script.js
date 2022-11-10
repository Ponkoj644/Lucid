// owl carousal
// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     items: 2,
//     margin: 30,
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     smartSpeed: 500,
//   });
// });

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
