var num=parseInt(prompt("Ingrese un número"));
var tiempo=parseInt(prompt("Ingrese los segundos que desee"));
var segundos=tiempo*1000;

function correr(numero){
	setInterval(function(){
		document.write(num++ +"..");
	}, segundos);
}
correr(num);

