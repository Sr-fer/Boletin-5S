function perfil_usuario() {
    var auxnombre = prompt("Introduce tu nombre")
    var auxapellidos = prompt("Introduce tus apellidos")
    var auxdireccion = prompt("Itroduce tu direccion")
    var auxemail = prompt("Introduce tu email")

    var perfil1 = new perfil(auxnombre, auxapellidos, auxdireccion, auxemail)

    return perfil1
}