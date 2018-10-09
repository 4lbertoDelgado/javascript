
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
Es una funcion que retorna desde otra funcion. y esta se lleva una referencia a el ambito 
(variables, parametros y funciones) de la funcion que la retorna

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
console.log(variable); // aqui puedo ver que variable tiene asignada una funcion, que es la funcion anonima que la  ha retornado la funcion padre nombre	
variable("Carrizales"); // Como se que es la funcion anonima, la invoco pasandole su parametro	
// Al impimirse, esta utiliza sus variable parametros internos asi como las referecnias a las variables y parametros de la funcion padre	


//Clusores y Bucles
// no funciona debido a que la ejecucion de la funcion anonima ocurre 1 seg despues del for
// cuando esta se ejecuta i ya es igual a 5 
for(var i = 1; i <= 5; i++){
  setTimeout(function(){
    console.log(i);
  }, i * 1000);
}

// para solucionarlo, colocamos el setTimeout dentro de una funcion 
// para que por concepto de closure, congele el valor de i
// aqui usamos el concepto de expresiones funcionales para ejecutar la funcion directamente con el uso de los ()
// no funciona
for(var i = 1; i <= 5; i++){
  (function() {
    setTimeout(function(){
      console.log(i);
    }, i * 1000);
  })();
}

// para solucionarlo debemos hacer una referencia a la variable i para que la mantenga congelada en cada ejecucion
// si funciona
for(var i = 1; i <= 5; i++){
  (function() {
    var z = i;
    setTimeout(function(){
      console.log(z);
    }, i * 1000);
  })();
}

// refactorizado el codigo seria asi
// aqui pasamos i como parametro a la funcion que lo recibe como z
// si funciona
for(var i = 1; i <= 5; i++){
  (function(z) {
    setTimeout(function(){
      console.log(z);
    }, z * 1000);
  })(i);
}

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

// ---- Ejemplo 4 ---- //
// this hace referecnia a como es llamada la funcion

var persona = {
  nombre: "Pierre",
  edad: "30",
  ocupacion: "dev",
  color: "azul",
  ciudad: "Lima",
  saludar: function() {
    console.log("Hola " + this.nombre);
  },
};

// Asiganmos la funcion a una variable para ejemplificar su salida al ser ejecutada
var otraFunction = persona.saludar; 

// llamamos 2 veces a la misma funcion
// Cuando se invoca a una funcion sin un objeto, this hace referencia al ambito global
otraFunction(); // Hola undifined
// Cuando se invoca a una funcion desde un objeto, this hace referencia al ambito de ese objeto.
persona.saludar(); // Hola Pierre

/*
// ---- Ejemplo 5 ---- //

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
http://www.etnassoft.com/2011/03/01/strict-mode-en-javascript/
Por ejemplo, el modo estricto impide crear accidentalmente variables globales cuando no las iniciamos utilizando var:

"use strict";
mistypedVar = 'Hello World'; // assignment to undeclared variable mistypedVar

También ahora los intentos de sobreescribir variables, métodos u objetos nativos del lenguaje lanzarán su correspondiente error:

"use strict";
NaN = 42; // NaN is read-only
 
var obj = { get x() { return 17; } };
obj.x = 5; // Setting a property that has only a getter
 
delete Object.prototype; // property Object.prototype is non-configurable and can't be deleted

Otro nuevo error se produce si tratamos de asignar el mismo nombre para dos propiedades de un mismo objeto:

"use strict";
var foo = { bar : 1, bar : 2 } // property name bar appears more than once in object literal

En el modo estricto, el comportamiento ha cambiado y ahora los valores undefined o null remiten a la función original:

"use strict";
function foo(){
  return this;
}
 
console.log( foo ); // foo()

*/

// las funciones normales capturan el valor de this como el objeto global (o undefined en modo estricto).
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
function Persona(){
    this.edad = 0;
    setInterval(() => {
        console.log(this.edad++); // correcto, this se refiere a una instancia de Persona
    }, 1000);
}
Persona();

// Herencia en Objetos
// Los objetos heredan metodos de sus objetos padres

var persona = {
  nombre: "Pierre",
};

// para saber si una propiedad es propia de un objeto especifico
console.log(persona.hasOwnProperty('nombre')); // true
console.log(persona.hasOwnProperty('toString')); // false

// Creacion de objetos con Object create
var BF = {
  titulo: 'BattleField',
  genero: 'FPS',
  jugar: function() {
    console.log('Estoy jugando a ' + this.titulo);
  }
}

// creamos el objeto BF1 a partir del objeto BF
var BF1 = Object.create(BF);
BF1.version = '1.0'; // le agtregamos una propiedad solo a ese objeto, las demas propiedades son de sus protos
console.log(BF1);
console.log(BF.isPrototypeOf(BF1)); // true

console.log(Object.prototype.isPrototypeOf(BF)); //true

// El crear un objeto con Object.create es lo mismo que crear un objeto con Object Literal Notation {}
// Ambas sentencias son iguales
// Syntacx sugar para Object create
var objeto1 = {};
var objeto2 = Object.create(Object.prototype);

// creacion de objetos con new
function Cod() {
  this.titulo = 'Call of Duty';
  this.genero = 'FPS';
  this.jugar = function() {
    console.log('Estoy jugando a ' + this.nombre);
  };
}
var iw = new.Cod();
iw.version = '2.0'; // le agregamos una propiedad al objeto, pero las demas propiedades son tambien de este objeto
console.log(iw);
console.log(Cod.isPrototypeOf(iw)); // false

// La diferencia entre Object create y new
// Object create, solo agrega las nuevas propiedades que van a ser propias de ese objeto. el resto las hereda de los proto
// aqui se tiene una copia y se comparte con los objetos creados
// new, agrega las nuevas propiedades y hace suyas tambien las definidas en la funcion
// aqui se crea una nueva copia por cada objeto creado















