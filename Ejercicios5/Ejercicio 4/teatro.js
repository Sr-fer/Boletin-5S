//@ts-check
/**
 * Tipo de arte
 * Define Teatro
 * @param {string} nombre - Titulo de la obra
 * @param {Number} duracion - Duracion de la obra
 * @param {Number} epoca - Epoca de la obra
 */

var Teatro = function (nombre, duracion, epoca) {
    this.nombre = nombre
    this.duracion = duracion
    this.epoca = epoca

    this.atributos = function () {
        console.log(this.nombre, this.duracion, this.epoca)
    }
}