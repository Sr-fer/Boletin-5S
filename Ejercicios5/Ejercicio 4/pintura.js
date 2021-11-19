//@ts-check
/**
 * Tipo de arte
 * Define los cuadros
 * @param {string} nombre - Nombre de la pintura
 * @param {string} autor - Autor de la pintura
 * @param {string} estilo - Estilo de la pintura
 */

var Pintura = function (nombre, autor, estilo) {
    this.nombre = nombre
    this.autor = autor
    this.estilo = estilo

    this.atributos = function () {
        console.log(this.nombre, this.autor, this.estilo)
    }
}
