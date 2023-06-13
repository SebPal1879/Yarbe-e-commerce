//Estrutura jsson para llamar desde la base de datos
var a;

$.ajax({
    type: "GET",
    url: "http://localhost/Yarbe/Yarbe-e-commerce/Adminsitrador/php/getproductos.php",
    data: "data",
    dataType: "json",
    success: function (data) {
        a = data;
    },

    async: false
});

// Llamada a la función
console.log(a);

var productos = [];
// productos = data;
// console.log(productos);

for (let i = 0; i < a.length; i++) {
    productos.push(a[i]);
}

console.log(productos[0]);


console.log(productos);


const contenerProductos = document.querySelector("#contendor-productos");
const botonCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let btnsAddToCart = document.querySelectorAll(".agregar-producto");
const AtotalCartItems = document.querySelector("#cart-items");

let storedCartItems = localStorage.getItem("items-in-cart");
storedCartItems = JSON.parse(storedCartItems);

let viewProduct = document.querySelectorAll(".producto-imagen");

function cargarProducto(productoselegidos) {
    contenerProductos.innerHTML = "";
    productoselegidos.forEach(producto => {
        console.log(producto.mediop);
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `<a href="../product page/index.html">
        <img class="producto-imagen" src="../stock/${producto.imagen}" alt="${producto.titulo}"></a>
                    <div class="producto-detalle">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">Product code: ${producto.code}</p>
                        <p class="producto-precio">Content: ${producto.content}</p>
                        <p class="producto-precio">Cost: $${producto.cost}</p>
                        <p class="producto-precio">Payment method: ${producto.mediop}</p>
                        <button class="agregar-producto ${producto.mediop}" id="${producto.idname}">Add</button>
                    </div>
                    `;

        contenerProductos.append(div);
    })
    updateAddBtns();
    viewProducts();

}

cargarProducto(productos);
botonCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        
        if (e.currentTarget.id != "All") {
            const productoBoton = productos.filter(producto => producto.namec === e.currentTarget.id);
            console.log(productoBoton);
            cargarProducto(productoBoton);
        } else {

            tituloPrincipal.innerText = "All Products";
            cargarProducto(productos);
        }
        disable();

    })
});


function updateAddBtns() {
    btnsAddToCart = document.querySelectorAll(".agregar-producto");

    btnsAddToCart.forEach(button => {
        button.addEventListener("click", addToCart);
        console.log(button);
    });
}

let cartProducts;
let cartProductsLS = localStorage.getItem("items-in-cart");
console.log(cartProductsLS);

if (cartProductsLS) {

    cartProducts = JSON.parse(cartProductsLS);
    updateTotalCartItems();

} else {
    cartProducts = [];
}

disable();
function disable() {
    // console.log(cartProducts[0].mediop);
    var mt2 = cartProducts[0].mediop;
    btnsAddToCart = document.querySelectorAll(".agregar-producto");

    btnsAddToCart.forEach(button => {
        if (!(button.matches('.Cash')) && (mt2 == "Cash")) {
            console.log(button);
            console.log(button.id + "tiene 2");
            button.disabled = true;
            button.classList.add("disabledBtn")
        }
        else if ((button.matches('.Cash')) && !(mt2 == "Cash")) {
            console.log(button);
            console.log(button.id + "tiene 1");
            button.disabled = true;
            button.classList.add("disabledBtn")
        }
    })
}

function addToCart(e) {
    const uid = e.currentTarget.id;
    console.log(uid);
    const addedProduct2 = productos.find(producto => producto.idname === uid);
    console.log(addedProduct2);
    mt = addedProduct2.mediop;
    // console.log(mt);
    // console.log("hola");
    btnsAddToCart.forEach(button => {
        console.log(button.matches('.Cash') == false);
        console.log(mt);
        console.log(button.id);
        if (!(button.matches('.Cash')) && (mt == "Cash")) {
            console.log(button);
            console.log(button.id + "tiene 2");
            button.disabled = true; 
            button.classList.add("disabledBtn")
        }
        else if ((button.matches('.Cash')) && !(mt == "Cash")) {
            console.log(button);
            console.log(button.id + "tiene 1");
            button.disabled = true;
            button.classList.add("disabledBtn")
        }
        // if (cartProducts.some(producto => producto.id === uid)) {
        //     const index2 = cartProducts.findIndex(producto => producto.id === uid);
        //     console.log(cartProducts[index2]);
        //     console.log("Ward");
        // }

    });
    console.log(uid);
    const addedProduct = productos.find(producto => producto.idname === uid);

    if (cartProducts.some(producto => producto.idname === uid)) {
        const index = cartProducts.findIndex(producto => producto.idname === uid);
        cartProducts[index].cantidad++;
    } else {
        addedProduct.cantidad = 1;
        cartProducts.push(addedProduct);
    }

    updateTotalCartItems();

    localStorage.setItem("items-in-cart", JSON.stringify(cartProducts));
}

function updateTotalCartItems() {
    let totalCartItems = cartProducts.reduce((i, producto) => i + producto.cantidad, 0);
    AtotalCartItems.innerText = totalCartItems;
}

function viewProducts() {
    viewProduct = document.querySelectorAll(".producto-imagen");

    viewProduct.forEach(button => {
        button.addEventListener("click", productInfo);
    });
}

function productInfo(e) {
    const selected = e.currentTarget.alt;
    console.log("selected " + selected);
    const addedProduct = productos.find(producto => producto.titulo === selected);
    console.log(addedProduct);
    localStorage.setItem("productToSee", JSON.stringify(addedProduct));
}



