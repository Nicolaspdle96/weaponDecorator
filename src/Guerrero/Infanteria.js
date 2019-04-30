import Espada from '../Arma/Espada';

export default class Infanteria {
    constructor() {
        this.arma = new Espada();
    }

    equiparArma(arma){
        this.arma = arma;
    }

}