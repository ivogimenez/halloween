// niño.test.js
import { describe, it, expect } from 'vitest';
import Niño from '../src/niño.js';
import { Adulto, AdultoNecio, Abuelo } from '../src/adulto.js'
import { Sano, EnCama, Empachado } from '../src/estado.js'
import { Maquillaje, TrajeTerrorifico, TrajeTierno } from '../src/elemento.js';
import {
    crearNiño,
    crearNiñoActitudInvalida,
    niñoValidoJSON,
    crearAdulto,
    crearAdultoNecio,
    crearAbuelo,
    niñoDeCama
} from './helpers/fixture';


describe('niño', () => {
    describe('creacion', () => {
        it('debería crear un niño válido', () => {
            expect(crearNiño()).toEqual(niñoValidoJSON);
        });

        it('debería fallar por actitud inválida', () => {
            expect(() => crearNiñoActitudInvalida()).toThrowError('Actitud invalida');
        });
    });

    describe('methods', () => {
        describe('asustar()', () => {
            it('deberia asustar a una adulto y sumar caramelos a su bolsa', () => {
                const niño = crearNiño(10, 20)
                const adulto = crearAdulto()

                const asustarYcontarCaramelos = () => {
                    niño.asustar(adulto)
                    return niño.cantidadCaramelos()
                }
                expect(asustarYcontarCaramelos()).toEqual(25);
            });

            it('debería fallar al asustar un adulto necio', () => {
                const niño = crearNiño()
                const adultoNecio = crearAdultoNecio()

                expect(() => {
                    niño.asustar(adultoNecio)
                }).toThrowError("Estoy necio, no le tengo miedo a nada!");
            });

            it('debería asustar un abuelo incluso si su capacidad de susto es menor a la tolerancia', () => {
                const niñoSinActitud = crearNiño(1)
                const abuelo = crearAbuelo()

                const asustarYcontarCaramelos = () => {
                    niñoSinActitud.asustar(abuelo)
                    return niñoSinActitud.cantidadCaramelos()
                }

                expect(asustarYcontarCaramelos()).toEqual(23);
            });
        })

        describe('comerCaramelos()', () => {
            it('deberia comer caramelos si le alcanzan en su bolsa', () => {
                const niño = crearNiño()

                const comerCaramelos = (caramelos) => {
                    niño.comerCaramelos(caramelos)
                    return niño.cantidadCaramelos()
                }
                expect(comerCaramelos(7)).toEqual(8);
            });

            it('debería fallar al comer mas que los caramelos que dispone', () => {
                const niño = crearNiño()

                expect(() => {
                    niño.comerCaramelos(18)
                }).toThrowError("No podes comer más caramelos de los que tenés!");
            });

            it('debería fallar al comer caramelos si está en cama', () => {
                const niño = niñoDeCama()

                expect(() => {
                    niño.comerCaramelos(2)
                }).toThrowError("Estas en cama, no podes comer caramelos");
            });

            it('debería cambiar de el estado del niño tras comer 10 o más caramelos', () => {
                const niño = crearNiño();

                niño.comerCaramelos(10)
                expect(niño.estado).toEqual(new Empachado());
            });
        })
    });
});