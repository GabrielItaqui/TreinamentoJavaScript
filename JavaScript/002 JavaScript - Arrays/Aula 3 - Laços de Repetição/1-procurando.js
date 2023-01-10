const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const alunosMedias = [alunos, medias];

function exibeNomeENota (aluno) {
    if (alunosMedias[0].includes(aluno)) {    
        // const alunos = alunosMedias[0];
        // const medias = alunosMedias[1];
        //também pode ser feito como abaixo.
        const [alunos, medias] = alunosMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} está cadastrado(a) e tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!")
    }
}

exibeNomeENota("Juliana")