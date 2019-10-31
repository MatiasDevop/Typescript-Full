"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//ASERCIONES DE TIPO EN TYPESCRIPT | TYPE ASSERTIONS
var codecourse;
codecourse = 100;
var numCurso = codecourse;
console.log('numCurso', numCurso);
var student2 = {};
student2.name = 'Robert';
student2.curso = 'Typescript';
var student3 = "{\"name\": \"juan\", \"curso\": \"javascript\"}";
var objetStudent = JSON.parse(student3);
console.log('student', objetStudent);
