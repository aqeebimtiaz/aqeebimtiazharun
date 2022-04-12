(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Enabling automatically copying email when clicking copy button.
  // Showing a popover when copy to clipboard is completed.
  let copyEmailBtn = $('#copyEmail');
  copyEmailBtn.popover({
    "content": "Copied!",
    "placement": "bottom"
  });
  copyEmailBtn.click(() => {
    navigator.clipboard.writeText('aqeebimtiaz@gmail.com')
      .then(res => {
        $('.popover').popover('show');
        setTimeout(function(){$('.popover').popover('hide')}, 1000);
      })
  });

  // Dismiss all popovers by clicking outside
  $('html').on('click', function(e) {
    if (typeof $(e.target).data('original-title') == 'undefined') {
      $('[data-original-title]').popover('hide');
    }
  });

})(jQuery); // End of use strict
