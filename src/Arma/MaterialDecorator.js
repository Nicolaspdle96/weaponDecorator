export default class MaterialDecorator {
    constructor(arma) {
        this.arma = arma;
    }

    anhadirMadera(){
        this.arma.danio = this.arma.danio + 5;
    }

    anhadirHierro(){
        this.arma.danio = this.arma.danio + 10;
    }

    anhadirFuego(){
        this.arma.danio = this.arma.danio + 30;
    }

    calcularDaño() {
        return this.arma.danio;
    }
    
}