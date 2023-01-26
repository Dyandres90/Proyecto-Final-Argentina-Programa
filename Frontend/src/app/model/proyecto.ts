export class Proyecto {
    id?: number;
    nombreP: string;
    descripcionP: string;
    fechaInicioP: string;
    fechaFinP: string;

    constructor(nombreP: string, descripcionP: string, fechaInicioP: string, fechaFinP: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.fechaInicioP = fechaInicioP;
        this.fechaFinP = fechaFinP;
    }
}