const notas = [10, 6, 8, 5.5, 10]

//Para remover elementos de uma array, usando o comando .pop, caso não seja definida a posição entre parenteses, ele irá remover a ultima.
notas.pop()

console.log(notas)

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)