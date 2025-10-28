function agregar(){
    const input = document.getElementById('Productos');
    const lista = document.getElementById('listaProductos');
    const texto = input.value.trim();

    if(texto !==''){
        const item = document.createElement('li');
        item.textContent = texto;
        lista.appendChild(item);
        input.value = ''; 
    }

}