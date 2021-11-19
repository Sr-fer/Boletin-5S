var perfil = function (nombre, apellidos, direccion, email) {
    this.nombre = nombre
    this.apellidos = apellidos
    this.direccion = direccion
    this.email = email

    this.getnombre = function () {
        return (this.nombre)
    }
    this.getapellidos = function () {
        return (this.apellidos)
    }
    this.getdireccion = function () {
        return (this.direccion)
    }
    this.getemail = function () {
        return (this.email)
    }
    this.setnombre = function (nombre) {
        this.nombre = nombre
    }
    this.setapellidos = function (apellidos) {
        this.apellidos = apellidos
    }
    this.setdireccion = function (direccion) {
        this.direccion = direccion
    }
    this.setemail = function (email) {
        this.email = email
    }
}
