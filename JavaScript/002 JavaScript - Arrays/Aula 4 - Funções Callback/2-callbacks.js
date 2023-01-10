const nomes = ["Evando", "Mari", "Camis"];

// nomes.forEach(function (nome) {
//     console.log(nome);
// })

// nomes.forEach((nome) => {
//     console.log(nome);
// });

function imprimeNome(nome) {
    console.log(nome);
};

nomes.forEach(imprimeNome);

/*Parêmetros do forEach

1 - Item atual do array que está sendo inteirado. 
2 - Index ou posição do item no array
3 - Todo o array
*/