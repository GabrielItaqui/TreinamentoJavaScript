/*
As declarações de VAR tem escopo global ou de função, enquanto as declarações de LET e de CONST têm escopo de bloco.
Variáveis de VAR podem ser atualizadas e declaradas novamente dentro de seu escopo. As variáveis de LET podem ser atualizadas, mas nao pode ser declaradas novamente. As variáveis de CONST não podem ser atualizadas nem declaradas novamente.
Todas elas passam por HOISTING para o topo de seu escopo. Porém, enquanto variáveis com VAR são inicializadas como Undefined, as variáveis com LET e CONST não são inicializadas.
Enquanto VAR e LET podem ser declaradas sem ser inicializadas, CONST precisa da inicialização durante a declaração.
*/

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area;

// let forma = "retangulo"
// let altura = 5;
// let comprimento = 7;
// let area;

// if(forma == "retangulo") {
//     area = (altura * comprimento);
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area);

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if(forma === "quadrado") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) /2
}

console.log(area);