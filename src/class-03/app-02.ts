export {};
//Alias to type data in TS type 2
let curso:string = "typescript";
//Coursos, Code:Javascript = 1, Typescript = 2
//curso = 1; //JAvascript

type Curso = string | number;

let cursoNew: string | number| boolean;
cursoNew = 'Javascript';
cursoNew = 2; //typescript
function getCurso(): Curso {
    //return 'Javascript';
    return 1;
}

//arrays
let cursos: string[] = ['Javascript', 'TypeScript'];
let cursos2: Curso[] = ['Javascript', 'TypeScript', 1];

console.log('cursos', cursos);
console.log('cursos2', cursos2);