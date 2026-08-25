function cargarComponent(idContent, archHtml) {
    fetch(archHtml)
        .then(resp=>{
            if(!resp.ok) throw new Error("Error al cargar el archivo HTML" + archHtml);
            return resp.text();
            })
            .then(codigoHtml=>{
                document.getElementById(idContent).innerHTML = codigoHtml;
            })
            .catch(error=>console.error(error));
}
cargarComponent("content-menu", "Modulos/menu.html");
cargarComponent("content-footer", "Modulos/footer.html");

// Escuchamos los clics en todo el documento para controlar el menú desplegable dinámico
document.addEventListener('click', function(evento) {
    // Si el usuario hace clic en el botón de hamburguesa
    if (evento.target.classList.contains('menu-toggle') || evento.target.closest('.menu-toggle')) {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.toggle('activo');
        }
    }
});