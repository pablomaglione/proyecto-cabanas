function accesoAdministrador() {
    
    var contraseña = prompt("Ingresa la contraseña de administrador:");

    if (contraseña === "123456") {
        
        window.location.href = "/src/templates/productos.html";
    } else {
        alert("Contraseña incorrecta. Acceso denegado.");
    }
}
