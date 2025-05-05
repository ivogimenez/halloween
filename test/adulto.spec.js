// niño.test.js
import { describe, it, expect } from 'vitest';
import Niño from '../src/niño.js';
import { Adulto, AdultoNecio, Abuelo } from '../src/adulto.js'
import { Sano, EnCama, Empachado } from '../src/estado.js'
import { Maquillaje, TrajeTerrorifico, TrajeTierno } from '../src/elemento.js';

describe('adulto', () => {
    describe('creacion', () => {
        it('debería fallar al crear un adulto con propiedades inválidas', () => {
            expect(() => new Adulto(["A"])).toThrowError(
                'Los niños que asustaron anteriormente son invalidos' // Mensaje exacto
            );
        });

        it('debería fallar al crear un adulto sin niños asustados previamente', () => {
            const adulto = new Adulto()
            expect(adulto).toEqual({ niños: [] })
        });
    });
    describe('tolerancia', () => {
        it('debería retornar una tolerancia igual a diez veces la cantidad de niños asustados previamente con más de 15 caramelos ', () => {
            const adulto = new Adulto([
                new Niño("Juancito", 5, [new Maquillaje("Jason"), new TrajeTerrorifico("Jason")], 25),
                new Niño("Pepito", 5, [new Maquillaje("Jason"), new TrajeTerrorifico("Jason")], 25),
                new Niño("Carlitos", 5, [new Maquillaje("Jason"), new TrajeTerrorifico("Jason")], 2)
            ])
            expect(adulto.tolerancia()).toEqual(20)
        });
    });
    describe('ortorgarCaramelos', () => {
        it('debería otorgar una cantidad de caramelos igual a la mitad de la tolerancia', () => {
            const adulto = new Adulto([
                new Niño("Juancito", 5, [new Maquillaje("Jason"), new TrajeTerrorifico("Jason")], 25),
                new Niño("Pepito", 5, [new Maquillaje("Jason"), new TrajeTerrorifico("Jason")], 25),
                new Niño("Carlitos", 5, [new Maquillaje("Jason"), new TrajeTerrorifico("Jason")], 2)
            ])
            expect(adulto.caramelosOtorgados()).toEqual(10)
        });

        it('debería otorgar una cantidad de caramelos igual a la mitad de la que otorga un adulto normal', () => {
            const abuelo = new Abuelo([
                new Niño("Juancito", 5, [new Maquillaje("Jason"), new TrajeTerrorifico("Jason")], 25),
                new Niño("Pepito", 5, [new Maquillaje("Jason"), new TrajeTerrorifico("Jason")], 25),
                new Niño("Carlitos", 5, [new Maquillaje("Jason"), new TrajeTerrorifico("Jason")], 2)
            ])
            expect(abuelo.caramelosOtorgados()).toEqual(5)
        });
    });
});