var inputBoxName = document.getElementById("inputBoxName");
var inputBoxNum = document.getElementById("inputBoxNum");
var selectedBank = document.querySelectorAll(".selected");


// var invalidCharsName = [
//     1,2,3,4,5,6,7,8,9,0
// ];

var invalidCharsNum = [
    "-",
    "+",
    "e",
];

inputBoxNum.addEventListener("keydown", function (e) {
    if (invalidCharsNum.includes(e.key)) {
        e.preventDefault();
    }
});

// inputBoxName.addEventListener("keydown", function (e) {
//     if (invalidCharsName.includes(e.key)) {
//         e.preventDefault();
//     }
// });

// console.log(selectedBank);
// function buenas(){
//     console.log("nonas");
//     console.log(selectedBank.indexOf("Scotiabank Colpatria"));
// }

var lista = document.getElementById("lista");

lista.addEventListener("change", function(){
    var textoSeleccionado = lista.options[lista.selectedIndex].text;
    console.log(textoSeleccionado);
    console.log(lista[0].value);
    if (lista[0].value == ""){
        console.log("tardunas");
        lista.remove(0);
    }
    var correuna = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    console.log(correuna.test("vacuna"));

});

