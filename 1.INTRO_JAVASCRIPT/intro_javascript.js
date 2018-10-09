// Ejemplo

for (var x=1;x<10;x++) {
    console.log(x);
}
console.log("Caracteres especiales \\ \" \' \n \t");
console.log(revertString("Hola"));
// Invierte el orden de caracteres de una palabra   
function revertString(w) {
    var revw = "";
    // bucle sobre los caracteres en orden inverso
    for (var i = w.length - 1; i >= 0; i--) {
        // concatena una nueva palabra  
        revw = revw.concat(w[i]);
    }
    return revw;
}


/* 
Tipos de datos 
---------------
nullse refiere al "valor de la nada", 
mientras que undefined se refiere a la "ausencia de valor".

NaNsignifica "Not-A-Number" y a menudo se devuelve indicando un error con operaciones numéricas. Por ejemplo, si escribió algún código que realizó un cálculo matemático, y el cálculo no pudo generar un número válido, NaNpodría ser devuelto.

Comparacion de tipos
---------------------
==      es igual valor
!=      no es igual valor
===     es igual tipo y valor
!==     no es igual tipo y valor

*/

/*

Condicional
---------------------
&&      y
||      o
!       negacion 

Falsy y Truthy
---------------------
Valores falsy (false, null, undefined, 0, "", NaN)
Valores truthy (si no esta en la lista de falsy es truthy)


Operador ternario
----------------------
conditional ? (if condition is true) : (if condition is false)

*/

// Ejemplo if else
var a = 1;
var b = 2;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than or equal to b");
}

// Ejemplo if else if
var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}

// Ejemplo ternario
var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

// Ejemplo switch
var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
  default:
    output += "one copy of the Exploding Kittens card game.";
}

/* 
Bucles
-----------------

While
Partes de un bucle while
1. Cuando comenzar
2. Cuando detenerse
3. Como llegar al siguiente elemento

*/

var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}

for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}

/*
Operadores
---------------
x++ or ++x // same as x = x + 1 
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5
*/

/*
Funciones
----------------
En Javascript existe el concepto de [levantamiento] 
el cual hace que al momento de compilacion 
primero se compilan las funciones en un script 
primero se compilan las declaracion de variales en una funcion 
para asi ser usadas y llamadas en cualquier orden al que sean escritos
y no necesariamente de arriba hacia abajo

la declaracion de variables se eleva dentro de una funcion
pero no se eleva la asignacion de valores, por lo que al ser 
usada esas variabñes se puese obtener undefined

Para evitar estos errores:
declarar funciones arriba de los script
declarar variables arriba de las funciones

Funciones anonimas
------------------
Son las funciones que son almacenadas en una variable
Al tener este comportamiento estas funciones se comportan como una asignacion
y no son elevadas en momento de compilacion

Las funciones anonimas tambein podrian tener un nombre
pero al ser llamadas, deben ser llamadas igualmente por el
nombre de la variable

Retrollamada de funciones
-------------------------
Ser capaz de almacenar una función en una variable hace 
que sea realmente simple pasar la función a otra función. 
Una función que se pasa a otra función se llama devolución de llamada. 

Expresiones de función en línea
--------------------------------
Una expresión de función es cuando una función se asigna a una variable. 
Y, en JavaScript, esto también puede suceder cuando pasa una función 
en línea como argumento a otra función. 

¿Por qué usar expresiones anónimas de función en línea?
Usar una expresión de función en línea anónima puede parecer 
algo muy poco útil al principio. ¿Por qué definir una función que 
solo se puede usar una vez y ni siquiera se puede llamar por su nombre?

Las expresiones anónimas de función en línea a menudo se usan 
con devoluciones de llamada de función que probablemente no se 
reutilizarán en otro lugar. Sí, podría almacenar la función en una 
variable, darle un nombre y pasarla como lo vio en los ejemplos anteriores. 
Sin embargo, cuando sabe que la función no va a ser reutilizada, 
puede ahorrarle muchas líneas de código para definirlo en línea.

*/
// Ejemplo de una funcion
function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}

var avg = findAverage(5, 9);

// Ejemplo de una Funcion anonima
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

console.log(catSays(3));

//Ejemplo de una retrollamada funcion
// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);

