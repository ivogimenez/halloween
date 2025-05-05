import _ from "lodash"
import Niño from './niño.js'

export default class Barrio {
    constructor(niños) {
        if (!Array.isArray(niños) || _.some(niños, niño => !niño instanceof Niño)) throw new Error("Los niños que asustaron anteriormente son invalidos")
        this.niños = niños;
    }

    tresConMasCaramelos() {
        return _(this.niños)
            .orderBy(n => n.cantidadCaramelos(), "desc")
            .map(n => ({ nombre: n.nombre, cantCaramelos: n.cantidadCaramelos() }))
            .take(3)
            .value()
    }

    elementosMasUsados() {
        return _(this.niños)
            .filter((niño) => niño.cantidadCaramelos() > 10)
            .flatMap((niño) => _.get(niño, "disfraz"))
            .map((disfraz) => disfraz.nombre())
            .countBy()
            .value()
    }
}