const obj = [{
  "nome":"Olva",
  "email":"olippini0@deviantart.com",
  "telefone":[
    "4733865848",
    "47933865848"
  ],
  "endereco":{
    "logradouro":"Rua Transport",
    "numero":"05",
    "cep":"46140",
    "apartamento":true,
    "complemento":"ap 102"
  }
}]

// console.log(typeof obj);

const jsonData = JSON.stringify(obj);

// console.log(jsonData)
// console.log(typeof jsonData)

const objData = JSON.parse(jsonData);

// console.log(objData)
// console.log(typeof objData)

objData.map((pessoa) => {
  console.log(pessoa.nome)
});
