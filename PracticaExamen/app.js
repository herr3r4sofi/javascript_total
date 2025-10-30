let productos = []; 

function agregar(){
    const nombreProducto = document.getElementById('Productos').value.trim();
    const precio = parseFloat(document.getElementById('precio').value.trim());
    const cantidad = parseFloat(document.getElementById('cantidad').value.trim());

    if(!nombreProducto || isNaN(precio) || isNaN(cantidad)){
        alert("Complete todos los campos correctamente");
        return;
    }

    const total = precio * cantidad;

    productos.push({nombre: nombreProducto, precio, cantidad, total});

    const item = document.createElement('li');
    item.textContent = `${nombreProducto} - ₡${precio} x ${cantidad} = ₡${total.toFixed(2)}`;

    const lista = document.getElementById('lista');
    lista.appendChild(item);

    document.getElementById('Productos').value ='';
    document.getElementById('precio').value ='';
    document.getElementById('cantidad').value ='';
}

function factura(){
    const cliente = document.getElementById('cliente').value.trim();
    const descuento = parseFloat(document.getElementById('descuento').value.trim()) || 0;
    const impuesto = parseFloat(document.getElementById('impuesto').value.trim()) || 0;

    if(!cliente){
        alert("Ingrese el nombre del cliente");
        return;
    }

    if(productos.length === 0){
        alert("Agregue al menos un producto");
        return;
    }

    let subtotal = productos.reduce((acc, p) => acc + p.total, 0);
    let mdescuento = subtotal * (descuento / 100);
    let mimpuesto = (subtotal - mdescuento) * (impuesto / 100);
    let totalFinal = subtotal - mdescuento + mimpuesto;

    let detalleProductos = productos.map(p => `${p.nombre} ${p.cantidad} x ₡${p.precio} = ₡${p.total.toFixed(2)}`).join('<br>');

    const resumen = document.getElementById('resumen');
    resumen.innerHTML = `
<p><strong>Cliente:</strong> ${cliente}</p>
<p><strong>Detalle:</strong><br>${detalleProductos}</p>
<p><strong>Subtotal:</strong> ₡${subtotal.toFixed(2)}</p>
<p><strong>Descuento (${descuento}%):</strong> - ₡${mdescuento.toFixed(2)}</p>
<p><strong>Impuesto (${impuesto}%):</strong> +₡${mimpuesto.toFixed(2)}</p>
<p><strong>Total:</strong> ₡${totalFinal.toFixed(2)}</p>
`;
}