let storedCartItems = localStorage.getItem("items-in-cart");
storedCartItems = JSON.parse(storedCartItems);

const cartEmpty = document.querySelector("#empty-cart");
const cartFilled = document.querySelector("#filled-cart");
const buttons = document.querySelector("#payment-buttons");
let deleteButtons = document.querySelectorAll(".cart-item_delete");
const clearCart = document.querySelector("#clear-cart");
const total = document.querySelector("#total");


function loadCartProducts() {
    if (storedCartItems && storedCartItems.length > 0) {


        cartEmpty.classList.add("disabled");
        buttons.classList.remove("disabled");
        cartFilled.classList.remove("disabled");

        cartFilled.innerHTML = "";

        storedCartItems.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("cart-items_stored");

            div.innerHTML = `
            <div class="stored d-inline-flex">
                        <div class="cart-item_delete col-1" id="${producto.code}">
                            <img src="../icons/4115238_delete_trash_icon.svg" alt="">
                        </div>
    
    
                        <div class="item-pic col-3">
                            <img src="../stock/${producto.imagen}" alt="">
                            <h4>${producto.titulo}</h4>
                        </div>
    
                        <div class="col-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea sit aut vitae odio eveniet
                            aliquam id illum dolorem praesentium! Neque nulla, aliquid iure similique fugit doloremque culpa
                            quam aspernatur?
                        </div>
    
                        <div class="col-2">
                            <h4>${producto.cantidad}</h4>
                        </div>
    
                        <div class="col-2">
                            <h4>Per unit: $${producto.cost}</h4>
                            <h4>Total: $${producto.cost * producto.cantidad}</h4>
                        </div>
            </div>
            `;

            cartFilled.append(div);
        });


    } else {
        cartEmpty.classList.remove("disabled");
        buttons.classList.add("disabled");
        cartFilled.classList.add("disabled");
    }

    updateDelBtns();
    updateTotal();
}


loadCartProducts();


function updateDelBtns() {
    deleteButtons = document.querySelectorAll(".cart-item_delete");

    deleteButtons.forEach(button => {
        button.addEventListener("click", deleteFromCart);
    });
}

function deleteFromCart(e) {
    const idbt = e.currentTarget.id;
    const index = storedCartItems.findIndex(producto => producto.code === idbt);
    storedCartItems.splice(index, 1);
    loadCartProducts();

    localStorage.setItem("items-in-cart", JSON.stringify(storedCartItems));
}

clearCart.addEventListener("click", voidCart)

function voidCart() {
    storedCartItems.length = 0;
    localStorage.setItem("items-in-cart", JSON.stringify(storedCartItems));
    loadCartProducts();
}

function updateTotal() {
    const totalCalc = storedCartItems.reduce((i, producto) => i + (producto.cost * producto.cantidad), 0);
    total.innerText = `${totalCalc}`;
}