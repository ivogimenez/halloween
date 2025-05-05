// niño.test.js
import { describe, it, expect } from 'vitest';
import { crearLegion, crearLegionConLegiones, crearLegionInválida, legionValidaJSON, legionConLegionJSON } from './helpers/fixture';

describe('legion', () => {
    describe('creacion', () => {
        it('debería crear una legion con dos miembros', () => {
            expect(crearLegion()).toEqual(legionValidaJSON)
        });
        it('debería fallar al crear una legion con menos de dos miembros', () => {
            expect(() => crearLegionInválida()).toThrowError("La legión debe tener al menos 2 miembros")
        });
        it('debería crear una legion con otra legion como miembro', () => {
            expect(crearLegionConLegiones()).toEqual(legionConLegionJSON)
        });
    });
});