import Arco from '../Arma/Arco';

export default class Arquero {
    constructor() {
        this.arma = new Arco();
    }

    equiparArma(arma){
        this.arma = arma;
    }
}