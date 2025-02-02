const totalEstudantes = parseInt(prompt("Digite o número total de estudantes na turma:"));

let somaNotas = 0;
let maiorNota = 0;  
let menorNota = 100; 

for (let i = 1; i <= totalEstudantes; i++) {
    let nota = parseFloat(prompt(`Digite a nota do aluno ${i}:`));

    somaNotas += nota;

    if (nota > maiorNota) {
        maiorNota = nota;
    }
    if (nota < menorNota) {
        menorNota = nota;
    }
}

const media = somaNotas / totalEstudantes;

alert(`Média da turma: ${media.toFixed(2)}\nMaior nota: ${maiorNota}\nMenor nota: ${menorNota}`);
