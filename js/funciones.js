function buscarProductos(event) {
    if(event.key == 'Enter') {
        var codigo = document.getElementById('codigo').value;
        alert('Buscando el producto con código: ' + codigo );
        for(var i = 0; i < productos.length; i++) {
            if(productos[i][0] == codigo) {
               /* document.getElementById('nombre').value = productos[i][1];
                document.getElementById('precio').value = productos[i][2];*/
                alert('Producto encontrado: ' + productos[i][1] + ' ' + productos[i][2]);
                break;
            }
        }
    }
}

