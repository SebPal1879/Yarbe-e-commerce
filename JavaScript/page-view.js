// $.ajax(
//     {
//         type:"GET",
//         URL:"php/conexion.php",
//         data: JSON,
//         array.forEach(element => {
//             success:
//         });

//     }
// )

// const productos = [

//     {
//         id: "Cardiovascular01",
//         titulo: "Natto-K",
//         imagen: "../stock/Nattok.jpg",
//         code: "ENZ-22090",
//         content: "90 unid",
//         cost: 217.211,
//         categoria: {
//             name: "Cardiovascular",
//             id: "Cardiovascular"
//         }
//     },
//     {
//         id: "Cardiovascular02",
//         titulo: "Clinical Cardio-6",
//         imagen: "../stock/Clininical Cardio-6.jpg",
//         code: "PRT-13383",
//         content: "90 unid",
//         cost: 220.211,
//         categoria: {
//             name: "Cardiovascular",
//             id: "Cardiovascular"
//         }
//     },
//     {
//         id: "Cardiovascular03",
//         titulo: "HeartBeat",
//         imagen: "../stock/HeortBeat.jpg",
//         code: "NAP-47421",
//         content: "90 unid",
//         cost: 230.345,
//         categoria: {
//             name: "Cardiovascular",
//             id: "Cardiovascular"
//         }
//     },
//     {
//         id: "Hematologia01",
//         titulo: "Vessel Due F ",
//         imagen: "../stock/Vesseñ Due F.jpg",
//         code: "428M98",
//         content: "Box 10 Ampoules",
//         cost: 640.000,
//         categoria: {
//             name: "Hematologia",
//             id: "Hematoloia"
//         }
//     },
//     {
//         id: "Hematologia02",
//         titulo: "Bolentax ",
//         imagen: "../stock/Bolentax.jpg",
//         code: "750112",
//         content: "Box With 2",
//         cost: 987.970,
//         categoria: {
//             name: "Hematologia",
//             id: "Hematologia"
//         }
//     },
//     {
//         id: "Oncologia01",
//         titulo: "Brineura",
//         imagen: "../stock/Brineura.jpg",
//         code: "20142418-1",
//         content: "Injectable x 2",
//         cost: 82.447,
//         categoria: {
//             name: "Oncologia",
//             id: "Oncologia"
//         }
//     },
//     {
//         id: "Oncologia02",
//         titulo: "Berinert",
//         imagen: "../stock/Berinert.jpg",
//         code: "20094884-1",
//         content: "Inhibitor 500UI/1U",
//         cost: 2.748,
//         categoria: {
//             name: "Oncologia",
//             id: "Oncologia"
//         }
//     },
//     {
//         id: "Oncologia03",
//         titulo: "Imukin",
//         imagen: "../stock/Imukin.jpg",
//         code: "211873-1",
//         content: "Injectable x 6",
//         cost: 2.748,
//         categoria: {
//             name: "Oncologia",
//             id: "Oncologia"
//         }
//     },
//     {
//         id: "Hormonal01",
//         titulo: "Hormonious",
//         imagen: "../stock/Hormonious.jpg",
//         code: "ENZ-22090",
//         content: "ORA-00758",
//         cost: 176.389,
//         categoria: {
//             name: "Hormonal",
//             id: "Hormonal"
//         }
//     },
//     {
//         id: "Hormonal02",
//         titulo: "GHR Complex",
//         imagen: "../stock/GHRComplex.jpg",
//         code: "7083",
//         content: "Mg 180 Cap",
//         cost: 199.900,
//         categoria: {
//             name: "Hormonal",
//             id: "Hormonal"
//         }
//     },
//     {
//         id: "Eye01",
//         titulo: "Natural Vision",
//         imagen: "../stock/NaturalVision.jpg",
//         code: "DRB-00311",
//         content: "60 unid",
//         cost: 71.646,
//         categoria: {
//             name: "Eye",
//             id: "Eye"
//         }
//     },
//     {
//         id: "Eye02",
//         titulo: "Eye Pressure Support",
//         imagen: "../stock/Eye Pressure Support.jpg",
//         code: "LEX-15143",
//         content: "30 unid",
//         cost: 120.126,
//         categoria: {
//             name: "Eye",
//             id: "Eye"
//         }
//     },
//     {
//         id: "Eye03",
//         titulo: "Mascular Vision",
//         imagen: "../stock/Mascular Vision.jpg",
//         code: "NOW-03402",
//         content: "90 unid",
//         cost: 117.225,
//         categoria: {
//             name: "Eye",
//             id: "Eye"
//         }
//     }

// ];


let itemToView = [];
itemToView = localStorage.getItem("productToSee");
itemToView = JSON.parse(itemToView);

let storedCartItems = localStorage.getItem("items-in-cart");
storedCartItems = JSON.parse(storedCartItems);
// console.log(storedCartItems[0].mediop);

