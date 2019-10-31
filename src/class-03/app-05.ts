// IMTERFACES en TYpescript

interface ICurso{
        name:string;
        id?:number;

}
let cursoTypeScript: ICurso = {
    name: 'Typescript',
    id: 1
}
cursoTypeScript = {
    name: 'Javascript',
    id: 2
};

let curso2: ICurso;
curso2 = {
    name:' Angular',

}
curso2 = {
    name: 'TypeScript',
    id:100
}
console.log('CursoTypeScript', cursoTypeScript);

//EXTENDIENDO INTERFACES | HERENCIA DE INTERFACES
interface CursoEdteam extends ICurso{
    costo:number;

}

const firstCurso: CursoEdteam ={
        name:' TypeScript since 0',
        id: 200,
        costo:200
}

console.log('firstCurso', firstCurso);