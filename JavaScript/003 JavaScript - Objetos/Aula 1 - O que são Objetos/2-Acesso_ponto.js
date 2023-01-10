const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "11222333452",
    email: "andre@dominio.com",
  };

  console.log(`Cliente: ${cliente.nome} `)
  console.log(`CPF: ${cliente.cpf.substring(0,3)}.xxx.xxx-${cliente.cpf.substring(9,11)}`)