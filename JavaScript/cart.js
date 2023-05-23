const storedCartItems = JSON.parse(localStorage.getItem("items-in-cart"));
const cartEmpty = document.querySelector("#empty-cart");
const cartFilled = document.querySelector("#filled-cart");
const buttons = document.querySelector("#payment-buttons");

if (storedCartItems) {
    cartEmpty.classList.add("disabled");
    cartFilled.classList.remove("disabled");

    storedCartItems.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("cart-items_stored");
        div.innerHTML = `
        <div class="stored d-inline-flex">
                    <div class="cart-item_delete col-1">
                        <img src="../icons/4115238_delete_trash_icon.svg" alt="">
                    </div>


                    <div class="item-pic col-3">
                        <img src="../stock/Bolentax.jpg" alt="">
                        <h4>Bolentax</h4>
                    </div>

                    <div class="col-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea sit aut vitae odio eveniet
                        aliquam id illum dolorem praesentium! Neque nulla, aliquid iure similique fugit doloremque culpa
                        quam aspernatur?
                    </div>

                    <div class="col-2">
                        <div class="dropdown cart-items_units">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">1</a></li>
                                <li><a class="dropdown-item" href="#">2</a></li>
                                <li><a class="dropdown-item" href="#">3</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-2">
                        <h4>Per unit: $10</h4>
                        <h4>Total: $10.000</h4>
                    </div>
        </div>
        `;

        cartFilled.append(div);
    });


} else {

}