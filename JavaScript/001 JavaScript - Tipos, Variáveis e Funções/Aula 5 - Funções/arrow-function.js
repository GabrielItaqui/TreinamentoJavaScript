// function apresentar (nome) {
//     return `Meu nome é ${nome}`
// }

// console.log(apresentar("Gabriel"))

//Arrow functions com 1 linha de instrução

const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;

//Arrow Functions com mais de 1 linha de instrução.

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}



