let usuario = "juan"
let clave = "123"

usuario = prompt("Ingrese su usuario")
clave = prompt("Ingrese su clave")

while (usuario.toLowerCase != "juan" && clave != "123") {
    alert("Usuario y clave incorrecta")
    usuario = prompt("Ingrese su usuario")
    clave = prompt("Ingrese su clave")
}

let tipoOperacion = prompt("Ingrese tipo de operacion ALQUILER / COMPRA")

function Escritura(precio) {
    let resultado = (precio * 0.1) * 0.7
    return resultado
}

function Comision(precio, porcentaje) {
    let resultado = precio * porcentaje
    return resultado
}

if (tipoOperacion.toUpperCase() == "ALQUILER") {
    let precioMensual = Number(prompt("Ingrese el costo mensual del alquiler"))
    let comision = (precioMensual * 12) * 0.02
    alert("El costo de comision inmobiliaria es del 2% anual, debe abonar $ " + comision)
}
else if (tipoOperacion.toUpperCase() == "COMPRA") {
    let numero = prompt("Indique tipo de inmueble 1-TERRENO / 2-CASA / 3-DUPLEX / 4-DEPARTAMENTO / 5-LOCAL COMERCIAL")
    let precio = 0
    let costoEscritura = 0
    let comision = 0
    switch (numero) {
        case "1":
            precio = Number(prompt("Indique costo de terreno en pesos argentinos"))
            costoEscritura = Escritura(precio)
            comision = Comision(precio, 0.05)
            alert("Los cargos de escritura es de $ " + costoEscritura)
            alert("El costo de comision inmobiliaria es del 5%, debe abonar $ " + comision)
            break;

        case "2": case "3": case "4":
            precio = Number(prompt("Indique costo de la propiedad en pesos Argentino"))
            costoEscritura = Escritura(precio)
            comision = Comision(precio, 0.03)
            alert("Los cargos de escritura es de $ " + costoEscritura)
            alert("El costo de comision inmobiliaria es del 3%, debe abonar $ " + comision)
            break;

        case "5":
            alert("Por el momento no contamos con locales comerciales para la venta")
            break;

        default:
            alert("Ingreso un dato incorrecto")
            break;
    }
}
else {
    alert("Ingreso un dato incorrecto")
} 