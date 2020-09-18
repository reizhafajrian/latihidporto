const main = () => {

    window.onload = async() => {
        const collapse = document.getElementById('button-program');
        const menu = document.getElementById('collapse-menus');
        const send = document.getElementById('send');
        const popup = document.getElementById('popup');
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