function buscarProductos(event) {
    if(event.key == 'Enter') {
        var codigo = document.getElementById('codigo').value;
        alert('Buscando el producto con código: ' + codigo );
    }
}