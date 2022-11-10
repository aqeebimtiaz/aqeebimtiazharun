/*!
 * Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Enabling automatically copying email when clicking copy button.
    // Showing a popover when copy to clipboard is completed.
    let copyEmailBtn = document.getElementById('copyEmail');

    new bootstrap.Popover(document.querySelector('[data-bs-toggle]'), {
        placement: 'bottom',
        trigger: 'focus',
        html: true
    });

    //get instance
    let popover_instance = bootstrap.Popover.getInstance(document.querySelector('[data-bs-toggle]'));

    copyEmailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('aqeebimtiaz@gmail.com')
            .then(res => {
                popover_instance.show();
                setTimeout(function () {
                    popover_instance.hide();
                }, 1000);
            });
    });

});