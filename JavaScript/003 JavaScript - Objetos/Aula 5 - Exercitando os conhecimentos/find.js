// const pizzas = [
//     "muzzarela",
//     "calabresa",
//     "portuguesa",
//     "marquerita"
// ]

// const foundPizza = pizzas.find( p => p.startsWith( "m" ))

// console.log(foundPizza)
//Nesse caso ele vai encontrar a Muzzarela, pois o método find procura o objeto de cima a baixo e retorna o PRIMEIRO item encontrado.

const fruits = [
    {name: "Jaca", quantity: 2},
    {name: "Banana", quantity: 0},
    {name: "Cereja", quantity: 5}
]

const foundFruits = fruits.find( fruit => fruit.name === "Cereja" )

console.log( foundFruits )
