// CAN BE EDITED TO USE WITH CSS FRAMEWORK

// When clicking on the header logo, redirect to the main page
const headerLogoEl = document.getElementById('header-logo');
headerLogoEl.addEventListener('click', () => {
    document.location.replace('/');
});

// Highlights the active nav item *NEEDS TO CORRESPOND TO CSS CLASS FOR ACTIVE NAV*
const navItems = document.querySelectorAll('.navItem');