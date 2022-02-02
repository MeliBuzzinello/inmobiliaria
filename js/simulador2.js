class Propiedad {
    constructor(tipo, precio, cantAmbiente, operacion, zona, estado) {
        this.tipo = tipo
        this.precio = parseInt(precio)
        this.cantAmbiente = cantAmbiente
        this.operacion = operacion
        this.zona = zona
        this.estado = estado
    }
}

const arrayPropiedad = [new Propiedad("duplex", 290000, "3", "venta", "Calamuchita", "disponible"),
new Propiedad("terreno", 10000, 0, "venta", "Calamuchita", "no disponible"),
new Propiedad("lote", 25000, 0, "venta", "Carlos Paz", "reservado"),
new Propiedad("casa", 50000, "3", "alquiler", "Carlos Paz", "no disponible"),
new Propiedad("departamento", 40000, "2", "alquiler", "Córdoba", "disponible")]


//muestro las zonas disponibles de las propiedades que administro.
document.write('ZONAS DISPONIBLES DE LAS PROPIEDADES QUE ADMINISTRAMOS:')
document.write('<br>')

const nuevo = arrayPropiedad.map(item => item.zona).filter((value, index, self) => self.indexOf(value) === index)

nuevo.forEach(el => {
    document.write(`<br> ${el}`)
});

// some() para saber y mostrar si tengo propiedades disponibles para alquilar (estado= disponibles)
const estado = arrayPropiedad.some((prop)=> prop.estado == "disponible")
console.log(estado)
if(estado === true){
      alert("Tenemos propiedades disponibles: Hacer consulta")
} 
else alert("Por el momento no contamos con propiedades disponibles")


// con entradas, muestro las propiedades segun requiera

const tipoOperacion = prompt("Ingrese operación a realizar VENTA-ALQUILER")

if (tipoOperacion.toUpperCase() == "ALQUILER") {
    const alquiler = arrayPropiedad.filter((prop) => prop.operacion == "alquiler")
    console.log(alquiler)
    const cantAmb = prompt("Ingrese la cantidad deseada de ambientes de la propiedad")
    const ambientes = alquiler.filter((prop) => prop.cantAmbiente >= cantAmb)
    console.log(ambientes)
    const propDisponibles = ambientes.map((prop) =>{prop.tipo})
    
    alert("Las propiedades disponibles para alquiler: (se muestran por consola)")
    console.log(propDisponibles)
}
else if (tipoOperacion.toUpperCase() == "VENTA") {
    const venta = arrayPropiedad.filter((prop) => prop.operacion == "venta")
    console.log(venta)
    const precioDesde = prompt("Ingrese precio base de la propiedad")
    const proPrecio = venta.filter((prop) => prop.precio >= precioDesde)
    
    alert("Las propiedades disponibles para la venta: (se muestran por consola)")
    console.log(proPrecio)
}
else alert("Ingreso un dato incorrecto")











