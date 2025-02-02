function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    
    const imc = peso / (altura * altura);
    document.getElementById("resultado").innerText = `Seu IMC é: ${imc.toFixed(2)}`;
}