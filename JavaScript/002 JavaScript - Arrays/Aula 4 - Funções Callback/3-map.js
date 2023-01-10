const notas = [10, 9.5, 8, 7, 6 ]

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
})

console.log(notasAtualizadas)


//Map também recebe uma função callback, como a forEach

/*foi utilizado um operador ternário na formula acima
Revendo: 
        Primeiro Parametro: a condição
        Segundo Parametro: If true
        Terceiro Parametro: If false
*/