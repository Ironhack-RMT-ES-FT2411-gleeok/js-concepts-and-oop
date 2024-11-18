// HOISTING hago una prelectura, 
// - busco todas las var, las subo al inicio del código pero con valor vacio.
// - busca todas las funciones creadas con palabra funcion, las sube al inicio del código pero con toda su lógica intacta
// - Despues del proceso de hoisting, ejecuta el código.
// var myName = undefined
// function myFunction() { ....toda su lógica }

console.log("probando")



// var 


// console.log(myAge) // ReferenceError: Cannot access 'myAge' before initialization

let myAge = 28;

console.log(myAge)


// let myAge = 30; // SyntaxError: Identifier 'myAge' has already been declared 


console.log(myName) // undefined (proceso hoisting)


var myName = "jorge";
console.log(myName)

// 200 lineas de código

var myName = "bob";
console.log(myName)



// hoisting en funciones


myFunction() // puedes ejecutar la funcion antes de crearla. (tambien ocurre hoisting)

function myFunction() {
  console.log("hola mundo")
}

myFunction()

function myFunction() {
  console.log("patata")
}

myFunction()


// SCOPES  {  }

// 1. Scope global
// 2. Scope de bloque (condicionales, bucles, switch, classes)
// 3. Scope de funciones


// Scope global

let someName = "patricio" // siempre tengo acceso a esta variable

function unaFuncion() {

  if (true) {

    for (let i = 0; i < 3; i++) {

      console.log(someName)

    }

  }

}

unaFuncion()


// Scope de bloque

{
  let myString1 = "variable creada con let" // solo es accesible dentro del bloque
  var myString2 = "variable creada con var" // es accesible en todo el código
  // console.log(myString1)
  // console.log(myString2)
}

// console.log(myString1) // ReferenceError: myString1 is not defined
// console.log(myString2)



// Scope de funcion

function functionScope() {
  console.log(oneString2) // undefined (hoisting)
  let oneString1 = "variable creada con let"
  var oneString2 = "variable creada con var" // hoisting ocurre unicamente dentro de esta funcion
  oneString3 = "variable sin declarar" // accesible siempre en el scope global

  console.log(oneString1)
  console.log(oneString2)

}

functionScope()

// console.log(oneString1) // oneString1 is not defined
// console.log(oneString2) // oneString2 is not defined


// conclusiones:

// 1. nunca usar var. Si vemos var en código externo, cambiarlo al adaptarlo.
// 2. siempre declarar todas las variables
// 3. en caso de usar funcion de declaración, considerar hoisting a la hora de trabajar
// 4. estudiar esto para entrevistas tecnicas



// Referencias


let age1 = 45;
let age2 = 45;

console.log(age1 === age2) // comparando los valores 45 y 45. true

let agesArr1 = [20, 33, 48] // ref. 1234
let agesArr2 = [20, 33, 48] // ref. 4567

console.log(agesArr1 === agesArr2) // comparando las referencias 1234 y 4567. false


console.log( agesArr1[0] === agesArr2[0] ) // true

// JSON.stringify() => convierte una estructura de código a string

console.log(JSON.stringify(agesArr1))
console.log(JSON.stringify(agesArr2))

console.log(JSON.stringify(agesArr1) === JSON.stringify(agesArr2)) // primero convierto a string y luego compara data primitiva por su valor


// let agesArr3 = agesArr1 // pasando la misma referencia ref. 1234
// nunca deberiamos igualar un objeto a otro. PERO JS en algunos caso lo hará automaticamente, parametros y argumentos

// como clonar
// let agesArr3 = agesArr1.slice() // clonar el array. ref 7890
let agesArr3 = JSON.parse( JSON.stringify(agesArr1) ) // ref 7890
// otras formas de clonar. map o operador spread.

agesArr3.pop() // ref. 7890

console.log("copia", agesArr3) // ref. 7890
console.log("original", agesArr1) // ref. 1234
