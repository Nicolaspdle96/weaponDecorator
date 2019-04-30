const expect = require('chai').expect;

import Infanteria from '../src/Guerrero/Infanteria';
import Arquero from '../src/Guerrero/Arquero';
import MaterialDecorator from '../src/Arma/MaterialDecorator';

describe('Arma', () => {

    let infante;
    let arquero;
    beforeEach(() => {
        infante = new Infanteria();
        arquero = new Arquero();
    });

    it('Deberia crear un infante con arma normal', () => {
        expect(infante.arma.danio).equal(10);
    })

    it('Deberia crear un arquero con arma de madera', () => {
        let arcoDeMadera = new MaterialDecorator(arquero.arma);
        arcoDeMadera.anhadirMadera();
        arquero.equiparArma(arcoDeMadera);
        expect(arquero.arma.calcularDaño()).equal(10);
    })

    it('Deberia crear un arquero con arma de hierro', () => {
        let arcoDeHierro = new MaterialDecorator(arquero.arma);
        arcoDeHierro.anhadirHierro();
        arquero.equiparArma(arcoDeHierro);
        expect(arquero.arma.calcularDaño()).equal(15);
    })

    it('Deberia crear un arquero con arma de madera y hierro', () => {
        let arcoDeMaderaYHierro = new MaterialDecorator(arquero.arma);
        arcoDeMaderaYHierro.anhadirMadera();
        arcoDeMaderaYHierro.anhadirHierro();
        arquero.equiparArma(arcoDeMaderaYHierro);
        expect(arquero.arma.calcularDaño()).equal(20);
    })

    it('Deberia crear un infante con arma de fuego', () => {
        let espadaDeFuego = new MaterialDecorator(infante.arma);
        espadaDeFuego.anhadirFuego();
        infante.equiparArma(espadaDeFuego);
        expect(infante.arma.calcularDaño()).equal(40);
    })

    it('Deberia crear un infante con arma de madera y fuego', () => {
        let espadaDeMaderaYFuego = new MaterialDecorator(infante.arma);
        espadaDeMaderaYFuego.anhadirMadera();
        espadaDeMaderaYFuego.anhadirFuego();
        infante.equiparArma(espadaDeMaderaYFuego);
        expect(infante.arma.calcularDaño()).equal(45);
    })

})