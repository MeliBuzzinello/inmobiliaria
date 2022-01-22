let tipoOperacion = prompt("Ingrese tipo de operacion ALQUILER / COMPRA")

function Propiedad (precio){
this.precio = precio,
this.escritura = function(precio) {(precio * 0.1) * 0.07}
this.comision = function(precio , porcentaje) {precio * porcentaje}
}

if (tipoOperacion.toUpperCase() == "ALQUILER") {
    let precioMensual = Number(prompt("Ingrese el costo mensual del alquiler"))
    let comision = (precioMensual * 12) * 0.02
    alert("El costo de comision inmobiliaria es del 2% anual, debe abonar $ " + comision)
}
else if (tipoOperacion.toUpperCase() == "COMPRA") {
    let tipoInmueble = prompt("Indique tipo de inmueble TERRENO / CASA")
    if (tipoInmueble.toUpperCase() == "TERRENO") {
        let precio = Number(prompt("Indique costo de terreno en pesos argentinos"))
        
        let terreno = new Propiedad (precio)

        alert("Los cargos de escritura es de $ " + terreno.escritura(precio))
        alert("El costo de comision inmobiliaria es del 5%, debe abonar $ " + terreno.comision(precio , 0.05))

    }
    else if (tipoInmueble.toUpperCase() == "CASA") {
        let precio = Number(prompt("Indique costo de la propiedad en pesos Argentino"))

        let costoEscritura = Escritura(precio)

        let comision = Comision(precio, 0.03)

        alert("Los cargos de escritura es de $ " + costoEscritura)
        alert("El costo de comision inmobiliaria es del 3%, debe abonar $ " + comision)

    }
    else { alert("Ingreso un dato incorrecto") }
}
else {
    alert("Ingreso un dato incorrecto")
} 


// let tipoInmueble = prompt("Indique tipo de inmueble TERRENO / CASA")

    // if (tipoInmueble.toUpperCase() == "TERRENO") {
    //     let precio = Number(prompt("Indique costo de terreno en pesos argentinos"))

    //     let costoEscritura = Escritura(precio)

    //     let comision = Comision(precio, 0.05)

    //     alert("Los cargos de escritura es de $ " + costoEscritura)
    //     alert("El costo de comision inmobiliaria es del 5%, debe abonar $ " + comision)

    // }
    // else if (tipoInmueble.toUpperCase() == "CASA") {
    //     let precio = Number(prompt("Indique costo de la propiedad en pesos Argentino"))

    //     let costoEscritura = Escritura(precio)

    //     let comision = Comision(precio, 0.03)

    //     alert("Los cargos de escritura es de $ " + costoEscritura)
    //     alert("El costo de comision inmobiliaria es del 3%, debe abonar $ " + comision)

    // }
    // else { alert("Ingreso un dato incorrecto") }