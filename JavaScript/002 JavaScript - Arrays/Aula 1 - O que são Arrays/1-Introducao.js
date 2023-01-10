//Arrays = Lista 

// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5

// Tudo isso acima pode ser substituida por uma array (lista) da maneira que veremos abaixo 

const notas = [10, 6.5, 8, 7.5]  //<- Elementos / Itens / Valores
               //0   1   2   3    <- Indices

//indice/posição = localização da variável dentro do array, começando pelo zero sempre.

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length //também pode ser usado o notas.lenght

console.log(media)

console.log(notas)