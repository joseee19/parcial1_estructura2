class Producto {
    codigo: string;
    nombre: string;
    precioCosto: number;
    precioVenta: number;
}


class HashTable {
    private table: {[key: string]: Producto};

    constructor() {
        this.table = {};
    }


    private hash(codigo: string): number {
        let hash = 0;
        for (let i = 0; i < codigo.length; i++) {
            hash += codigo.charCodeAt(i);
        }
        return hash % 100;
    }


    agregarProducto(producto: Producto): void {
        const hashKey = this.hash(producto.codigo);
        this.table[hashKey] = producto;
        console.log("Producto agregado: ${producto.nombre}");
    }


    buscarProducto(codigo: string): Producto | null {
        const hashKey = this.hash(codigo);
        const producto = this.table[hashKey];
        return producto ? producto : null;
    }


    mostrarProductos(): void {
        for (const key in this.table) {
            const producto = this.table[key];
            console.log("Código: ${producto.codigo}, Nombre: ${producto.nombre}, Precio Costo: ${producto.precioCosto}, Precio Venta: ${producto.precioVenta}");
        }
    }
}

let farmacia = new HashTable();
farmacia.agregarProducto({ codigo: "P001", nombre: "Pepto-Bismol", precioCosto: 50.00, precioVenta: 65.00 });
farmacia.agregarProducto({ codigo: "P002", nombre: "Aspirina", precioCosto: 30.00, precioVenta: 45.00 });
farmacia.agregarProducto({ codigo: "P003", nombre: "Tylenol", precioCosto: 40.00, precioVenta: 55.00 });

const producto = farmacia.buscarProducto("P002");
if (producto) {
    console.log("Producto encontrado: ${producto.nombre}, Precio Venta: ${producto.precioVenta}");
} else {
    console.log("Producto no encontrado.");
}

farmacia.mostrarProductos();
