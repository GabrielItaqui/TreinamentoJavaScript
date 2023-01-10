const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155554444", "1144445555"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.")
        } else {
            this.saldo -= valor;
            console.log(`Compra efetuada com sucesso, seu novo saldo é ${cliente.saldo}`)
        }
    }
};

cliente.efetuaPagamento(210);
cliente.efetuaPagamento(50);

console.log(cliente)