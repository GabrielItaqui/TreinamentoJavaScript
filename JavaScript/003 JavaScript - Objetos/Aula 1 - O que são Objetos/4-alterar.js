const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
  };

  console.log(pessoa.nome)

  pessoa.telefone="1122223333"

  console.log(pessoa.telefone)

  pessoa.nome = "Luma Silva"

  console.log(pessoa)

  const novaPessoa = {
    nome: "Pedro",
  }

  pessoa = novaPessoa

  /*TypeError: Assignment to constant variable.

Em português, atribuição à variável constante. Logo, isso é o que não podemos fazer, mas se tivermos um objeto armazenado em uma variável constante, podemos manipulá-lo, porém, não podemos reatribuir algum valor naquela variável. */