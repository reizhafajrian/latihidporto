const main = () => {

    window.onload = async() => {
        const collapse = document.getElementById('button-program');
        const menu = document.getElementById('collapse-menus');
        const send = document.getElementById('send');
        const popup = document.getElementById('popup');
        const menuToggle = document.querySelector('.menu-toggle input');
        const nav = document.querySelector('.nav-bar');
        const button = document.querySelector('.button')
        menuToggle.addEventListener('click', () => {
            if (nav.style.opacity == "1") {
                nav.style.opacity = "0";
                button.style.opacity = "0"
            } else {
                nav.style.opacity = "1";
                button.style.opacity = "1"
            }
        });
        collapse.onclick = () => {
            if (menu.style.display == 'block') {
                menu.style.display = 'none'
            } else {
                menu.style.display = 'block'
            }
        }
        send.onclick = () => {
            popup.style.display = 'block'
            setTimeout(() => {
                popup.style.display = 'none'
            }, 3000);
        }
    }
}
document.addEventListener("DOMContentLoaded", main);