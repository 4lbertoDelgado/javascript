
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

/*
This
----------
Su valor hace referencia al propietario (objeto) de la función que la está invocando o en su defecto, al objeto donde dicha función es un método.

// --- Ejemplo 1,2,3 ---- //
El valor de this depende de como es invocada una funcion

Cuando se invoca a una funcion desde un objeto, this hace referencia al ambito de ese objeto.
Cuando se invoca a una funcion sin un objeto, this hace referencia al ambito global

// --- Ejemplo 4 ---- //
Si tratamos de ejecutar sin más la función printName, ya sabemos que el this apunta al objeto global window e irá ahí a buscar las propiedas name y lastName.

En una arquitectura modular, lo ideal es que esa función pueda ser reaprovechada y que nos permita imprimir los datos de cualquier objeto que cumpla con los requisitos. Para ello, podemos cambiar el valor de this en tiempo de ejecución con el fin de que apunte a ese objeto en cuestión. Para ello, contamos con las funciones nativas apply y call:

hemos ejecutado la función printName dentro del contexto de cada uno de los objetos que hemos pasado como argumento.

La diferencia entre cada uno de estas funciones es que la segunda de ellas, apply, acepta un array como argumento

Articulos a tener en cuenta
----------------------------
http://www.etnassoft.com/2012/01/12/el-valor-de-this-en-javascript-como-manejarlo-correctamente/

*/

// ---- Ejemplo1 --- //
var myApp1 = {
  name : 'Megan',
  lastName : 'Fox',
  completeName : this.name + this.lastName
}
console.log( myApp1.completeName ); // undefined

// ---- Ejemplo2 --- //
var myApp2 = {
  name : 'Megan',
  lastName : 'Fox',
  completeName : function(){
    return this.name + ' ' + this.lastName;
  }
}

console.log( myApp2.completeName() ); // Megan Fox

 // ---- Ejemplo3 --- //
var myApp3 = function(){
  var name = "World"
  var sayHello = function(){
    console.log( 'Hello, ' + this.name );
  };
  sayHello(); // Invoke the function
};
 
myApp3(); // Hello, undefined

 // ---- Ejemplo4 --- //
var person1 = {
  name : 'Angelina', 
  lastName : 'Jolie',
  birthDay : '04/06/1975',
  lastMovie : 'The Tourist'
};
 
var person2 = {
  name : 'Scarlett',
  lastName : 'Johansson',
  birthDay : '22/11/1984',
  lastMovie : 'We bought a Zoo'
}
 
var printName = function(){
  console.log( this.name + ' ' + this.lastName );
}

printName.call( person1 ); // Angelina Jolie
printName.call( person2 ); // Scarlett Johansson
 
printName.apply( person1 ); // Angelina Jolie
printName.apply( person2 ); // Scarlett Johansson
