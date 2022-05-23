const user = {
    nome: "Gabriel",
    email: "g@g.com",
    nascimento: "30/12/1985",
    role: "admin",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

user.exibirInfos();

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso () {
        console.log('Curso criado!')
    }
}
                     //receber //ceder
Object.setPrototypeOf(admin, user)
/*esse método serve para fazer com que um objeto herde propriedades de outro, como nesse caso foi feito para herdar o exibirInfos do objeto user para o objeto admin*/

admin.criarCurso(); //curso criado!
admin.exibirInfos(); //Mariana m@m.com

/*const exibir = user.exibirInfos
exibir();
 Essa linha não funcionará se o console.log do objetos usar this.nome ou this.email, pois a função perde o contexto, sendo necessário trocar para user.nome ou user.email, garantindo assim o contexto. */