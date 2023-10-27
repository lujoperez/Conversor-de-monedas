var varlorDolar = 100;
var valorEnMxn = 16.89;

var valor = prompt("ingrese el valor del pasaje en dolar");

var b = valorEnMxn * valor;

b.toFixed(1);

alert("el valor en pesos es mxn $" + b.toFixed(1));