const item = document.querySelector("#item");
let btnsAddToCart = document.querySelectorAll(".agregar-producto");
const BtotalCartItems = document.querySelector("#cart-items");



function loadItemInfo() {
    if(itemToView.mediop == 1){
        var a = "Cash";
    }
    else{
        var a = "Electronic transaction";
    }
    const div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `
            <div class="product-info ">
            <div class="col-9 title d-flex">
                <h1>${itemToView.titulo}</h1>
            </div>
            <div class="row align-items-center">
                <section class="col-9 d-flex justify-content-center product-pic">
                    <img src="${itemToView.imagen}" alt="Nombre del producto">
                </section>
                <section class="product-details col-3 py-2">
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium voluptatum,
                            reprehenderit, consectetur neque nisi ratione nihil illum ullam iusto dicta! Deserunt
                            earum adipisci doloremque enim nam labore dolorum autem!
                            Asperiores dicta unde enim vero officiis cum impedit neque voluptatibus, numquam, iure
                            possimus incidunt nesciunt cupiditate distinctio libero itaque amet qui, perspiciatis
                            natus ipsam magnam laboriosam illum tenetur voluptatum! Et.</p>

                        <div class="info d-flex justify-content-between">
                            <p><strong>Category:</strong></p>
                            <p>${itemToView.categoria.name}</p>
                        </div>    

                        <div class="info d-flex justify-content-between">
                            <p><strong>Content:</strong></p>
                            <p>${itemToView.content}</p>
                        </div>

                        <div class="info d-flex justify-content-between">
                            <p><strong>Price:</strong></p>
                            <p>$${itemToView.cost}</p>
                        </div>


                        <div class="pmt-met">
                            <article>
                                <h5>Payment method available: ${a}</h5>
                            </article>

                        </div>

                        <div class="btns">
                            <button class="button agregar-producto" id="${itemToView.id}">Add to cart</button>
                            <h6>or</h6>
                            <a href="../checkout/cart.html" style="text-decoration: none"><button class="button agregar-producto" id="${itemToView.id}">Buy now</button></a>
                            
                        </div>


                    </div>
                </section>
            </div>

        </div>
            `;

    item.append(div);
    console.log(itemToView.id);
    updateAddBtns()
}

loadItemInfo();

const tituloPrincipal = document.querySelector("#titulo-principal");
const AtotalCartItems = document.querySelector("#cart-items");

let viewProduct = document.querySelectorAll(".producto-imagen");

console.log("AaaQ");

console.log("TTX");

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
    console.log(cartProducts);
    updateTotalCartItems();
} else {
    cartProducts = [];
    cartProducts = JSON.parse(cartProductsLS);
    updateTotalCartItems();
}


if(storedCartItems[0].mediop != itemToView.mediop){
    disable();
    console.log("es diferente");
} else {
    console.log("es igual");

}

function disable(){
    // console.log(cartProducts[0].mediop);
    var mt2 = cartProducts[0].mediop;
    console.log(mt2);
    btnsAddToCart = document.querySelectorAll(".agregar-producto");

    btnsAddToCart.forEach(button => {
        console.log(button.id);
        if (button.id == itemToView.id){
            button.disabled = true;
            button.classList.add("disabledBtn");
        }
    });
}

function addToCart(e) {
    const uid = e.currentTarget.id;
    console.log(uid);
    const addedProduct = cartProducts.find(producto => producto.id === uid);
    console.log("Nonas");
    console.log(cartProducts)
    // btnsAddToCart.forEach(button => {
    //     console.log(button.matches('.Cash') == false);
    //     console.log(mt);
    //     console.log(button.id);
    //     if (!(button.matches('.Cash')) && (mt == 1)) {
    //         console.log(button);
    //         console.log(button.id + "tiene 2");
    //         button.disabled = true;
    //         button.classList.add("disabledBtn");
    //     }
    //     else if ((button.matches('.Cash')) && !(mt == 1)) {
    //         console.log(button);
    //         console.log(button.id + "tiene 1");
    //         button.disabled = true;
    //         button.classList.add("disabledBtn")
    //     }
    //     // if (cartProducts.some(producto => producto.id === uid)) {
    //     //     const index2 = cartProducts.findIndex(producto => producto.id === uid);
    //     //     console.log(cartProducts[index2]);
    //     //     console.log("Ward");
    //     // }

    // });

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

function updateTotalCartItems() {
    let totalCartItems = cartProducts.reduce((i, producto) => i + producto.cantidad, 0);
}

function viewProducts() {
    viewProduct = document.querySelectorAll(".producto-imagen");

    viewProduct.forEach(button => {
        button.addEventListener("click", productInfo);
    });
}

function productInfo(e) {
    const selected = e.currentTarget.alt;
    const addedProduct = cartProducts.find(producto => producto.titulo === selected);
    console.log(addedProduct);
    localStorage.setItem("productToSee", JSON.stringify(addedProduct));
}
