class Propiedad {
    constructor(id,tipo, precio, cantAmbiente, operacion, zona, estado,img) {
        this.id = id
        this.tipo = tipo
        this.precio = parseInt(precio)
        this.cantAmbiente = cantAmbiente
        this.operacion = operacion
        this.zona = zona
        this.estado = estado
        this.img = img
    }
}

const arrayPropiedad = [new Propiedad(1,"casa", 190000, "3", "venta", "Calamuchita", "disponible", "assets/img/casa1.jpg"),
new Propiedad(2,"terreno", 10000, 0, "venta", "Calamuchita", "no disponible","assets/img/casa2.jpg"),
new Propiedad(3,"terreno", 25000, 0, "venta", "Carlos Paz", "reservado","assets/img/casa3.jpg"),
new Propiedad(4,"casa", 50000, "3", "alquiler", "Carlos Paz", "no disponible","assets/img/casa1.jpg"),
new Propiedad(5,"departamento", 40000, "2", "alquiler", "Córdoba", "disponible","assets/img/casa1.jpg"),
new Propiedad(6,"local", 35000, "2", "alquiler", "Carlos Paz", "disponible","assets/img/casa4.jpg"),
new Propiedad(7,"casa", 120000, "5", "venta", "Córdoba", "disponible","assets/img/casa1.jpg"),
new Propiedad(8,"terreno", 45000, 0, "alquiler", "Córdoba", "disponible","assets/img/casa1.jpg"),
new Propiedad(9,"local", 89000, "4", "venta", "Calamuchita", "reservado","assets/img/casa1.jpg"),
new Propiedad(10,"casa", 40000, "2", "venta", "Carlos Paz", "disponible","assets/img/casa1.jpg"),
new Propiedad(11,"departamento", 28000, "1", "alquiler", "Córdoba", "disponible","assets/img/casa1.jpg"),
new Propiedad(12,"casa", 98000, "3", "venta", "Córdoba", "disponible","assets/img/casa1.jpg")]