export {};
//Alias to type data in TS
let curso:string = "typescript";
//Coursos, Code:Javascript = 1, Typescript = 2
//curso = 1; //JAvascript
let cursoNew: string | number;
cursoNew = 'Javascript';
cursoNew = 2; //typescript
function getCurso(): string | number{
    //return 'Javascript';
    return 1;
}

//arrays
let cursos: string[] = ['Javascript', 'TypeScript'];
let cursos2: (string | number)[] = ['Javascript', 'TypeScript', 1];

console.log('cursos', cursos);
console.log('cursos2', cursos2);