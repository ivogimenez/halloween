import _ from "lodash"

class Sano {
    constructor() {
        this.detalle = "Sano"
    }

    actitud(niño) {
        return niño.actitud;
    }

    comerCarmelos(niño, cantCaramelos) {
        if (cantCaramelos >= 10) niño.estado = new Empachado()
    }
}

class Empachado {
    constructor() {
        this.detalle = "Empachado"
    }

    actitud(niño) {
        return Math.round(niño.actitud / 2);
    }

    comerCarmelos(niño) {
        if (cantCaramelos > 10) niño.estado = new EnCama()
    }
}

class EnCama {
    constructor() {
        this.detalle = "EnCama"
    }

    actitud(niño) {
        return 0;
    }

    comerCarmelos(niño) {
        throw new Error("Estas en cama, no podes comer caramelos");
    }
}

export {
    Sano,
    Empachado,
    EnCama
}