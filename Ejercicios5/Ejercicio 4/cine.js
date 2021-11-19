//@ts-check
/**
 * Tipo de arte
 * Define Cine
 * @param {string} nombre - Titulo de la pelicula
 * @param {string} genero - Genero de la pelicula
 * @param {number} duracion - Duracion de la pelicula
 */

var Cine = function (nombre, genero, duracion) {
    this.nombre = nombre
    this.genero = genero
    this.duracion = duracion

    this.atributos = function () {
        console.log(this.nombre, this.genero, this.duracion)
    }
}
