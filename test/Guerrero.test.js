var expect = require('chai').expect;

import Infanteria from '../src/Guerrero/Infanteria';
import Arquero from '../src/Guerrero/Arquero';

describe('Guerrero', function() {

    let infante;
    let arquero;
    beforeEach(() => {
        infante = new Infanteria();
        arquero = new Arquero();
    });

    it('Deberia crear un infante con daño 10', () => {
        expect(infante.arma.danio).equal(10);
    })

    it('Deberia crear un arquero con daño 5', () => {
        expect(arquero.arma.danio).equal(5);
    })

});
