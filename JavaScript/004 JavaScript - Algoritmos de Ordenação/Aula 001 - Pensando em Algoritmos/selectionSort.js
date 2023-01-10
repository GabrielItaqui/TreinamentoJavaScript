const livros = require('./listaLivros');
const menorValor  = require('./menorValor');
//Esse comando traz para esse arquivo todos os arquivos que foram marcados para ser exportados do arquivo citado.

for ( let atual = 0; atual < livros.length; atual++) {

    let menor = menorValor(livros, atual);
        //Aqui será chamada a função do arquivo ./menorValor.js definindo a listaProdutos como o conteúdo de ./listaLivros.js e a posição inicial como o valor atual da variável 'atual' e seu valor será salvo como o indice na variável 'menor'.
    let livroAtual = livros[atual];
        //Aqui guardaremos a informação do item, não o seu indice. Usamos essa variável para poder trocar as informações de lugar. Esta variável será a responsável por guardar essas informações.
    let livroMenorPreco = livros[menor];
        //Aqui guardaremos a informação de qual livro está na posição 'menor' (obtida pela função menorValor na variável acima)
        
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
    /*Definimos aqui que o livro de menor valor agora trocará de lugar com o livro atual, assumindo o indice menor.
        Exemplo: 
        -> livros[atual] = livroMenorpreco;
        Livros[Atual] no indice 3 custa 35 reais e livroMenorPreco custa 20 reais.
        Essa variável fará com que o livroMenorPreo assuma o indice do livro[Atual].
        -> livros[menor] = livroAtual;
        Fará o oposto á posição acima, enviando o livro de maior valor na comparação para a segunda posição do array.
    */

}

console.log(livros)