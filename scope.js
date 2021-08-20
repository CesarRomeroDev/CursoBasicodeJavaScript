var nombre = "Julio"

function fun(){
    var apellido = "Romero";
    return nombre + " " + apellido
}

fun();


// error

var nombre = "Julio";

function fun(){
    var apellido = "romero";
    return nombre + " " + apellido
}
console.log(apellido);

