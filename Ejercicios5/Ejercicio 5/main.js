function main() {
    var crear_perfil = prompt("Quieres crear un perfil nuevo? Si:1 No:2")
    if (crear_perfil == 1) {
        var perfil1 = perfil_usuario()
        do {
            (isRunning = true)
            var interfaz = prompt("Que quiere hacer? 1:Ver datos, 2:Cambiar datos, 3:Salir")
            if (interfaz == "1") {
                alert(perfil1.getnombre())
                alert(perfil1.getapellidos())
                alert(perfil1.getdireccion())
                alert(perfil1.getemail())
            }
            else if (interfaz == "2") {
                var which = prompt("Que dato quieres cambiar? 1:Nombre, 2:Apellidos, 3:Direccion o 4:Email")
                if (which == "1") {
                    perfil1.setnombre(prompt(" Introduce el nuevo nombre "))

                }
                if (which == "2") {
                    perfil1.setapellidos(prompt(" Introduce los nuevos apellidos "))

                }
                if (which == "3") {
                    perfil1.setdireccion(prompt(" Introduce la nueva direccion "))

                }
                if (which == "4") {
                    perfil1.setemail(prompt(" Introduce el nuevo email "))

                }
            }
            else if (interfaz == "3") {
                isRunning = false
            }
        }
        while (isRunning)
    }

    var ti1 = document.getElementById("dato1")
    ti1.innerHTML = perfil1.getnombre()

    var ti2 = document.getElementById("dato2")
    ti2.innerHTML = perfil1.getapellidos()

    var ti3 = document.getElementById("dato3")
    ti3.innerHTML = perfil1.getdireccion()

    var ti4 = document.getElementById("dato4")
    ti4.innerHTML = perfil1.getemail()
}

main()
