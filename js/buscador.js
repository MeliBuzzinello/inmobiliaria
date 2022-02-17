const selOperacion = document.getElementById('selOperacion')
const selTipoProp = document.getElementById('selTipoProp')
const btnBuscar = document.getElementById('btnBuscar')
const ContPropiedades = document.getElementById('ContPropiedades')
const ContTitulo = document.getElementById('ContTitulo')

//*-----------CODIGO A EJECUTAR ---------*/
recuperar()

/* ----------- FUNCIONES -------------*/

function mostrarPropiedades(array) {
    ContPropiedades.innerHTML = '';
    ContTitulo.innerHTML = '';    

    for (const prop of array) {

        const {tipo, precio , operacion , zona , img} =  prop

        let div = document.createElement('div');
        div.className = 'propiedad';
        div.innerHTML = `<div class="card">
        <div class="card-image">
            <img class="imgPropiedades" src=${img}>
            <span class="card-title">${tipo}</span>
        </div>
        <div class="card-content">
            <p>${operacion}</p>
            <p>Precio $: ${precio}</p>
            <p>Zona: ${zona}</p>
        </div>
    </div> `
        ContPropiedades.appendChild(div);
    }  
}

function recuperar() {
    let recuperarBuscador = JSON.parse(localStorage.getItem('propiedadesBuscador')) 
    recuperarBuscador && mostrarPropiedades(recuperarBuscador)
}


/* ------------- EVENTOS -------------- */
btnBuscar.addEventListener('click', () => {

    const arrayFiltrado = arrayPropiedad.filter(el => el.operacion == selOperacion.value).filter(el => el.tipo == selTipoProp.value)
    
    mostrarPropiedades(arrayFiltrado)

    if (arrayFiltrado.length == 0) {
        let div = document.createElement('div');
        div.className = 'Titulopropiedad';
        div.innerHTML = `<div class="alert alert-success" role="alert"><h4 class="alert-heading">Lo sentimos</h4>
        <p>En este momento no contamos con propiedades disponibles, de acuerdo a lo seleccionado.</p>
        <hr></div>`      
        ContPropiedades.appendChild(div);
    }
    else {
        let div = document.createElement('div');
        div.className = 'Titulopropiedad';
        div.innerHTML = `<h3>PROPIEDADES DISPONIBLES</h3>`

        ContTitulo.appendChild(div);
    }
    localStorage.setItem('propiedadesBuscador',JSON.stringify(arrayFiltrado))
})





