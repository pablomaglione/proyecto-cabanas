
window.onscroll = function () { stickyNavBar() };

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyNavBar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function validarFormulario() {
    var apellido = document.getElementById('apellido').value;
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje').value;

    if (apellido === '' || nombre === '' || email === '' || telefono === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    } else {
        alert('su mensaje fue enviado, pronto nos contactaremas con usted.')
        return true;
    }
}