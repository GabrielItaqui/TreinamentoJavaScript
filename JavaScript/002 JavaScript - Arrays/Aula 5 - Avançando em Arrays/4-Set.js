/*Esse Set é uma classe do JavaScript, usaremos uma classe porque ela já vem com algumas lógicas internas.

O Set bem parecido com as listas que trabalhamos até agora, mas tem algumas regras a mais. Uma delas é que os elementos de um Set não podem se repetir. O que é ótimo para nos ajudar nesse desafio.
*/

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set(nomes);

const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);