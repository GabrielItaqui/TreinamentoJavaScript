const notas = [7, 7, 8, 9];

const novasNotas = [5, ...notas, 10];
                  //^ Esse é um operador do JavaScript que se chama spread operator, ou "operador de espalhamento". Ao utilizá-lo junto com uma lista, ele pega todo o conteúdo desse array e espalhar seus valores no local que estamos indicando. É como se copiássemos o conteúdo da lista, "7, 7, 8, 9", e colássemos no lugar do [...notas]. É isso que estamos dizendo para o JavaScript.
                  //O operador spread também nos dá a opção de adicionar elementos ao array, sendo ele identico ao .push. Como foi feito na const acima.

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);