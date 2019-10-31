//Enumerados en typescript

//type Curso: string | number;
enum Curso{
       Javascript,
       Typescript,
       Angular 

}

let curso : Curso = Curso.Typescript;
console.log('curso',curso);
console.log('curso',Curso[curso]);

//Another Example
enum Day{
    sunday,
     monday,
     tusday,
     wneds,
     thur,
     fri
}
console.log('friday' Day.fri);
enum FinSemana{
    Sabado = 5,
    Dmongo
}
console.log('Sabado', FinSemana.Sabado);
console.log('Sabado', FinSemana.Dmongo);
//Control sobre los valores enumerados // tambien podemos comparar con stados

enum Mes{
    enero = 'Ene',
    febrero = 'Feb',
    marzo = "marz",
    April ="Abr"
}
console.log('Marzo', Mes.marzo);