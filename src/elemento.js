class Elemento {
    constructor(personaje) {
        this.personaje = personaje
    }
    cantidadSusto() {
        throw new Error("Not implemented yet")
    }

    nombre() {
        return `${this.tipoElemento()}: ${this.personaje}`
    }

    tipoElemento() {

    }
}

class TrajeTierno extends Elemento {
    cantidadSusto() {
        return 2;
    }

    tipoElemento() {
        return "Traje tierno"
    }
}

class TrajeTerrorifico extends Elemento {
    cantidadSusto() {
        return 5;
    }

    tipoElemento() {
        return "Traje terrorifico"
    }
}

class Maquillaje extends Elemento {
    cantidadSusto() {
        return 3;
    }

    tipoElemento() {
        return "Maquillaje"
    }
}

export {
    Elemento,
    Maquillaje,
    TrajeTierno,
    TrajeTerrorifico
}