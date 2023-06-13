let storedCartItems = localStorage.getItem("items-in-cart");
storedCartItems = JSON.parse(storedCartItems);

let infocompra = localStorage.getItem("form");
infocompra = JSON.parse(infocompra);

var a = infocompra.address + " " + infocompra.city + " " + infocompra.pais + " " + "(" +infocompra.zip + ")";

var tabla = document.getElementById("tabla");
var tablabody = document.getElementById("tablabody");
var address = document.getElementById("address");
var pay = document.getElementById("pay");

var b;
if(storedCartItems[0].mediop == "Cash"){
    b = "Cash";
}
else {
    b = infocompra.pmt;
}

console.log(b);

function itemstabla() {
    address.innerHTML = a;
    pay.innerHTML = b;
    storedCartItems.forEach(producto => {
        const div = document.createElement("tr");
        var i = 1;
        div.innerHTML = `
            <th scope="row">${i}</th>
            <td>${producto.titulo}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.cantidad * producto.cost}</td>
        `;

        tablabody.append(div);
        i++
    });
}

itemstabla();
var totalCalc = 0;

updateTotal();


function updateTotal() {
    totalCalc = storedCartItems.reduce((i, producto) => i + (producto.cost * producto.cantidad), 0);
    total.innerText = `${totalCalc}`;
    async=false;
}

var jeison ={
    "ordernum": Math.floor(Math.random() * 30),
    "address": a,
    "mediop": b,
    "total": totalCalc
};

var d = JSON.stringify(jeison);

$.ajax({
    type: 'POST',
    url: 'http://localhost/Yarbe-e-commerce/Adminsitrador/php/postproduct.php',
    data: jeison,
    success: function(response) {
      console.log('Datos enviados');
      console.log(jeison);
    },
    error: function() {
      console.log('Ha ocurrido un error al enviar los datos.');
    }
  });

  localStorage.clear();