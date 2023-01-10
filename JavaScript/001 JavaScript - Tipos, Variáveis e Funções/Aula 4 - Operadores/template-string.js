//Se trata do uso de uma string dentro de outra string utilizando as crases para abrir e fechar o texto e o comando ${xxxx} para designar a variável a ser utilizada.

const nome = "Gabriel ";
const idade = 2023 - 1985;
const cidadeNasc = "Porto Alegre";

// const apresenta = "Meu nome é " + nome + ", tenho " + idade + " anos, e nasci em " + cidadeNasc;

const apresenta = `Meu nome é ${nome}, tenho ${idade} anos e nasci em ${cidadeNasc}`

console.log(apresenta)