// Ejemplo de expresiones de funcion en linea
// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");

// Devoluciones: Mi película favorita es Buscando a Nemo

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

// Devoluciones: Mi película favorita es Buscando a Nemo

// ------------------------------------------- //
// Ejemplo 2

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc);
}

var laugh = function(num) {
  var numHa = "";
  for (var i = 0; i < num; i++) {
      switch (i) {
          case num - 1:
              numHa += "ha!";
              break;
          default:
              numHa += "ha";
      }
  }
  return numHa;
}

emotions("happy", laugh(2));

// Devolucion I am happy, haha!

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num) {
  var numHa = "";
  for (var i = 0; i < num; i++) {
      switch (i) {
          case num - 1:
              numHa += "ha!";
              break;
          default:
              numHa += "ha";
      }
  }
  return numHa;
});

// Devolucion I am happy, haha!

/*
Expresiones Funcionales

Son funciones que pueden ser autoinvocadas
Estan de limitadas entre dos ()

Las funciones con nombre se le llama funciones declaradas
las funciones anonimas asignadas se le llama expresiones funcionales
las funciones con nombre pero encerradas entre parentesis se le llama expresiones funcionales
las funciones anonimas pero encerradas entre parentesis se le llama expresiones funcionales
*/

(function nombreFuncion1() {
  console.log("Hola desde IIFE");
})();

(function nombreFuncion2() {
  console.log("Hola desde IIFE");
})();

/*
Arrays
------------

Una matriz es útil porque almacena múltiples valores en una sola estructura de datos organizada.
si intenta acceder a un elemento en un índice que no existe, se devolverá un valor de indefinido.

*/

// creates a `donuts` array with three strings
var donuts = ["glazed", "powdered", "jelly"];
console.log(donuts[0]);

// creates a `mixedData` array with mixed data types
var mixedData = ["abcd", 1, true, undefined, null, "all the things"];

// creates a `arraysInArrays` array with three arrays
var arraysInArrays = [[1, 2, 3], ["Julia", "James"], [true, false, true, false]];

var arraysInArrays = [
  [1, 2, 3], 
  ["Julia", "James"], 
  [true, false, true, false]
];

// Para cambiar el valor de una posicion, se debe definir de nuevo
donuts[1] = "glazed cruller";

/*
Metodos y propiedades de una matriz

Propiedad

length: devuelve la cantidad de elementos de un array

Metodo

slice: no modifica array original, (devuelve una copia plana de los elementos especificados del array)
 - 1er args indice de inicio
 - 2do args indice de final 
reverse: invierte el orden de elementos un array
sort: ordena los elementos de un array
push: agrega un elemento al final a un array (devuelve la nueva length del array)
pop: elimina un elemento al final de un array (devuelve el elemento que se ha eliminado)
unshift: agrega un elemento al inicio a un array (devuelve la nueva length del array)
shift: elimina un elemento al inicio de un array (devuelve el elemento que se ha eliminado)
splice: agregar y eliminar elementos de cualquier lugar a un array (devuelve array con elementos eliminados)
 - 1er args indice iniciar desde que se desea cambiar
 - 2do args cantidad de elementos a eliminar
 - 3er args + elementos que se desea agregar
join: junta los elementos de un array
 - 1er args (opc) el separador
concat: concatena dos arrays
copyWithin: copia plana de una sección a otra dentro del mismo array
fill: rellena todos los elementos de un arreglo desde el índice start hasta el índice end, con el valor estático de value.


*/

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];

console.log(donuts.length);

donuts.push("powdered"); // pushes "powdered" onto the end of the `donuts` array

donuts.pop();

donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1

// Un array de elementos numéricos,  sin función de comparación:
var arr = [ 40, 1, 5, 200 ];
arr.sort();  //[ 1, 200, 40, 5 ]

// Un array de elementos numéricos, usando una función de comparación:
var arr = [ 40, 1, 5, 200 ];
function comparar ( a, b ){ return a - b; }
arr.sort( comparar );  // [ 1, 5, 40, 200 ]

// Lo mismo pero usando una función anónima normal:
var arr = [ 40, 1, 5, 200 ];
arr.sort(function(a,b){return a - b;});  // [ 1, 5, 40, 200 ]

