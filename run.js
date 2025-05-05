import _ from "lodash"
import Niño from './src/niño.js'
import LegionDelTerror from './src/legion.js'
import { Maquillaje, TrajeTerrorifico, TrajeTierno } from './src/elemento.js'
import { Adulto, Abuelo, AdultoNecio } from './src/adulto.js'
import Barrio from './src/barrio.js'


// Ejercicios

const maquillajeJason = new Maquillaje("Jason")
const maquillajeWinniePooh = new Maquillaje("Winnie Pooh")
const maquillajeJoker = new Maquillaje("Joker")
const maquillajeIt = new Maquillaje("It")

const trajeJason = new TrajeTerrorifico("Jason")
const trajeJoker = new TrajeTerrorifico("Joker")
const trajeIt = new TrajeTerrorifico("It")
const trajeWinniePooh = new TrajeTierno("Winnie Pooh")

const raulito = new Niño("raulito", 9, [maquillajeJason, trajeJason], 25)
const pepito = new Niño("pepito", 3, [maquillajeWinniePooh, trajeWinniePooh], 4)
const carlitos = new Niño("carlitos", 3, [maquillajeJoker, trajeJoker], 14)
const kike = new Niño("kike", 3, [maquillajeJoker, trajeJoker], 10)
const scooby = new Niño("scooby", 3, [maquillajeJoker, trajeJoker], 6)
const floflo = new Niño("floflo", 3, [maquillajeJason, trajeJason], 12)
const tito = new Niño("tito", 3, [maquillajeJoker, trajeJoker], 8)
const titoCalderon = new Niño("titoCalderon", 3, [maquillajeIt, trajeIt], 19)
const tete = new Niño("tete", 3, [maquillajeWinniePooh, trajeIt], 11)

const raul = new Adulto([new Niño("nicolino", 1, [maquillajeJason, trajeJason], 15)])
const abueloRaul = new Abuelo([new Niño("totovich", 1, [maquillajeJason, trajeJason], 15)])
const raulElNecio = new AdultoNecio([new Niño("coco", 1, [maquillajeJason, trajeJason], 15)])


// A. ----------------------------------------------------
console.log("\n----------------------------------------------------")
console.log("Ejercicio A\n")


// A.1
console.log(`1.A Mi capacidad de susto es de ${raulito.cantidadSustoTotal()}.\n`)
// A.2
try {
    console.log("1.B Intentando asustar...")
    console.log(`Actualmente tengo ${raulito.cantidadCaramelos()} caramelos en mi bolsa.`)
    raulito.asustar(raul)
    console.log("Se asustó!")
    console.log(`Despues de asustar tengo ${raulito.cantidadCaramelos()} caramelos en mi bolsa.`)

} catch (error) {
    console.log(`Fallé al asustar :( -> ${error}`)
} finally {
    console.log("")
}



// B. ----------------------------------------------------

// B.1: Dado un conjunto de niños, crear una legión.
console.log("----------------------------------------------------")
console.log("Ejercicio B\n")

try {
    console.log("B.1 Intentando crear una legión...")
    const legion1 = new LegionDelTerror([pepito, carlitos])
    console.log("Cree la legión!")
} catch (error) {
    console.log(`Fallé al crear la legión :( -> ${error}`)
} finally {
    console.log("")
}


// B.2: Hacer que una legión intente asustar a una persona, obteniendo los caramelos, si aplica.

try {
    console.log("B.2 Intentando asustar...")
    const legion2 = new LegionDelTerror([pepito, carlitos])
    console.log(`Actualmente la legión tiene ${legion2.cantidadCaramelos()} caramelos en su bolsa`)
    legion2.asustar(abueloRaul)
    console.log("Se asustó!")
    console.log(`Despues de asustar la legión tiene ${legion2.cantidadCaramelos()} caramelos en su bolsa`)
} catch (error) {
    console.log(`Fallé al asustar :( -> ${error}`)
} finally {
    console.log("")
}

// B.3 3. Nos informan que los niños han aprendido a formar legiones de legiones, es decir,
// legiones donde sus miembros pueden ser niños u otras legiones. Si es necesario
// hacer algún cambio para soportar este requerimiento, realizarlo. De lo contrario,
// explicar porqué es posible.

// No es necesario implementar ningun cambio ya que tanto la legión como los niños implementan la misma interfaz y entienden los mismos mensajes
//  de forma tal que puedo manejarlos polimorficamente. Solo ajusté en Adultos un flatMap para pushear los niños que intentaron asustar al Adulto.


// C. ----------------------------------------------------
console.log("\n----------------------------------------------------")
console.log("Ejercicio C\n")
const barrio = new Barrio([
    raulito,
    pepito,
    carlitos,
    kike,
    scooby,
    floflo,
    tito,
    titoCalderon,
    tete,
])

// C.1: Los tres niños que más caramelos tienen.
console.log(`C.1 Los elementos mas usados del barrio son:\n${_.join(barrio.elementosMasUsados(), "\n")}\n`)
console.log(`C.2 Los tres niños con mas caramelos del barrio son\n${_.join(barrio.tresConMasCaramelos(), "\n")}\n`)

// D. ----------------------------------------------------
console.log("\n----------------------------------------------------")
console.log("Ejercicio D\n")

try {
    console.log("D.1 A comer caramelos...")
    // const tete = new Niño("tete", 3, [maquillajeWinniePooh, trajeIt], 11)
    console.log(`Antes de comer tengo ${tete.cantidadCaramelos()} caramelos en mi bolsa`)
    tete.comerCaramelos(10)
    console.log("Que rico! Comí lo más bien")
    console.log(`Despues de comer me quedaron ${tete.cantidadCaramelos()} caramelos en mi bolsa`)
} catch (error) {
    console.log(`Fallé al comer caramelos :( -> ${error}`)
}

// E. ----------------------------------------------------
console.log("\n----------------------------------------------------")
console.log("Ejercicio E (Bonus)\n")