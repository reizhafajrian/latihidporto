import GetForms from './forms_get.js';
import show from './show.js';

const main = () => {
    const selection = document.querySelector("#kerjasama");
    const nama = document.querySelector("#nama");
    const email = document.querySelector("#email");
    const nomortelfon = document.querySelector("#nomor-telfon");
    const topik = document.querySelector("#text-area");
    const line = document.querySelector('.menu-toggle span:nth-child(2)')

    if (window.performance) {
        nama.value = "";
        email.value = "";
        nomortelfon.value = "";
        topik.value = "";

    }

    const data = new GetForms(selection, nama, email, nomortelfon, topik);
    const button = document.querySelector("#send")
    data.out();
    button.onclick = () => {
        data.out();
    }



    window.onload = async() => {


        show()
    }
}

document.addEventListener("DOMContentLoaded", main);