
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
        code:"428M98",
        content:"Box 10 Ampoules",
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
        code:"750112",
        content:"Box With 2",
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
        content:"Injectable x 2",
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
        content:"Mg 180 Cap",
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

const SUEdition = document.getElementById("su");
const addToCart = document.getElementById("btn-add2cart")

SUEdition.addEventListener('click', botunaOnClick);
// addToCart.addEventListener('click',cartAdd);

function botunaOnClick(event) {
    console.log("AAA Funcionando");
    SUEdition.innerHTML = `
     `
}

// function cartAdd(e){
//     console.log("Funcionando B");
// }

const cartProducts = [];

function cartAdd() {
}
