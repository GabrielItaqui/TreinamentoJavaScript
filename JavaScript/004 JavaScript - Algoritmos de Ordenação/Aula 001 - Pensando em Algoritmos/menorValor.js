//Objetivo = Organizar a lista de valores dos livros dentro do array precosLivros.

const livros = require('./listaLivros');
//Esse comando traz para esse arquivo todos os arquivos que foram marcados para ser exportados do arquivo citado.

function menorValor(listaProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < listaProdutos.length; atual++) {
        if (listaProdutos[atual].preco < listaProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

console.log(`O livro mais barato está na posição ${(menorValor(livros, 2))} do array`)


module.exports = menorValor;

//Essa função irá identificar qual o preoduto de menor valor.