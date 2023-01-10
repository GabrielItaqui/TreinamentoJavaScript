//----------ETAPA 1

// const lukeLogin = () => {
//     let array = []
//     for( i = 0; i < 90000; i++){
//       array.push(i)
//     }
//     return "Luke logado com sucesso!"
//   }
  
//   const leiaLogin = () => {
//     let array = []
//     for( i = 0; i < 90000; i++){
//       array.push(i)
//     }
//     return "Leia logada com sucesso!"
//   }
  
//   console.log(lukeLogin())
//   console.log(leiaLogin())

//----------ETAPA 2

// const usuarioLogin = (pessoa) => {
//   let array = []
//   for ( i = 0; i < 9000; i++) {
//     array.push(i)
//   }
//   return `${pessoa} logou com sucesso no sistema!`
// }

// console.log(usuarioLogin("Luke"))

//----------ETAPA 3

const acesso = (nome) => {
  return `${nome} logou com sucesso no sistema!`
}

const usuarioLogin = (nome) => {
  let array = []
  for(i=0; i<9000; i++) {
    array.push(i)
  }
  return acesso(nome)
}

console.log(usuarioLogin("Luke"))