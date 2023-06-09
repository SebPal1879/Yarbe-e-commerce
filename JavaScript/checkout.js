var inputBoxName = document.getElementById("inputBoxName");
var inputBoxNum = document.querySelectorAll(".inputBoxNum");
var selectedBank = document.querySelectorAll(".selected");
let storedCartItems = localStorage.getItem("items-in-cart");
const cartFilled = document.querySelector("#item-display");

storedCartItems = JSON.parse(storedCartItems);
console.log(storedCartItems);


// var invalidCharsName = [
//     1,2,3,4,5,6,7,8,9,0
// ];

var invalidCharsNum = [
    "-",
    "+",
    "e",
];

inputNumber();
function inputNumber() {
    inputBoxNum = document.querySelectorAll(".inputBoxNum");

    inputBoxNum.forEach(button => {
        button.addEventListener("keydown", notNumber);
    });
}

function notNumber(e) {
    console.log("Tardes")
    if (invalidCharsNum.includes(e.key)) {
        e.preventDefault();
    }
}

var lista = document.getElementById("lista");
var correuna = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


var pmtMt = document.getElementById("pmtMt");
var PSE = document.getElementById("methodPSE");
var card = document.getElementById("methodCard");

lista.addEventListener("change", function () {
    var textoSeleccionado = lista.options[lista.selectedIndex].text;
    console.log(textoSeleccionado);
    // console.log(lista[0].value);
    // if (lista[0].value == ""){
    //     console.log("tardunas");
    //     lista.remove(0);
    // }
});

pmtMt.addEventListener("change", function () {
    var selectedPmtMt = pmtMt.options[pmtMt.selectedIndex].text;
    // if (pmtMt[0].value == ""){
    //     pmtMt.remove(0);
    // }
    if (selectedPmtMt == "PSE") {
        
        
        var div = document.createElement("div");
        card.innerHTML = "";
        PSE.innerHTML = `<h6>PSE</h6>
        <div class="d-flex row">
            <div class="mb-3 inputuna">
                <label for="basic-url" class="form-label">Select your bank</label>
                <select class="form-select" aria-label="Default select example" id="lista"required>
                    <option selected disabled value="">Choose...</option>
                    <option value="Davivienda">Davivienda</option>
                    <option value="Bancolombia">Bancolombia</option>
                    <option value="Scotiabank Colpatria">Scotiabank Colpatria</option>
                </select>
            </div>

            <div class="mb-3 inputuna">
                <label for="basic-url" class="form-label">Enter your email address</label>
                <input type="text" class="form-control" placeholder="email@domain.com" pattern="[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}" id="email" required>
                <div class="invalid-feedback">
                    Please enter a valid email address
                </div>
            </div>
        </div>`;
        PSE.classList.remove("disabled");
        
    }
    else if (selectedPmtMt == "Card") {
        var div = document.createElement("div");
        div.innerHTML = ``;
        PSE.innerHTML = "";
        card.innerHTML = `<h6>Card</h6>
        <section class="d-flex row">
            <div class="mb-3 inputuna">
                <label for="basic-url" class="form-label">Name on card</label>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder=""
                        aria-describedby="basic-addon3 basic-addon4" id="inputBoxName"
                        required>
                </div>
            </div>

            <div class="mb-3 inputuna">
                <label for="basic-url" class="form-label">Card number</label>
                <div class="input-group">
                    <input type="number" class="form-control inputBoxNum" placeholder=""
                        aria-describedby="basic-addon3 basic-addon4" required>
                </div>
            </div>

            <div class="mb-3">
                <div>
                    <label for="basic-url" class="form-label ">Expiration date (MM/YY)</label>
                </div>

                <div class="input-group tiny d-inline-flex">
                    <input type="number" class="form-control" placeholder="Month"
                        aria-describedby="basic-addon3 basic-addon4" required id="month" min="1"
                        max="12">
                    <input type="number" class="form-control" placeholder="Year"
                        aria-describedby="basic-addon3 basic-addon4" required id="year" min="23"
                        max="30">

                </div>

            </div>


        </section>`;
        card.classList.remove("disabled");

    }
});

//Exp date
var month = document.getElementById("month");
var year = document.getElementById("year");
var email = document.getElementById("email");

email.addEventListener("keydown", function () {
    if (!correuna.test(email.value)) {
        preventDefault();
        stopPropagation();
        console.log("juna");
    }
});

(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity() || (correuna.test(email.value))) {
                console.log("tardunas")
                console.log(email.value);
                event.preventDefault()
                event.stopPropagation()
            }

            // year.classList.add("disabled");
            // console.log("Tardunotas");
            // console.log(year.value);
            // if (year.value == 6) {
            //     console.log("tardunitas");
            // }
            form.classList.add('was-validated')
        }, false)
    })
})()

const total = document.querySelector("#total");

function loadCartProducts() {
    var i = 0;
    if (storedCartItems && storedCartItems.length > 0) {
        
        storedCartItems.forEach(producto => {
            const cartDiv = document.createElement("div");   
            console.log(producto.cantidad);
            console.log(producto.cost);
            cartDiv.innerHTML = `
                            
                            <div class="d-flex stored-item_buy py-2">
                                <div class="item-pic col-6 d-flex justify-content-center mx-2">
                                    <img src="${producto.imagen}">
                                </div>

                                <div class="details col-6">
                                    <h4>${producto.titulo}</h4>
                                    <article>Units: ${producto.cantidad}</article>
                                    <article>Subtotal: ${producto.cantidad * producto.cost}</article>
                                </div>
                            </div>

                            
            `;
            console.log("buenas2 " + i)
            console.log(storedCartItems.length);
            if(i === storedCartItems.length - 1  ){
                cartDiv.classList.add("estilo");
                console.log(producto.titulo);
                console.log("buenas")
                cartDiv.innerHTML = `
                            
                            <div class="d-flex stored-item_buy estilo py-2">
                                <div class="item-pic col-6 d-flex justify-content-center mx-2">
                                    <img src="${producto.imagen}">
                                </div>

                                <div class="details col-6">
                                    <h4>${producto.titulo}</h4>
                                    <article>Units: ${producto.cantidad}</article>
                                    <article>Subtotal: ${producto.cantidad * producto.cost}</article>
                                </div>
                            </div>
            `;
            }
            cartFilled.append(cartDiv);
            console.log(producto.code);
            console.log(producto.imagen);
            i++;
        });
    }
}

loadCartProducts();
updateTotal();
function updateTotal() {
    const totalCalc = storedCartItems.reduce((i, producto) => i + (producto.cost * producto.cantidad), 0);
    total.innerText = `${totalCalc}`;
}