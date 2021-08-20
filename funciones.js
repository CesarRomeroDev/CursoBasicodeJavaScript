// //funciones declarativas

// function miFuncion() {
//     return 3;
// }
// miFuncion();


// //funciones de expresion

// var miFuncion = function(a,b){
//     return a + b;
// }

// miFuncion();

//////////////////////////////////////////////////////////////////////////////7

//funciones declarativas :

function miFuncion() {
    return 3
}
miFuncion();

//funciones de expresion o funciones anonima :

var miFuncion = function(a, b){     //(a, b)parametros
    return a + b;
}
miFuncion();

// si no quiero usar console.log()?
function suma(a, b){
	resultado = a + b;
	return resultado; 
}
suma(1, 2);

//o tambien podemos hacer esto :

function suma(a, b){
	return a + b; 
}
suma(1, 2);