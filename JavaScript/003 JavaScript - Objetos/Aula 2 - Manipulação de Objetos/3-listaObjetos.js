const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155554444", "1144445555"],
};

cliente.enderecos = [{
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
});

const apenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(apenasApartamentos);