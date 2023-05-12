
const productos = [

    { 
        id: "Cardiovascular01",
        titulo: "Natto-K", 
        imagen: "../stock/Nattok.jpg",
        code:"ENZ-22090",
        content:"90 unid",
        cost:"$217.211",
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
        cost:"$220.211",
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
        cost:"$230.345",
        categoria: {
            name:"Cardiovascular",
            id:"Cardiovascular"
        }
    },
    { 
        id: "Hematologia01",
        titulo: "Vessel Due F ", 
        imagen: "../stock/Vesseñ Due F.jpg",
        code:"428M98SSAIV",
        content:"Box With 10 Ampoules",
        cost:"$640.000",
        categoria: {
            name:"Hematologia",
            id:"Hematoloia"
        }
    },
    { 
        id: "Hematologia02",
        titulo: "Bolentax ", 
        imagen: "../stock/Bolentax.jpg",
        code:"7501125152870",
        content:"Box With 2 Prefilled",
        cost:"$987.970",
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
        content:"Injectable x 2 - BioMarin",
        cost:"$82.447",
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
        cost:"$$2.748",
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
        cost:"$2.748",
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
        cost:"$176.389",
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
        content:"Mg 180 Cap Piping Rock",
        cost:"$199.900",
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
        cost:"$71.646",
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
        cost:"$120.126",
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
        cost:"$117.225",
        categoria: {
            name:"Eye",
            id:"Eye"
        }
    }

];

const contenerProductos = document.querySelector("#contendor-productos");
const botonCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

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
})