// Ejemplo de slice
var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3); // masculinos contiene ['Pedro','Miguel']

//Ejemplo de fill
var array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

/*
Bucles en Array
*/

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

donuts.forEach(function(elemento,indice) {
  elemento += " hole";
  elemento = elemento.toUpperCase();
  console.log(elemento, indice);
});

/*
Parámetros funcion forEach
La función que pasa al forEach()método puede tomar hasta tres parámetros. 
En el video, estos se llaman element, index y array, pero puedes llamarlos como quieras.

El forEach()método llamará a esta función una vez para cada elemento de la matriz (de ahí el nombre forEach). 
Cada vez, invocará la función con diferentes argumentos. 

El element parámetro obtendrá el valor del elemento de la matriz. 
El index parámetro obtendrá el índice del elemento (comenzando con cero). 
El array parámetro obtendrá una referencia a toda la matriz, que es útil si desea modificar los elementos.

Siempre devuelve undefined

Prints:
Word 0 in cat,in,hat is cat
Word 1 in cat,in,hat is in
Word 2 in cat,in,hat is hat
*/

words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

/*
Metodo map
crear una nueva matriz a partir de una matriz existente es simple con el poderoso map()

El map()método acepta un argumento, una función que se usará para manipular cada elemento de la matriz. 
En el ejemplo, usamos una expresión de función para pasar esa función a map(). 
Esta función está tomando un argumento, donut que corresponde a cada elemento de la donutsmatriz. 
Ya no es necesario iterar sobre los índices.
*/

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

//donuts array: ["jelly donut", "chocolate donut", "glazed donut"]
//improvedDonuts array: ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]

/*
Nuevo en ES6 for...of
Con el tipo de datos let, limitamos/encerramos la declaracion de esa variable solo a la esstructura donde se declara.
En nuestro ejemplo solo lo limita al for, evitando asi colisiones y declaraciones en el global escope

For..of recorre cada elemento de la matriz
*/

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

for(let elemento of donuts) {
  console.log(elemento);
}


/*
Arrays de Arrays
*/
var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];
for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}

/*
Objetos

Convenciones de nombres
Siéntase libre de usar números y letras mayúsculas y minúsculas, 
pero no inicie el nombre de su propiedad con un número. 
¡No necesita envolver la cadena entre comillas! 
Si es una propiedad de varias palabras, use camel case. 
No use guiones en los nombres de sus propiedades

typeof es un operador que devuelve el nombre del tipo de datos que lo sigue:
*/

typeof "hello" // returns "string"
typeof true // returns "boolean"
typeof [1, 2, 3] // returns "object" (Arrays are a type of object)
typeof function hello() { } // returns "function"

var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   }
};

var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture(); // method
sister.name // property
// two equivalent ways to use the key to return its value
sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]

//Otro ejemplo de objeto

var facebookProfile = {
    name: "Pierre",
    friends: 10,
    messages: [],
    postMessage: function addMessage(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function removeMessage(index) {
        facebookProfile.messages.splice(index,1);
    },
    addFriend: function() {
          facebookProfile.friends++;  
    },
    removeFriend: function() {
        if (facebookProfile.friends > 0) {
           facebookProfile.friends--; 
        }
    }
}

facebookProfile.postMessage("Hola CTM");
facebookProfile.postMessage("Chau HDP");
console.log(facebookProfile.messages);

facebookProfile.addFriend();
facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.removeFriend();
facebookProfile.removeFriend();
console.log(facebookProfile.friends);


// Las variables tambien puedes ser dadas como propiedades de un objeto
var opinion = "Es uno de mis libros favoritos";
var libro = {
    titulo: "IT",
    autor: "Stephen King",
    genero: "terror",
    tags: ["Darryl", "payaso"],
    opinion: opinion,
};

/*
for...in
Nos permite recorrer un objeto 
*/

for (var propiedad in libro) {
  console.log(propiedad + " : " + libro[propiedad]);
}

// Array de objetos
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(function (e) {
    console.log(e.type + " donuts cost " + e.cost + " each");
})
// =
for (let e of donuts) {
  console.log(e.type + " donuts cost " + e.cost + " each")
}



