const productos = [

    {
        id: "Cardiovascular01",
        titulo: "Natto-K",
        imagen: "../stock/Nattok.jpg",
        code: "ENZ-22090",
        content: "90 unid",
        cost: 217.211,
        categoria: {
            name: "Cardiovascular",
            id: "Cardiovascular"
        },
        mediop: 1
    },
    {
        id: "Cardiovascular02",
        titulo: "Clinical Cardio-6",
        imagen: "../stock/Clininical Cardio-6.jpg",
        code: "PRT-13383",
        content: "90 unid",
        cost: 220.211,
        categoria: {
            name: "Cardiovascular",
            id: "Cardiovascular"
        },
        mediop: 1
    },
    {
        id: "Cardiovascular03",
        titulo: "HeartBeat",
        imagen: "../stock/HeortBeat.jpg",
        code: "NAP-47421",
        content: "90 unid",
        cost: 230.345,
        categoria: {
            name: "Cardiovascular",
            id: "Cardiovascular"
        },
        mediop: 1
    },
    {
        id: "Hematologia01",
        titulo: "Vessel Due F ",
        imagen: "../stock/Vesseñ Due F.jpg",
        code: "428M98",
        content: "Box 10 Ampoules",
        cost: 640.000,
        categoria: {
            name: "Hematologia",
            id: "Hematoloia"
        },
        mediop: 1
    },
    {
        id: "Hematologia02",
        titulo: "Bolentax ",
        imagen: "../stock/Bolentax.jpg",
        code: "750112",
        content: "Box With 2",
        cost: 987.970,
        categoria: {
            name: "Hematologia",
            id: "Hematologia"
        },
        mediop: 1
    },
    {
        id: "Oncologia01",
        titulo: "Brineura",
        imagen: "../stock/Brineura.jpg",
        code: "20142418-1",
        content: "Injectable x 2",
        cost: 82.447,
        categoria: {
            name: "Oncologia",
            id: "Oncologia"
        },
        mediop: 1
    },
    {
        id: "Oncologia02",
        titulo: "Berinert",
        imagen: "../stock/Berinert.jpg",
        code: "20094884-1",
        content: "Inhibitor 500UI/1U",
        cost: 2.748,
        categoria: {
            name: "Oncologia",
            id: "Oncologia"
        },
        mediop: 2
    },
    {
        id: "Oncologia03",
        titulo: "Imukin",
        imagen: "../stock/Imukin.jpg",
        code: "211873-1",
        content: "Injectable x 6",
        cost: 2.748,
        categoria: {
            name: "Oncologia",
            id: "Oncologia"
        },
        mediop: 1
    },
    {
        id: "Hormonal01",
        titulo: "Hormonious",
        imagen: "../stock/Hormonious.jpg",
        code: "ENZ-22090",
        content: "ORA-00758",
        cost: 176.389,
        categoria: {
            name: "Hormonal",
            id: "Hormonal"
        },
        mediop: 1
    },
    {
        id: "Hormonal02",
        titulo: "GHR Complex",
        imagen: "../stock/GHRComplex.jpg",
        code: "7083",
        content: "Mg 180 Cap",
        cost: 199.900,
        categoria: {
            name: "Hormonal",
            id: "Hormonal"
        },
        mediop: 2
    },
    {
        id: "Eye01",
        titulo: "Natural Vision",
        imagen: "../stock/NaturalVision.jpg",
        code: "DRB-00311",
        content: "60 unid",
        cost: 71.646,
        categoria: {
            name: "Eye",
            id: "Eye"
        },
        mediop: 1
    },
    {
        id: "Eye02",
        titulo: "Eye Pressure Support",
        imagen: "../stock/Eye Pressure Support.jpg",
        code: "LEX-15143",
        content: "30 unid",
        cost: 120.126,
        categoria: {
            name: "Eye",
            id: "Eye"
        },
        mediop: 1
    },
    {
        id: "Eye03",
        titulo: "Mascular Vision",
        imagen: "../stock/Mascular Vision.jpg",
        code: "NOW-03402",
        content: "90 unid",
        cost: 117.225,
        categoria: {
            name: "Eye",
            id: "Eye"
        },
        mediop: 2
    }

];

const contenerProductos = document.querySelector("#contendor-productos");
const botonCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let btnsAddToCart = document.querySelectorAll(".agregar-producto");
const AtotalCartItems = document.querySelector("#cart-items");

let storedCartItems = localStorage.getItem("items-in-cart");
storedCartItems = JSON.parse(storedCartItems);

let viewProduct = document.querySelectorAll(".producto-imagen");

function cargarProducto(productoselegidos) {
    var mediopago;
    contenerProductos.innerHTML = "";
    productoselegidos.forEach(producto => {
        console.log(producto.mediop);
        if (producto.mediop === 1) {
            mediopago = "Cash";
            console.log()
        }
        else {
            mediopago = "Electronic transaction";
        }
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `<a href="../product page/index.html">
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}"></a>
                    <div class="producto-detalle">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">Product code: ${producto.code}</p>
                        <p class="producto-precio">Content: ${producto.content}</p>
                        <p class="producto-precio">Cost: $${producto.cost}</p>
                        <p class="producto-precio">Payment method: ${mediopago}</p>
                        <button class="agregar-producto ${mediopago}" id="${producto.id}">Add</button>
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

            const productoBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
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
function disable(){
    // console.log(cartProducts[0].mediop);
    var mt2 = cartProducts[0].mediop;
    btnsAddToCart = document.querySelectorAll(".agregar-producto");

    btnsAddToCart.forEach(button => {
        if (!(button.matches('.Cash')) && (mt2 == 1)) {
            console.log(button);
            console.log(button.id + "tiene 2");
            button.disabled = true;
            button.classList.add("disabledBtn")
        }
        else if ((button.matches('.Cash')) && !(mt2 == 1)){
            console.log(button);
            console.log(button.id + "tiene 1");
            button.disabled = true;
            button.classList.add("disabledBtn")
        }
    })
}

function addToCart(e) {
    console.log("aaaja");
    const uid = e.currentTarget.id;
    console.log(uid);
    const addedProduct2 = productos.find(producto => producto.id === uid);
    console.log(addedProduct2);
    mt = addedProduct2.mediop;
    // console.log(mt);
    // console.log("hola");
    btnsAddToCart.forEach(button => {
        console.log(button.matches('.Cash') == false);
        console.log(mt);
        console.log(button.id);
        console.log(e.currentTarget.classList + "sisas" + mt);
        if (!(button.matches('.Cash')) && (mt == 1)) {
            console.log(button);
            console.log(button.id + "tiene 2");
            button.disabled = true;
            button.classList.add("disabledBtn")
        }
        else if ((button.matches('.Cash')) && !(mt == 1)) {
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
    const addedProduct = productos.find(producto => producto.id === uid);

    if (cartProducts.some(producto => producto.id === uid)) {
        const index = cartProducts.findIndex(producto => producto.id === uid);
        cartProducts[index].cantidad++;
    } else {
        addedProduct.cantidad = 1;
        cartProducts.push(addedProduct);
    }

    updateTotalCartItems();

    localStorage.setItem("items-in-cart", JSON.stringify(cartProducts));
}

// cartproductos();
// function cartproductos() {
//     cartProducts = JSON.parse(cartProductsLS);
//     console.log(cartProducts + "cartproductos");
// }

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


