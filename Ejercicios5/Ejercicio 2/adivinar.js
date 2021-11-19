function adivinar_if(Numero_Aleatorio) {
    alert(Numero_Aleatorio)
    var Adivinar_Numero = ""
    var intentos = 0
    var Adivinado = false 

    while(!Adivinado && intentos < 5) {
    Adivinar_Numero = prompt("Intenta adivinar el numero" + " te quedan " + (5-intentos) + " Intentos ")
    if(Adivinar_Numero > Numero_Aleatorio) {
    alert("El numero introducido es menor")
    } 
    if(Adivinar_Numero < Numero_Aleatorio) {
    alert("El numero introducido es mayor")
    } 
    if(Adivinar_Numero == Numero_Aleatorio) {
    alert("Enhorabuena, has acertado el número")
    Adivinado = true
    }
    if(Adivinar_Numero != Numero_Aleatorio) {
    alert("Intentalo otra vez")
    } 
    intentos ++
    } 
} 