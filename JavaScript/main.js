
const productos = [

    { 
        id: "Cardiovascular01",
        titulo: "Natto-K", 
        imagen: "../stock/Nattok.jpg",
        code:"ENZ-22090",
        content:"90 unid",
        cost:217.211,
        categoria: {
            name:"Cardiovascular",
            id:"Cardiovascular"
        }
    },
    { 
        id: "Cardiovascular02",
        titulo: "Clinical Cardio-6", 
        imagen: "../stock/Clininical Cardio-6.jpg",
        code:"PRT-13383",
        content:"90 unid",
        cost:220.211,
        categoria: {
            name:"Cardiovascular",
            id:"Cardiovascular"
        }
    },
    { 
        id: "Cardiovascular03",
        titulo: "HeartBeat", 
        imagen: "../stock/HeortBeat.jpg",
        code:"NAP-47421",
        content:"90 unid",
        cost:230.345,
        categoria: {
            name:"Cardiovascular",
            id:"Cardiovascular"
        }
    },
    { 
        id: "Hematologia01",
        titulo: "Vessel Due F ", 
        imagen: "../stock/Vesseñ Due F.jpg",
        code:"428M98",
        content:"Box 10 Ampoules",
        cost:640.000,
        categoria: {
            name:"Hematologia",
            id:"Hematoloia"
        }
    },
    { 
        id: "Hematologia02",
        titulo: "Bolentax ", 
        imagen: "../stock/Bolentax.jpg",
        code:"750112",
        content:"Box With 2",
        cost:987.970,
        categoria: {
            name:"Hematologia",
            id:"Hematologia"
        }
    },
    { 
        id: "Oncologia01",
        titulo: "Brineura", 
        imagen: "../stock/Brineura.jpg",
        code:"20142418-1",
        content:"Injectable x 2",
        cost:82.447,
        categoria: {
            name:"Oncologia",
            id:"Oncologia"
        }
    },
    { 
        id: "Oncologia02",
        titulo: "Berinert", 
        imagen: "../stock/Berinert.jpg",
        code:"20094884-1",
        content:"Inhibitor 500UI/1U",
        cost:2.748,
        categoria: {
            name:"Oncologia",
            id:"Oncologia"
        }
    },
    { 
        id: "Oncologia03",
        titulo: "Imukin", 
        imagen: "../stock/Imukin.jpg",
        code:"211873-1",
        content:"Injectable x 6",
        cost:2.748,
        categoria: {
            name:"Oncologia",
            id:"Oncologia"
        }
    },
    { 
        id: "Hormonal01",
        titulo: "Hormonious", 
        imagen: "../stock/Hormonious.jpg",
        code:"ENZ-22090",
        content:"ORA-00758",
        cost:176.389,
        categoria: {
            name:"Hormonal",
            id:"Hormonal"
        }
    },
    { 
        id: "Hormonal02",
        titulo: "GHR Complex", 
        imagen: "../stock/GHRComplex.jpg",
        code:"7083",
        content:"Mg 180 Cap",
        cost:199.900,
        categoria: {
            name:"Hormonal",
            id:"Hormonal"
        }
    },
    { 
        id: "Eye01",
        titulo: "Natural Vision", 
        imagen: "../stock/NaturalVision.jpg",
        code:"DRB-00311",
        content:"60 unid",
        cost:71.646,
        categoria: {
            name:"Eye",
            id:"Eye"
        }
    },
    { 
        id: "Eye02",
        titulo: "Eye Pressure Support", 
        imagen: "../stock/Eye Pressure Support.jpg",
        code:"LEX-15143",
        content:"30 unid",
        cost:120.126,
        categoria: {
            name:"Eye",
            id:"Eye"
        }
    },
    { 
        id: "Eye03",
        titulo: "Mascular Vision", 
        imagen: "../stock/Mascular Vision.jpg",
        code:"NOW-03402",
        content:"90 unid",
        cost:117.225,
        categoria: {
            name:"Eye",
            id:"Eye"
        }
    }

];

const contenerProductos = document.querySelector("#contendor-productos");
const botonCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let btnsAddToCart = document.querySelectorAll(".agregar-producto");
const AtotalCartItems = document.querySelector("#cart-items");

function cargarProducto (productoselegidos){

        contenerProductos.innerHTML = "";
        productoselegidos.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalle">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">Product code: ${producto.code}</p>
                        <p class="producto-precio">Content: ${producto.content}</p>
                        <p class="producto-precio">Cost: ${producto.cost}</p>
                        <button class="agregar-producto" id="${producto.id}">Add</button>
                    </div>
                    `;

                    contenerProductos.append(div);        
    })
    updateAddBtns() 
    console.log(btnsAddToCart);
}

cargarProducto(productos);

botonCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "All"){
            
            const productoBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProducto(productoBoton);
        } else{
            
            tituloPrincipal.innerText="All Products";
            cargarProducto(productos);
        }
        
    
    })
});  

// let selectedProduct = document.querySelectorAll('.producto-imagen').forEach(elem => elem.addEventListener("click",
// () => {
//     console.log("Buenas tardunas");
//    document.querySelector(".bg-modal").style.display = "flex";
//  })); 


function updateAddBtns() {
    btnsAddToCart = document.querySelectorAll(".agregar-producto"); 

    btnsAddToCart.forEach(button =>{
        button.addEventListener("click", addToCart);
    });
}

let cartProducts;

const cartProductsLS = JSON.parse(localStorage.getItem("items-in-cart"));

if (cartProductsLS) {
    cartProducts = cartProductsLS;
    updateTotalCartItems();
} else {
    cartProducts = [];
}

function addToCart(e) {
    console.log("Buenas tardes");

    const uid = e.currentTarget.id;
    const addedProduct = productos.find(producto => producto.id === uid);

    if (cartProducts.some(producto => producto.id === uid)) {
        const index = cartProducts.findIndex(producto => producto.id === uid);
        cartProducts[index].cantidad++;
    } else {
        addedProduct.cantidad = 1;
        cartProducts.push(addedProduct);
    }

    updateTotalCartItems();

    localStorage.setItem("items-in-cart", JSON.stringify(cartProducts))
}

function updateTotalCartItems() {
    let totalCartItems = cartProducts.reduce((i, producto) => i + producto.cantidad, 0);
    AtotalCartItems.innerText = totalCartItems;
}

// .onclick = function(){
//     console.log("AAAAAASSS");
// };

// selectedProduct.onclick = () => {
//     console.log("AAAAAASSS");
// }


// selectedProduct.addEventListener('click', selectedImage);
// function selectedImage(e) {
//     console.log("Buenas tardes");
//     console.log(this.code);
//     const productToDisplay = productos.find(function(product){
//         return product;
//     });
//     console.log(productToDisplay);
//     console.log(productToDisplay.code);
// }
