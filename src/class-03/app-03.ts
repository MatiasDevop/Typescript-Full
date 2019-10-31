export{};
//ASERCIONES DE TIPO EN TYPESCRIPT | TYPE ASSERTIONS
let codecourse:any;
codecourse = 100;

let numCurso:number = <number>codecourse;
console.log('numCurso', numCurso);

// let student: { name: string, curso: string};
// student.name = 'jorge';
// student.curso = "javascript";

type Student ={name:string, curso:string};
let student2 = <Student>{};
student2.name = 'Robert';
student2.curso = 'Typescript';

let student3 = `{"name": "juan", "curso": "javascript"}`;
let objetStudent:Student = <Student>JSON.parse(student3);
console.log('student', objetStudent);