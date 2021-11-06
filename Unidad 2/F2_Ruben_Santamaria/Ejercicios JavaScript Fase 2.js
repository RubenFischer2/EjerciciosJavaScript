
function ejerc8() {

    //Creamos un numero aleatorio entre 1 y 10
    let aleatorio = Math.trunc(Math.random() * 10) + 1;

    let num = prompt("Introduce un número entre 1 y 10");

    if (aleatorio == num) {
        alert(`Acertaste! El numero era el ${aleatorio}`);
    } else {
        alert(`Losiento, la respuesta era ${aleatorio}`)
    }
}



function ejerc9() {
    //Establecemos el dia de hoy
    let hoy = new Date();

    //Establecemos el dia de navidad del año correspondiente
    let navidad = new Date(hoy.getFullYear(), 11, 25);

    let diferencia = navidad - hoy;

    //Redondeamos el tiempo restante y lo pasamos a dias
    diferencia = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

    alert(`Quedan ${diferencia} días para Navidad!`);
}





function ejerc10() {

    let n1;
    let n2;

    let multiplicacion;
    let division;

    n1 = prompt("Introduce el primer numero:");
    n2 = prompt("Introduce el segundo numero:");

    multiplicacion = n1 * n2;

    division = n1 / n2;

    alert(`${n1} * ${n2} = ${multiplicacion}`)

    alert(`${n1} / ${n2} = ${division}`);
}






function ejerc11() {

    //Establecemos los grados celsius
    let celsius = 60;
    //Despejamos fahrenheit y resolvemos
    let fahrenheit = ((celsius * 9) / 5) + 32;
    alert(`${celsius}ºC = ${fahrenheit}F`);

    //Establecemos los fahrenheit
    fahrenheit = 45;
    //Despejamos celsius y resolvemos
    celsius = ((fahrenheit - 32) / 9) * 5;

    alert(`${fahrenheit}F = ${celsius}ºC`)

}




function ejerc12() {
    let URL = window.location;
    alert(`Url: ${URL}`);
}





function ejerc13() {

    let variable = 4;

    alert(`Valor de la variable: ${variable}`);

    variable = prompt("Introduce el nuevo valor:")

    alert(`El nuevo valor de la variable es ${variable}`)
}




function ejerc14() {

    var archivo = prompt("Introduce el nombre completo del archivo");
    var division = archivo.split('.');
    var extension = division.pop();

    //Comprobamos que el usuario ha añadido la extension del archivo
    if (archivo == extension) {
        alert("Error: No ha escrito el nombre completo del archivo (archivo.png, .pdf ...)")
    } else {
        alert(`La extension del archivo ${archivo} es ${extension}`);
    }
}





function ejerc15() {

    let numero = parseInt(prompt("Introduce un numero:"));
    let resultado = numero - 13;

    if (numero > 13) {
        resultado *= 2;
        alert(`El doble de la resta es ${resultado}`);
    } else {
        alert(`${numero} - 13 = ${resultado}`);
    }
}





function ejerc16() {

    let n1 = parseInt(prompt("Introduce el primer valor:"));
    let n2 = parseInt(prompt("Introduce el segundo valor:"));
    let resultado = n1 + n2;

    if (n1 == n2) {
        resultado *= 3;
        alert(`El triple de la suma es ${resultado}`);
    } else {
        alert(`${n1} + ${n2} = ${resultado}`);
    }
}




function ejerc17() {

    let numero = parseInt(prompt("Introduce un numero:"));
    numero = Math.abs(numero);

    let resultado = numero - 19;

    if (numero > 19) {
        resultado *= 3;
        alert(`El triple de la resta es ${resultado}`);
    } else {
        alert(`${numero} - 19 = ${resultado}`);
    }
}




function ejerc18() {

    let n1 = parseInt(prompt("Introduce el primer valor:"));
    let n2 = parseInt(prompt("Introduce el segundo valor:"));
    let suma = n1 + n2;

    if (suma == 50 || n1 == 50 || n2 == 50) {
        alert(true);

    } else {
        alert(false);
    }
}




function ejerc28() {

    let n1 = parseInt(prompt("Introduce el primer valor:"));
    let n2 = parseInt(prompt("Introduce el segundo valor:"));

    //Comprobamos que esta en dichi rango
    if ((n1 >= 50) && (n1 <= 99) || (n2 >= 50) && (n2 <= 99)) {
        alert(true);
    } else {
        alert(false);
    }
}