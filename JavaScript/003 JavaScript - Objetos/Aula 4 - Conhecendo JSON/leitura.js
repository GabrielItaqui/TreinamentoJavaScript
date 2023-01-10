const dados = require("./cliente.json");

// console.log(dados);

const clienteEmString = JSON.stringify(dados);

// console.log(clienteEmString)

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);

//.stringify = transforma objeto em string
//.parse = transforma string em objeto