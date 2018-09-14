


/*
This
=====
Su valor hace referencia al propietario (objeto) de la función que la está invocando o en su defecto, al objeto donde dicha función es un método.

Articulos a tener en cuenta
----------------------------
http://www.etnassoft.com/2012/01/12/el-valor-de-this-en-javascript-como-manejarlo-correctamente/
https://es.stackoverflow.com/questions/1799/cuando-usar-una-funci%C3%B3n-flecha-en-vez-de-una-funci%C3%B3n-com%C3%BAn
*/

/*
// --- Ejemplo 1,2,3 ---- //
El valor de this depende de como es invocada una funcion

Cuando se invoca a una funcion desde un objeto, this hace referencia al ambito de ese objeto.
Cuando se invoca a una funcion sin un objeto, this hace referencia al ambito global
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
// Esto puede solucionarse usando solo name y no this.name por teoria de Enclosure
var myApp3 = function(){
  var name = "World"
  var sayHello = function(){
    console.log( 'Hello, ' + this.name );
  };
  sayHello(); // Invoke the function
};
 
myApp3(); // Hello, undefined

/*
// --- Ejemplo 4 ---- //
Si tratamos de ejecutar sin más la función printName, ya sabemos que el this apunta al objeto global window e irá ahí a buscar las propiedas name y lastName.

En una arquitectura modular, lo ideal es que esa función pueda ser reaprovechada y que nos permita imprimir los datos de cualquier objeto que cumpla con los requisitos. Para ello, podemos cambiar el valor de this en tiempo de ejecución con el fin de que apunte a ese objeto en cuestión. Para ello, contamos con las funciones nativas apply y call:

hemos ejecutado la función printName dentro del contexto de cada uno de los objetos que hemos pasado como argumento.

La diferencia entre cada uno de estas funciones es que la segunda de ellas, apply, acepta un array como argumento
*/

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

/*
// ---- This en Funciones Flecha ES6 ---- //
Al usar las funciones flechas, this se asocia automaticamente al contexto inmediato superior 
Javascript permite utilizar una variable, incluso asignarle valores, sin que esta aya sido definida previamente.
Este comportamiento hace que dicha variable de modo IMPLICITO se declare en el entorno global
Con la instruccion "use strict" evito ese comportamiento implicito
*/

// las funciones normales capturan el valor de this como el objeto global (o undefined en modo estricto).
"use strict";
function Persona() {            
  this.edad = 0; // 

  setInterval(function crecer() {    
     console.log(this.edad++); // error lógico, no se refieren a la misma variable
  }, 1000);
}
Persona();
/*
// Mientras que las funciones flecha capturan ese valor del scope externo inmediato:
*/
"use strict";
function Persona(){
    this.edad = 0;
    setInterval(() => {
        console.log(this.edad++); // correcto, this se refiere a una instancia de Persona
    }, 1000);
}
Persona();
