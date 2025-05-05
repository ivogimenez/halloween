import _ from "lodash"
import Niño from './niño.js'

class Adulto {
    constructor(niños) {
        if (niños && (!Array.isArray(niños) || _.some(niños, niño => !(niño instanceof Niño)))) throw new Error("Los niños que asustaron anteriormente son invalidos")
        this.niños = niños || []
    }

    tolerancia() {
        return 10 * _.filter(this.niños, niño => niño.cantidadCaramelos() >= 15).length
    }

    asustarse(asustadores) {
        this.puedeAsustarme(asustadores)
        const caramelosOtorgados = Math.round(this.caramelosOtorgados())
        this.niños = _.concat(this.niños, asustadores.niños())
        return caramelosOtorgados;
    }

    puedeAsustarme(asustadores) {
        if (asustadores.cantidadSustoTotal() < this.tolerancia()) throw new Error("No te alcanza la cantidad de susto para asustarme!");
    }

    caramelosOtorgados() {
        return this.tolerancia() / 2
    }

}

class Abuelo extends Adulto {
    puedeAsustarme(asustadores) {
        // Siempre me asusto
    }

    caramelosOtorgados() {
        return super.caramelosOtorgados() / 2;
    }
}

class AdultoNecio extends Adulto {
    puedeAsustarme(asustadores) {
        throw new Error("Estoy necio, no le tengo miedo a nada!");
    }
}

export {
    Adulto,
    Abuelo,
    AdultoNecio
}