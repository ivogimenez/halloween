// niño.test.js
import { describe, it, expect } from 'vitest';
import { crearBarrio, tresConMasCaramelos, elementosMasUsados } from './helpers/fixture';

describe('barrio', () => {
    describe('methods', () => {
        it('debería retornar los tres niños con mas caramelos', () => {
            const barrio = crearBarrio()
            expect(barrio.tresConMasCaramelos()).toEqual(tresConMasCaramelos)
        });
        it('deberia retornas los elementos mas usados en orden descendente de los niños con mas de 10 caramelos', () => {
            const barrio = crearBarrio()
            expect(barrio.elementosMasUsados()).toEqual(elementosMasUsados)
        });
    });
});