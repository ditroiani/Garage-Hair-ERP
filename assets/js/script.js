var mq = window.matchMedia( "(min-width: 767px)" );

if (mq.matches) {
    document.querySelector('#menu-inferior').className += " flexnav-show";
}