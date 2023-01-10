function soma(x, y) {
    return x + y;
}

console.log(soma(4, 4))
console.log(soma(20,40))
console.log(soma(500,-1500))

//ordem de parametros

function nomeIdade(nome, idade){
    console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)
}

nomeIdade("Gabriel", 37)

//multiplica

function multiplica (x, y) {
    return x * y;
}

console.log(multiplica(soma(2,3), 5));