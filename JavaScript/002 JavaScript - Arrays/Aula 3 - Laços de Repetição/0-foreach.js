let listaDePessoasAprovadas = [
    "ada.lovelace@example.com",
    "marie.curie@example.com",
    "margaret.hamilton@example.com",
    "allan.turing@example.com"
];

const enviarEmail =(email) => {
    console.log(`Email para ${email} enviado com sucesso!`);
}

listaDePessoasAprovadas.forEach((item, posicao) => {
    enviarEmail(item);
    console.log(`E-mail ${posicao + 1} de ${listaDePessoasAprovadas.length} enviado.`)
})