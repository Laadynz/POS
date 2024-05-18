var total = 0;

function buscarProductos(event) {
    if(event.key == 'Enter') {
        var codigo = document.getElementById('codigo').value;
        var control = false;
       /* alert('Buscando el producto con código: ' + codigo );*/
        for(var i = 0; i < productos.length; i++) {
            if(productos[i][0] == codigo) {
               /* document.getElementById('nombre').value = productos[i][1];
                document.getElementById('precio').value = productos[i][2];*/
                /*alert('Producto encontrado: ' + productos[i][1] + ' ' + productos[i][2]);*/
                var tabla  = document.getElementById('tbody1');
                var fila = tabla.insertRow();
                var celda0 = fila.insertCell(0);
                celda0.innerHTML = "1";
                var celda1 = fila.insertCell(1);
                celda1.innerHTML = productos[i][1];
                var celda2 = fila.insertCell(2);
                celda2.innerHTML = productos[i][2];
                var celda3 = fila.insertCell(3);
                celda3.innerHTML = productos[i][2];
                total += productos[i][2];
                document.getElementById('total').textContent = total;
                control = true;
                document.getElementById('codigo').value = '';
                break;

            }
        }   
        if(!control)

        alert('Producto no encontrado');

    }
}

