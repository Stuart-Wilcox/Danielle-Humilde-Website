/**
 * navbar.js
 * 
 * This module regards the logic for the navbar
 */
(function(){
    let currentPage = document.querySelector('#work-page');

    // unhide current page
    currentPage.classList.remove('hidden');

    const navbarItems = [
        {
            link: () => document.querySelector('#home-link'),
            page: () => document.querySelector('#work-page'),
        },
        {
            link: () => document.querySelector('#work-link'),
            page: () => document.querySelector('#work-page'),
        },
        {
            link: () => document.querySelector('#about-link'),
            page: () => document.querySelector('#about-page'),
        },
        {
            link: () => document.querySelector('#contact-link'),
            page: () => document.querySelector('#contact-page'),
        },
        {
            link: () => document.querySelector('#resume-link'),
            page: () => null,
            url: 'static/Danielle-Humilde-Resume.pdf',
        },
    ];

    const showPage = (page) => {
        currentPage.classList.add('hidden');
        page().classList.remove('hidden');
        currentPage = page();
    };
    
    const initNavbar = () => {
        navbarItems.forEach(({ link, page, url }) => {
            if (url) {
                // this is a good trick for programmatically downloading files
                link().addEventListener('click', () => {
                    const link = document.createElement('a'); // create anchor tag
                    link.setAttribute('href', url); // add the url to href
                    link.setAttribute('target', '_blank'); // open in new tab
                    link.setAttribute('style', 'display: none;'); // hidden
                    document.body.appendChild(link); // add the anchor to DOM
                    link.click(); // click the link, which should open new tab
                    document.body.removeChild(link); // remove the anchor from the DOM
                });
            }
            else {
                link().addEventListener('click', () => showPage(page));
            }
        });
    };

    // initialize navbar when ready
    document.addEventListener('DOMContentLoaded', () => initNavbar());
}());