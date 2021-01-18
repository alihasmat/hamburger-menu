const menuIcon = document.querySelector('.icon');
const mobileMenu = document.querySelector('.mobile__menu')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.remove('icon');
    menuIcon.classList.toggle('cross');
    menuIcon.classList.add('icon');

    if(menuIcon.classList.contains('cross')) {
        mobileMenu.style.display = "block";
        mobileMenu.classList.add('fade-in');
        mobileMenu.classList.remove('fade-out');

    }else {
        mobileMenu.classList.add('fade-out');
        mobileMenu.classList.remove('fade-in');
    }

})