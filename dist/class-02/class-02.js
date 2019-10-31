"use strict";
//Type Primitives or basics
// boolean
var isConnected = true;
var isInscrito;
isInscrito = false;
//isInscrito = 2; // Is not valid
function hasDiscount(curso) {
    if (curso === 'typescript')
        return true;
    return false;
}
console.log("hasDiscount('angular)", hasDiscount('angular'));
// number
var students = 100;
var cantStudents;
cantStudents = 120;
function getCantStudents(curso) {
    if (curso === 'typescript')
        return 100;
    return 0;
}
var inscritosCursoTypescript = 100;
//Type: number, hexadecimales
var decimal = 10;
var hexadecimal = 0xf00d;
console.log('hexadecimal', hexadecimal);
console.log('decimal', decimal);
// type: Number, binario
var binario = 10;
console.log('binario', binario);
// type Number, octal
var octal = 493;
console.log('octal', octal);
//String 
var name = 'Luis';
var lastname = 'Aviales';
var nameComplet = name + ' ' + lastname;
console.log('surname', nameComplet);
//String + es6 template literals
var nameComplet2 = name + " " + lastname;
console.log('namecomplet2', nameComplet2);
var arrayCourses = ['typescript', 'Angular'];
var message = "\n    my name is " + nameComplet + " and i have " + arrayCourses.length + " courses.\n    thanks for assist!\n";
var messages = '\n my name is ' + nameComplet + 'and have' + arrayCourses.length + 'Courses.';
console.log('menssage', messages);
//Tipos speciales in Typescript
// type: Any
var unknown; // would be as a var desconocido;
unknown = 'hellow';
unknown = 2;
var unknown2 = 2;
//type: Void
var vacio;
function showContent(curso) {
    var message = curso ? "welcome to course " + curso : 'Subscribe at course';
    console.log('message', message);
}
showContent('typescript');
//Type: Never
var never;
function returnError(error) {
    throw new Error('Error typescript.' + error);
    //Never return a value!
}
//returnError('Values inesperado');
function cicleInfinit() {
    while (true) {
    }
}
//type: Null y undefined
var variableUndefined = undefined;
var variableNull = null;
function retornNull() {
    return null;
}
function retornUndefined() {
    return undefined;
}
var variablesinValor = undefined;
console.log('variable', variablesinValor);
//Functiones in typescript
function greets(name) {
    if (name)
        return 'hellow ' + name;
    return 'hellow!';
}
console.log(greets(nameComplet2));
console.log(greets());
//Arrays typescript
var cursos;
cursos = ['TypeScript', 'Angular'];
//Arrays with generics
var names;
names = ['Luis Aviles', 'Alvaro Felipe'];
var array = [2, 'cadena', true]; // pero any debe usarse no tan frecuentemente solo cuando no tengas control
//Tuplas
var infoCursos = ['typescript', 100];
//infoCursos =[200, 'Angular'] // tuplas has an order
infoCursos = ['angular', 200];
var curso = ['typescript', 150, '08/2019'];
console.log('curso', curso);
var newInscritos = 10;
console.log('fecha de incio', curso[2]);
console.log('Total inscirtos', curso[1] + newInscritos); //((curso[2].))
var tuplaTest = ['a', 'b'];
var tuplaTemp = ['c', 'd'];
tuplaTemp = tuplaTest;
console.log('tumplaTemp', tuplaTemp);
