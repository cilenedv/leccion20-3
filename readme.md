# Desarrollar un script que lea la cantidad de segundos y el número inicial desde el HTML, luego, mostrar en el HTML un contador que incremente la cantidad de segundos desde el número inicial ingresado.


Caso de Prueba:
input
segundos = 2
número inicial = 10
output
Cada 2 segundos mostraría en el HTML: 10..11..12..13..14..15...
Guía: Usar setInterval()

Solucion: Aparte de declarar el número que se va ingresar y el tiempo que quieres que corra, de alli declarar una variable segundos donde se iguale a tiempo*1000 , por que por mil y no por 360 segundos es por que java script asimile que 360 segundos==1000 segundos ahora crear una función dentro de ella declara la sentecia setInterval() Este método es utilizado para ejecutar repetidamente una función en un intervalo establecido.


