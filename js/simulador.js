
//------------CODIGO A EJECUTAR -----------------------------

const selSimulador = document.getElementById('selSimulador')
const txtSimulador = document.getElementById('txtSimulador')
const btnCalcular = document.getElementById('btnCalcular')
const ContSimulador = document.getElementById('ContSimulador')

let costoEscritura = 0
let comision = 0

recuperar()


// ---------------------FUNCIONES ----------------------------
function Escritura(precio) {
    let resultado = (precio * 0.1) * 0.7
    return resultado
}

function Comision(precio, porcentaje) {
    let resultado = precio * porcentaje
    return resultado
}

function recuperar() {
    if(selSimulador.value && txtSimulador.value){
    selSimulador.value = localStorage.getItem('selectSeleccion');
    txtSimulador.value = localStorage.getItem('txtResulSumulador');
    Calcular(localStorage.getItem('selectSeleccion'), localStorage.getItem('txtResulSumulador'))
    }
}

function Calcular(operacionFn, precioFn) {
    console.log( precioFn || "Costo no definido");


    ContSimulador.innerHTML = "";
    if (operacionFn == "1") {
        costoEscritura = Escritura(precioFn)
        comision = Comision(precioFn, 0.03)

        const div = document.createElement('div')
        div.innerHTML = `<p>Los cargos de escritura es de $${costoEscritura} y <br>
        el costo de comision inmobiliaria es del 3%, debe abonar $ ${comision}</p>`
        ContSimulador.appendChild(div)
    }
    else if (operacionFn == "2") {

        let precioMensual = parseInt(precioFn)
        let comision = (precioMensual * 12) * 0.02

        const div = document.createElement('div')
        div.innerHTML = `<p>El costo de comision inmobiliaria es del 2% anual, debe abonar $ ${comision}</p>`
        ContSimulador.appendChild(div)
    }
    else swal({
        title: "Error",
        text: "No selecciono una operación",
        icon: "error",
        button: "Ok",
      });

    localStorage.setItem('selectSeleccion', operacionFn);
    localStorage.setItem('txtResulSumulador', precioFn);

}

// ---------------------EVENTOS ------------------------------
btnCalcular.addEventListener('click', () => {
    Calcular(selSimulador.value, txtSimulador.value)
})

// --------------- Funcion mapa ---------------

function iniciarMap(){
    var coord = {lat:-31.4121939 ,lng: -64.5697769};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}







