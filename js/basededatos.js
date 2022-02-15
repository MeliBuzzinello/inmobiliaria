class Propiedad {
    constructor(id,tipo, precio, cantAmbiente, operacion, zona, estado) {
        this.id = id
        this.tipo = tipo
        this.precio = parseInt(precio)
        this.cantAmbiente = cantAmbiente
        this.operacion = operacion
        this.zona = zona
        this.estado = estado
    }
}

const arrayPropiedad = [new Propiedad(1,"casa", 190000, "3", "venta", "Calamuchita", "disponible"),
new Propiedad(2,"terreno", 10000, 0, "venta", "Calamuchita", "no disponible"),
new Propiedad(3,"terreno", 25000, 0, "venta", "Carlos Paz", "reservado"),
new Propiedad(4,"casa", 50000, "3", "alquiler", "Carlos Paz", "no disponible"),
new Propiedad(5,"departamento", 40000, "2", "alquiler", "Córdoba", "disponible"),
new Propiedad(6,"local", 35000, "2", "alquiler", "Carlos Paz", "disponible"),
new Propiedad(7,"casa", 120000, "5", "venta", "Córdoba", "disponible"),
new Propiedad(8,"terreno", 45000, 0, "alquiler", "Córdoba", "disponible"),
new Propiedad(9,"local", 89000, "4", "venta", "Calamuchita", "reservado"),
new Propiedad(10,"casa", 40000, "2", "venta", "Carlos Paz", "disponible"),
new Propiedad(11,"departamento", 28000, "1", "alquiler", "Córdoba", "disponible"),
new Propiedad(12,"casa", 98000, "3", "venta", "Córdoba", "disponible")]