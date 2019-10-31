//Type Primitives or basics
// boolean

let isConnected = true;
let isInscrito:boolean;
isInscrito = false;
//isInscrito = 2; // Is not valid
function hasDiscount(curso:string){
    if(curso === 'typescript')
        return true;
    return false
}

console.log(`hasDiscount('angular)`, hasDiscount('angular'));

// number
let students = 100;

let cantStudents: number;
cantStudents = 120;

function getCantStudents(curso: string): number{
    if(curso === 'typescript')
        return 100;
     
    return 0;
}

let inscritosCursoTypescript: number = 100;

//Type: number, hexadecimales
let decimal: number = 10;
let hexadecimal: number = 0xf00d;
console.log('hexadecimal', hexadecimal);
console.log('decimal', decimal);

// type: Number, binario

let binario: number = 0b1010;
console.log('binario', binario);

// type Number, octal
let octal:number = 0o755;
console.log('octal', octal);

//String 
let name = 'Luis';
let lastname:string = 'Aviales';
let nameComplet = name + ' '+ lastname;
console.log('surname', nameComplet);

//String + es6 template literals

let nameComplet2 = `${name} ${lastname}`;
console.log('namecomplet2', nameComplet2);
let arrayCourses = ['typescript', 'Angular'];
let message = `
    my name is ${nameComplet} and i have ${arrayCourses.length} courses.
    thanks for assist!
`;
let messages = '\n my name is '+ nameComplet + 'and have'+ arrayCourses.length+ 'Courses.';
console.log('menssage', messages);

//Tipos speciales in Typescript
// type: Any
let unknown; // would be as a var desconocido;
unknown = 'hellow';
unknown = 2;
let unknown2: any = 2;

//type: Void
let vacio:void ;
function showContent(curso:string): void{
    const message = curso? `welcome to course ${curso}`: 'Subscribe at course';
    console.log('message', message);
}

showContent('typescript');

//Type: Never
let never: never;
function returnError(error:string): never{
    throw new Error('Error typescript.'+ error);
    //Never return a value!
}
//returnError('Values inesperado');
function cicleInfinit():never{
    while(true){

    }
}
//type: Null y undefined
let variableUndefined: undefined = undefined;
let variableNull:null = null;

function retornNull(): null{
    return null;
}
function retornUndefined(): undefined{
    return undefined;
}

let variablesinValor:undefined = undefined;
console.log('variable', variablesinValor);

//Functiones in typescript
function greets(name?: string): string{
    if(name)
    return 'hellow ' + name;

    return 'hellow!';
}
console.log(greets(nameComplet2));
console.log(greets());
//Arrays typescript
let cursos: string[];
cursos = ['TypeScript', 'Angular'];

//Arrays with generics

let names:Array<String>;
names = ['Luis Aviles', 'Alvaro Felipe'];

let array: any[] = [2, 'cadena', true]; // pero any debe usarse no tan frecuentemente solo cuando no tengas control

//Tuplas
let infoCursos:[string, number] = ['typescript', 100];
//infoCursos =[200, 'Angular'] // tuplas has an order
infoCursos = ['angular', 200];

let curso: [string, number, string] = ['typescript', 150, '08/2019'];
console.log('curso', curso);
let newInscritos = 10;
console.log('fecha de incio', curso[2]);
console.log('Total inscirtos', curso[1]+ newInscritos);//((curso[2].))

let tuplaTest:[string, string]=['a', 'b'];
let tuplaTemp: [String, string] = ['c', 'd'];
tuplaTemp = tuplaTest;

console.log('tumplaTemp',tuplaTemp);