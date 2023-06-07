var inputBoxName = document.getElementById("inputBoxName");
var inputBoxNum = document.querySelectorAll(".inputBoxNum");
var selectedBank = document.querySelectorAll(".selected");


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
// var correuna = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

lista.addEventListener("change", function () {
    var textoSeleccionado = lista.options[lista.selectedIndex].text;
    console.log(textoSeleccionado);
    // console.log(lista[0].value);
    // if (lista[0].value == ""){
    //     console.log("tardunas");
    //     lista.remove(0);
    // }
});

var pmtMt = document.getElementById("pmtMt");
var PSE = document.getElementById("methodPSE");
var card = document.getElementById("methodCard");

pmtMt.addEventListener("change", function () {
    var selectedPmtMt = pmtMt.options[pmtMt.selectedIndex].text;
    // if (pmtMt[0].value == ""){
    //     pmtMt.remove(0);
    // }
    if (selectedPmtMt == "PSE") {
        card.innerHTML = "";
        PSE.append("aaaaaaa");
    }
    else if (selectedPmtMt == "Card") {
        PSE.innerHTML = "";
        
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

