function main() {
    var Jugar = true
    var seguir_jugando =""
    var Numero_Aleatorio = 0

while(Jugar) {
Numero_Aleatorio = adivinar_random()
adivinar_if(Numero_Aleatorio)
seguir_jugando = prompt("¿Otra partida? 1=si, 2=no")
if (seguir_jugando == "2") {
Jugar = false
}
}
}
main()