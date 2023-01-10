const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const alunosMedias = [alunos, medias]

//console.log(alunosMedias)

console.log(`O aluno da posição 1 da lista de alunos é ${
    alunosMedias[0][1]
} e a sua média é ${
    alunosMedias[1][1]
}`);