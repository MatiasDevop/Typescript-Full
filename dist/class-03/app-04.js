"use strict";
//Enumerados en typescript
//type Curso: string | number;
var Curso;
(function (Curso) {
    Curso[Curso["Javascript"] = 0] = "Javascript";
    Curso[Curso["Typescript"] = 1] = "Typescript";
    Curso[Curso["Angular"] = 2] = "Angular";
})(Curso || (Curso = {}));
var curso = Curso.Typescript;
console.log('curso', curso);
console.log('curso', Curso[curso]);
//Another Example
var Day;
(function (Day) {
    Day[Day["sunday"] = 0] = "sunday";
    Day[Day["monday"] = 1] = "monday";
    Day[Day["tusday"] = 2] = "tusday";
    Day[Day["wneds"] = 3] = "wneds";
    Day[Day["thur"] = 4] = "thur";
    Day[Day["fri"] = 5] = "fri";
})(Day || (Day = {}));
console.log('friday', Day.fri);
var FinSemana;
(function (FinSemana) {
    FinSemana[FinSemana["Sabado"] = 5] = "Sabado";
    FinSemana[FinSemana["Dmongo"] = 6] = "Dmongo";
})(FinSemana || (FinSemana = {}));
console.log('Sabado', FinSemana.Sabado);
console.log('Sabado', FinSemana.Dmongo);
//Control sobre los valores enumerados // tambien podemos comparar con stados
var Mes;
(function (Mes) {
    Mes["enero"] = "Ene";
    Mes["febrero"] = "Feb";
    Mes["marzo"] = "marz";
    Mes["April"] = "Abr";
})(Mes || (Mes = {}));
console.log('Marzo', Mes.marzo);
