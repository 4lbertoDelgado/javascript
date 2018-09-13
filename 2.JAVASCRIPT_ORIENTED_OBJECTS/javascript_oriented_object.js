
/*
Alcance Scope
-----------------
Cuado se le asigna un valor a una variable que nunca a sido declarada con la palabra var, esta toma una alcance global. Es una mala practica.

Los ambitos son solo delimitados por las llaves que encierran las funciones
No como en otros lenguajes que importan las llaves de los bucles o las condicionales

Contextos Lexicos
Es el contexto de alcance de las variables a medida que se va escribiendo el codigo

Contextos de Ejecucion
Es el contexto de alcance de las variables a medida que se va ejecutando el codigo

*/
/*
Closures
------------------
Es una funcion que retorna desde otra funcion. y esta se lleva una referencia a el ambito (variables, parametros y funciones) de la funcion que la retorna

Esa referencia al ambito superior debe de existir, congelaser,  hasta que la funcion interna se ejecute ya que sino daria error porque no podria acceder a esas variables

Tienen la capacidad de acceder a todas las funciones variables y parametros que se encuentran fuera de su ambito de contexto, aun cuando la funcion padre aya terminado de ejecutarse.

La funcion definida en el closure recuerda la funcion donde se ha creado

Formas de manejar la funcion interna:
 a. Se puede retornar una funcion anonima 
 b. Se puede ejecutar en el contaxto de la funcion padre
*/

function nombre(primerNombre) {
    var saludo = "Como estas?";

    return function (apellido) {
        console.log("Hola " + primerNombre + " " + apellido + " " + saludo);
    }
}

// Se puede invocar a la funcion asi
nombre("Pierre")("Delgado"); // El segundo parentesis hace referencia a la funcion interna
// O se puede invocar asi tambien
var variable = new nombre("Bryan");
console.log(variable); // aqui puedo ver que variable tiene asignada una funcion, que es la funcion anonima que la que ha retornado la funcion padre nombre
variable("Carrizales"); // Como se que es la funcion anonima, la invoco pasandole su parametro
// Al impimirse, esta utiliza sus variable parametros internos asi como las referecnias a las variables y parametros de la funcion padre

