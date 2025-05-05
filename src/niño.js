import _ from 'lodash'
import { Elemento } from './elemento.js'
import { Sano } from './estado.js'

export default class Niño {
    constructor(nombre, actitud, disfraz, bolsaCaramelos, estado = new Sano()) {
        if (!_.inRange(actitud, 1, 11)) throw new Error("Actitud invalida")
        if (bolsaCaramelos < 0) throw new Error("La bolsa de caramelos no puede estar negativa!")
        if (!disfraz && !Array.isArray(disfraz) || _.some(disfraz, d => !d instanceof Elemento)) throw new Error("Disfráz invalido")

        this.nombre = nombre
        this.estado = estado
        this.actitud = actitud
        this.disfraz = disfraz // [Elementos]
        this.bolsaCaramelos = bolsaCaramelos
    }

    asustar(adulto) {
        if (this.estado.actitud(this) <= 0) throw new Error("Actitud invalida")
        this.bolsaCaramelos += adulto.asustarse(this)
    }

    cantidadCaramelos() {
        return this.bolsaCaramelos
    }

    cantidadSustoTotal() {
        return _.sumBy(this.disfraz, it => it.cantidadSusto()) * this.estado.actitud(this)
    }

    guardarCaramelos(cantCaramelos) {
        this.bolsaCaramelos += cantCaramelos
    }

    niños() {
        return [this];
    }

    comerCaramelos(cantCaramelos) {
        if (cantCaramelos > this.bolsaCaramelos) throw new Error("No podes comer más caramelos de los que tenés!")
        this.estado.comerCarmelos(this, cantCaramelos)
        this.bolsaCaramelos -= cantCaramelos;
    }
}