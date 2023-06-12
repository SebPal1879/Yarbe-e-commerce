console.log("Hola");

let itemToView = [];
itemToView = localStorage.getItem("productToSee");
itemToView = JSON.parse(itemToView);
console.log(itemToView);

let storedCartItems = localStorage.getItem("items-in-cart");
storedCartItems = JSON.parse(storedCartItems);
// console.log(storedCartItems[0].mediop);

const item = document.querySelector("#item");
let btnsAddToCart = document.querySelectorAll(".agregar-producto");
const BtotalCartItems = document.querySelector("#cart-items");



function loadItemInfo() {
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
                            <p>${itemToView.namec}</p>
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
                                <h5>Payment method available: ${itemToView.mediop}</h5>
                            </article>

                        </div>

                        <div class="btns">
                            <button class="button agregar-producto" id="${itemToView.idname}">Add to cart</button>
                            <h6>or</h6>
                            <a href="../checkout/cart.html" style="text-decoration: none"><button class="button agregar-producto" id="${itemToView.idname}">Buy now</button></a>
                            
                        </div>


                    </div>
                </section>
            </div>

        </div>
            `;

    item.append(div);
    console.log(itemToView.idname);
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
console.log(itemToView);

if (cartProducts = []){
    console.log("lunagrande");
    var products = [];
    products.push(itemToView);
    console.log(products);
}

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
        if (button.id == itemToView.idname){
            button.disabled = true;
            button.classList.add("disabledBtn");
        }
    });
}

function addToCart(e) {
    const uid = e.currentTarget.id;
    console.log(uid);
    const addedProduct = products.find(producto => producto.idname === uid);
    console.log("Nonas");
    console.log(addedProduct);
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
