const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let nota of notas) {
    somaDasNotas += nota;
}

console.log(somaDasNotas)

const media = somaDasNotas / notas.length;
console.log(`Temos um total de ${notas.length} notas.`)
console.log(`A média das notas é ${media}.`)

//Quando queremos percorrer um array, podemos usar o for of. Assim, o JavaScript já entende que temos que percorrer o array do início ao fim. A grande vantagem dessa estrutura é que podemos selecionar diretamente o valor de cada elemento da lista e, por exemplo, imprimi-lo com um console.log(), como fizemos.
