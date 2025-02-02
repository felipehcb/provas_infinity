const nome = prompt("Digite seu nome:");
const alturaCm = parseFloat(prompt("Digite sua altura em centímetros:"));
const peso = parseFloat(prompt("Digite seu peso em kg:"));

const alturaM = alturaCm / 100;

const imc = peso / (alturaM * alturaM);

let classificacao;
if (imc < 16) {
    classificacao = "Baixo peso muito grave";
} else if (imc < 17) {
    classificacao = "Baixo peso grave";
} else if (imc < 18.5) {
    classificacao = "Baixo peso";
} else if (imc < 25) {
    classificacao = "Peso normal";
} else if (imc < 30) {
    classificacao = "Sobrepeso";
} else if (imc < 35) {
    classificacao = "Obesidade grau I";
} else if (imc < 40) {
    classificacao = "Obesidade grau II";
} else {
    classificacao = "Obesidade grau III";
}

alert(`Nome: ${nome}\nIMC: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
