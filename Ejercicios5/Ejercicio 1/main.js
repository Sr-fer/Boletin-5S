function __main__() {
    var cantidad_usuario = 0;
    var mensaje_continuar = "";
    var mensaje_billetes = "";
    var isRunning = false;

    do {
        cantidad_usuario = simple_user_input("Introduce la cantidad a retirar:");
        mensaje_billetes = cajero(cantidad_usuario);
        console_output(mensaje_billetes);
        mensaje_continuar = simple_user_input("¿Quieres retirar más dinero?\n1- Si\n2- No").toLowerCase();

        if (mensaje_continuar == "si" || mensaje_continuar == "y" || mensaje_continuar == "s" || mensaje_continuar == "1") {
            isRunning = true;
        } else {
            isRunning = false;
        }
    } while (isRunning)
}

__main__()