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

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log(`${chave}: ${cliente[chave]}`)
    }
}