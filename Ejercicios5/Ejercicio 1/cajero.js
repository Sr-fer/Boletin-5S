function retirar_dinero(cantidad) {
    var auxCantidad = cantidad;
    var mensajeBilletes = ""
    var billete500 = 0,
        billete200 = 0,
        billete100 = 0,
        billete50 = 0,
        billete20 = 0,
        billete10 = 0,
        billete5 = 0;
    var isCero = false;

    while (!isCero) {
        if (auxCantidad >= 500) {
            auxCantidad -= 500;
            billete500++;
        } else if (auxCantidad >= 200) {
            auxCantidad -= 200;
            billete200++;
        } else if (auxCantidad >= 100) {
            auxCantidad -= 100;
            billete100++;
        } else if (auxCantidad >= 50) {
            auxCantidad -= 50;
            billete50++;
        } else if (auxCantidad >= 20) {
            auxCantidad -= 20;
            billete20++;
        } else if (auxCantidad >= 10) {
            auxCantidad -= 10;
            billete10++;
        } else if (auxCantidad >= 5) {
            auxCantidad -= 5;
            billete5++;
        } else {
            isCero = true;
        }
    }
    mensajeBilletes = "500 -> " + billete500 +
        "\n200 -> " + billete200 +
        "\n100 -> " + billete100 +
        "\n50 -> " + billete50 +
        "\n20 -> " + billete20 +
        "\n10 -> " + billete10 +
        "\n5 -> " + billete5;

    return mensajeBilletes;
}

function comprobar_multiplo(cantidad) {
    var isMultiplo5o0 = false;
    if ((cantidad % 5) == 0) {
        isMultiplo5o0 = true;
    }
    return isMultiplo5o0;
}

function cajero(cantidad) {
    var mensaje_cantidad;
    if (comprobar_multiplo(cantidad)) {
        mensaje_cantidad = retirar_dinero(cantidad);
    } else {
        mensaje_cantidad = "La cantidad solicitada no es múltiplo de 5 o 0"
    }
    return mensaje_cantidad
}