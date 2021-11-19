//@ts-check
/**
 * Tipo de arte
 * Define Escultura
 * @param {string} nombre - Nombre de la escultura
 * @param {string} material - Material de la escultura
 * @param {number} epoca - Epoca de la escultura
 */

var Escultura = function (nombre, material, epoca) {
    this.nombre = nombre
    this.material = material
    this.epoca = epoca

    this.atributos = function () {
        console.log(this.nombre, this.material, this.epoca)
    }
}