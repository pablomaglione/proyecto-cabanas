
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
    var fecha_inicio = document.getElementById('fecha_inicio').value;
    var fecha_fin = document.getElementById('fecha_fin').value;
    var mensaje = document.getElementById('mensaje').value;
    console.log(fecha_fin)
    if (apellido === '' || nombre === '' || email === '' || telefono === '' || fecha_inicio === '' || fecha_fin === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    } else if(fecha_inicio >= fecha_fin){
        alert('La Fecha de Egreso no puede ser igual o menor a la Fechas de Ingreso');
        return false;
    }else {
        alert('su mensaje fue enviado, pronto nos contactaremas con usted.')
        return true;
    }
}