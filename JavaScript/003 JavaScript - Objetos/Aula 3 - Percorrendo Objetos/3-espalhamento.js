const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155554444", "1144445555"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para o número ${telefoneComercial}`);
    console.log(`Ligando para o número ${telefoneResidencial}`);
}

// ligaParaCliente(cliente.telefone[0], cliente.telefone[1])
// Também pode ser feito da seguinte maneira
ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda)