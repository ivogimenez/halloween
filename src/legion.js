import _ from "lodash"

export default class LegionDelTerror {
    constructor(miembros) {
        if (miembros && (!Array.isArray(miembros) || miembros.length < 2)) throw new Error("La legión debe tener al menos 2 miembros")
        this.miembros = miembros;
    }

    asustar(adulto) {
        this.guardarCaramelos(adulto.asustarse(this));
    }

    cantidadCaramelos() {
        return _.sumBy(this.miembros, miembo => miembo.cantidadCaramelos())
    }

    cantidadSustoTotal() {
        return _.sumBy(this.miembros, miembo => miembo.cantidadSustoTotal())
    }

    guardarCaramelos(cantCaramelos) {
        const lider = this.liderDeLaLegion()
        lider.guardarCaramelos(cantCaramelos);
    }

    liderDeLaLegion() {
        return _.maxBy(_.flatMapDeep(this.miembros), miembro => miembro.cantidadSustoTotal());
    }

    niños() {
        return _.flatMapDeep(this.miembros)
    }
}