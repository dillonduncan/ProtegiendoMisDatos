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
cargarComponent("content-menu", "menu.html");
cargarComponent("content-footer", "footer.html");