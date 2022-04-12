function togglemenu(){
    let nav = document.getElementById('nav-js');
    nav.classList.toggle('cabecalho-nav');
    button_menu.classList.toggle('cabecalho-button-active');
}

let button_menu = document.getElementById('button-js');

button_menu.addEventListener('click', togglemenu);