export  class Resource {

    //atributos

    //constructor
    constructor(id, descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    }

    //metodos: se ve desde afuera
    mostrarInformacion =() => {
        console.log(`id: `, this.id);
        console.log(`descripcion: `, this.descripcion);
    }
}