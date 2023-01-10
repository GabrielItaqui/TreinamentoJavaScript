const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "11222333452",
    email: "andre@dominio.com",
  };

  console.log(`Cliente: ${cliente["nome"]} `);
  console.log(`CPF: ${cliente["cpf"].substring(0,3)}.xxx.xxx-${cliente["cpf"].substring(9,11)}`);

  const chaves = ["nome", "idade", "cpf", "email", "altura"];

  chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
  })