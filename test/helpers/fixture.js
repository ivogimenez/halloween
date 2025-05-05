import Barrio from "../../src/barrio"
import Niño from "../../src/niño"
import { Adulto, Abuelo, AdultoNecio } from "../../src/adulto"
import { Sano, EnCama, Empachado } from "../../src/estado"
import { Maquillaje, TrajeTerrorifico, TrajeTierno } from "../../src/elemento"
import LegionDelTerror from "../../src/legion"

const disfraz1 = [new Maquillaje("Winnieh Pooh"), new TrajeTierno("Winnieh Pooh")]
const disfraz2 = [new Maquillaje("It"), new TrajeTerrorifico("It")]
const disfraz3 = [new Maquillaje("Jason"), new TrajeTerrorifico("Jason")]
const disfraz4 = [new Maquillaje("SlenderMan"), new TrajeTerrorifico("SlenderMan")]
const disfraz5 = [new Maquillaje("Spiderman"), new TrajeTierno("Spiderman")]

export const crearNiño = (actitud = 10, caramelos = 15, estado = new Sano()) => new Niño('Pedro', actitud, disfraz5, caramelos, estado);

export const niñoDeCama = () => crearNiño(10, 15, new EnCama())

export const crearNiñoActitudInvalida = () => new Niño('Juan', 0, disfraz2, 5)

export const crearAdulto = () => new Adulto([crearNiño()])

export const crearAbuelo = () => new Abuelo([crearNiño(), crearNiño(), crearNiño()])

export const crearAdultoNecio = () => new AdultoNecio([])

export const crearBarrio = () =>
    new Barrio([
        new Niño('Negrito', 7, disfraz2, 87),
        new Niño('Carlitos', 7, disfraz2, 76),
        new Niño('Leito', 7, disfraz2, 44),
        new Niño('Maurito', 7, disfraz5, 22),
        new Niño('Juancito', 7, disfraz2, 18),
        new Niño('Chavo', 7, disfraz2, 18),
        new Niño('Juanito', 7, disfraz5, 11),
        new Niño('Nanito', 7, disfraz2, 9),
        new Niño('Julito', 7, disfraz4, 7),
        new Niño('Pepito', 6, disfraz1, 5),
        new Niño('Quico', 7, disfraz5, 5),
        new Niño('Luquitas', 7, disfraz3, 4),
        new Niño('Luchito', 7, disfraz1, 2),
        new Niño('Godines', 7, disfraz5, 2),
    ])


export const crearLegion = () => new LegionDelTerror([new Niño('Pepito', 6, disfraz1, 5), new Niño('Quico', 7, disfraz5, 5)])
export const crearLegionConLegiones = () => new LegionDelTerror([new Niño('Juanito', 7, disfraz5, 11), crearLegion()])
export const crearLegionInválida = () => new LegionDelTerror([new Niño('Pepito', 6, disfraz1, 5)])

export const niñoValidoJSON = ({
    "actitud": 10,
    "bolsaCaramelos": 15,
    "disfraz": [
        {
            "personaje": "Spiderman",
        },
        {
            "personaje": "Spiderman",
        },
    ],
    "estado": {
        "detalle": "Sano",
    },
    "nombre": "Pedro",
})

export const tresConMasCaramelos = [{ "cantCaramelos": 87, "nombre": "Negrito" }, { "cantCaramelos": 76, "nombre": "Carlitos" }, { "cantCaramelos": 44, "nombre": "Leito" }]
export const elementosMasUsados = { "Maquillaje: It": 5, "Maquillaje: Spiderman": 2, "Traje terrorifico: It": 5, "Traje tierno: Spiderman": 2 }

export const legionValidaJSON = {
    "miembros": [
        {
            "actitud": 6,
            "bolsaCaramelos": 5,
            "disfraz": [
                {
                    "personaje": "Winnieh Pooh",
                },
                {
                    "personaje": "Winnieh Pooh",
                },
            ],
            "estado": {
                "detalle": "Sano"
            },
            "nombre": "Pepito",
        },
        {
            "actitud": 7,
            "bolsaCaramelos": 5,
            "disfraz": [
                {
                    "personaje": "Spiderman",
                },
                {
                    "personaje": "Spiderman",
                },
            ],
            "estado": {
                "detalle": "Sano"
            },
            "nombre": "Quico",
        },
    ],
}

export const legionConLegionJSON = {
    "miembros": [
        {
            "actitud": 7,
            "bolsaCaramelos": 11,
            "disfraz": [
                {
                    "personaje": "Spiderman",
                },
                {
                    "personaje": "Spiderman",
                },
            ],
            "estado": {
                "detalle": "Sano"
            },
            "nombre": "Juanito",
        },
        {
            "miembros": [
                {
                    "actitud": 6,
                    "bolsaCaramelos": 5,
                    "disfraz": [
                        {
                            "personaje": "Winnieh Pooh",
                        },
                        {
                            "personaje": "Winnieh Pooh",
                        },
                    ],
                    "estado": {
                        "detalle": "Sano"
                    },
                    "nombre": "Pepito",
                },
                {
                    "actitud": 7,
                    "bolsaCaramelos": 5,
                    "disfraz": [
                        {
                            "personaje": "Spiderman",
                        },
                        {
                            "personaje": "Spiderman",
                        },
                    ],
                    "estado": {
                        "detalle": "Sano"
                    },
                    "nombre": "Quico",
                },
            ],
        },
    ],
}