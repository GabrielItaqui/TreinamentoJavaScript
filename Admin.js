import User from "./classes.js"

            //se estende a partir de:
class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        //função superclasse (está acima na cadeia, sub classes estariam abaixo)
        super(nome, email, nascimento, role, ativo)
    }
    //Dentro de classes não é necessário usar a terminologia function
    criarCurso (nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}

const novoAdmin = new Admin ('Rodrigo', 'r@r.com', '2021-01-01');

console.log(novoAdmin.criarCurso("JS", "20"))