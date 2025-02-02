function converter() {
    let metros = parseFloat(document.getElementById("metros").value);
    let unidade = document.getElementById("unidade").value;
    let resultado = 0;
    let texto = "";

    if (isNaN(metros) || metros < 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor válido.";
        return;
    }

    switch (unidade) {
        case "jarda":
            resultado = metros * 1.094;
            texto = `${metros} metros = ${resultado.toFixed(3)} jardas`;
            break;
        case "pe":
            resultado = metros * 3.281;
            texto = `${metros} metros = ${resultado.toFixed(3)} pés`;
            break;
        case "polegada":
            resultado = metros * 39.37;
            texto = `${metros} metros = ${resultado.toFixed(3)} polegadas`;
            break;
        case "milha":
            resultado = metros * 0.000621;
            texto = `${metros} metros = ${resultado.toFixed(6)} milhas`;
            break;
        default:
            texto = "Unidade inválida.";
    }
    document.getElementById("resultado").innerText = texto;
}