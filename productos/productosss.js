const input = document.querySelector("#inputproductos");
const button = document.querySelector("#button");
const productoscontainer = document.querySelector(".apiproducto");
var carritoLista = []   

button.addEventListener('click', (e) => {
    e.preventDefault();
    traerProducto(input.value);

})

function traerProducto(producto) {
    fetch(`https://fakestoreapi.com/products/${producto}`)
        .then((res) => res.json())
        .then((data) => {
            crearProducto(data);

        });


}

function crearProducto(producto) {
    const imagen = document.getElementById('img');
    imagen.src = producto.image;

    const titulo = document.getElementById('nomproducto');
    titulo.textContent = producto.title;

}

function añadirProd() {
    fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res => res.json())
        .then(json => console.log(json))
    alert("Se añadió un producto")

}

function editarProd() {
    fetch('https://fakestoreapi.com/products/7', {
        method: "PUT",
        body: JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res => res.json())
        .then(json => console.log(json))
    alert("Se editó un producto")
}


// function eliminarProd() {
//     fetch('https://fakestoreapi.com/products/7', {
//         method: "DELETE"
//     })
//         .then(res => res.json())
//         .then(json => console.log(json))
//     alert("Se eliminó un producto")
// }

const listarProductos = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {
        body += `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].title}</td>
                    <td>${data[i].price}</td>
                    <td>${data[i].description}</td>
                    <td>${data[i].category}</td>
                    <td><img src="${data[i].image}" style="width: 100px; height: 100px;"></td>
                    <td> <button id ="button" type="submit" class="btn btn-primary" onclick="eliminarProd()"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-x" viewBox="0 0 16 16">
                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zm6.339-1.577A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                    <path d="M11.854 10.146a.5.5 0 0 0-.707.708L12.293 12l-1.146 1.146a.5.5 0 0 0 .707.708L13 12.707l1.146 1.147a.5.5 0 0 0 .708-.708L13.707 12l1.147-1.146a.5.5 0 0 0-.707-.708L13 11.293l-1.146-1.147z"/>
                  </svg> </button> <br>
                    
                    
                    <button id="button" type="submit" class="btn btn-primary" onclick="editarProd()"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg> </button> 
                    </td>

                </tr>`
    }
    document.getElementById('datat').innerHTML = body
    //console.log(body)
}
function Listar() {
    let producto = `https://fakestoreapi.com/products`;
    fetch(producto)
        .then(res => res.json())
        .then(res => listarProductos(res))
        .catch(error => console.log(error))
}


const productosCat = (prod) => {
    let body = ''
    for (var i = 0; i < prod.length; i++) {
        body += ` 
                <div class="product-container mt-4 produc">
                    
                    <hr/>
                    
                    <img class="imagen_producto" src="${prod[i].image}" >
                    
                    <div class="container">
                        <hr/>
                        <h2>${prod[i].price}$</h2>
                        
                        <button class="boton_comprar" onclick="agregar_al_carrito_click(${prod[i].id})">Añadir al carrito</button>

                    </div>
                </div>`
    }
    document.getElementById('prods').innerHTML = body
}

function catalogoProd() {
    let catalogo = `https://fakestoreapi.com/products`;
    fetch(catalogo)
        .then(res => res.json())
        .then(res => productosCat(res))
        .catch(error => console.log(error))
}




function agregar_al_carrito_click(prod) {

    fetch(`https://fakestoreapi.com/products/${prod}`)
        .then(res => res.json())
        .then(json => mostrarCarrito(carritoLista.push(json)))
}



const mostrarCarrito = () => {
    if (carritoLista[0] == null) {
        alert("Carrito vacío") 
    }
    else {

        let body = ''

        for (var i = 0; i < carritoLista.length; i++) {
            
            /*const tr = document.createElement('tr');
            tr.classList.add("itemCarrito");*/

            body += ` 
                    <tr class="itemCarrito">
                        <td>${carritoLista[i].id}</td>
                        <td class="title" >${carritoLista[i].title}</td>
                        <td>${carritoLista[i].price}</td>
                        <td>${carritoLista[i].description}</td>
                        <td>${carritoLista[i].category}</td>
                        <td><img src="${carritoLista[i].image}" style="width: 100px; height: 100px;"></td>
                        <td> 
                            <input ${carritoLista[i].cantidad} class="cambiarCantidad" type="number" min="1" value="0" style="with: 100px;"><br><br><br><br>
                            <button class="eliminar btn btn-danger" onclick="eliminarProd()">Eliminar</button>    
                        </td>
                    </tr>
                    `
                
        
        }
        document.getElementById('prodCarrito').innerHTML = body;

     
        /*tr.querySelector(".cambiarCantidad").addEventListener(
            "change",
            cambiarCantidad()
        );*/
    }
    totalPrecio()
    
}

function totalPrecio(){
    
    let sumaCarrito = 0;

    carritoLista.forEach(carritoLista => {
        sumaCarrito += carritoLista.price;
        document.getElementById('totalCarrito').innerHTML =
        `
        <h4>Total: ${sumaCarrito.toFixed(2)}</h4>
        `
    });
}

function cambiarCantidad(event){
    const cantidad = event.target;

    const tr = cantidad.closest('.itemCarrito');

    const title = tr.querySelector(".title").textContent;

    carritoLista.forEach((item) =>{
        if(item.title == title){
            cantidad.value < 1 ? (cantidad.value = 1) : cantidad.value;
            item.cant = cantidad.value;
            totalPrecio();
        }
    });
    
}

const eliminarProd = () => {
    fetch(`https://fakestoreapi.com/products/`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(res => eliminarProducto(res))
        alert("Se eliminó un producto")
}

function eliminarProducto(){
    
    for (let i = 0; i < carritoLista.length; i++) {
        if (carritoLista[i].id == id) {

            carritoLista[i].splice(i, 1);
        }
    }

    console.log(carritoLista)
}















