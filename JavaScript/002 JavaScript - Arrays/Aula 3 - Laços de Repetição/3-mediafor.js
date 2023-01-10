const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
    console.log(`Nota ${i+1} é ${notas[i]}`);
    console.log(`Somando as notas até agora temos ${somaDasNotas}`);   
}

const media = somaDasNotas / notas.length;
console.log(`Temos um total de ${notas.length} notas`)
console.log(`A média das notas é ${media}`)