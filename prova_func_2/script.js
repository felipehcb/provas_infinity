const calcularGorjeta = (totalConta, qualidadeServico, callback) => {
    let porcentagemGorjeta;

    switch (qualidadeServico) {
        case 'bom':
            porcentagemGorjeta = 0.20; 
            break;
        case 'regular':
            porcentagemGorjeta = 0.10; 
            break;
        case 'ruim':
            porcentagemGorjeta = 0.05; 
            break;
        default:
            porcentagemGorjeta = 0; 
    }

    const valorGorjeta = totalConta * porcentagemGorjeta;

    callback(valorGorjeta);
};

const exibirResultado = (valorGorjeta) => {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Valor da gorjeta: R$ ${valorGorjeta.toFixed(2)}`;
};

document.getElementById('calcularGorjeta').addEventListener('click', () => {
    const totalConta = parseFloat(document.getElementById('totalConta').value);
    const qualidadeServico = document.getElementById('qualidadeServico').value;

    if (isNaN(totalConta) || totalConta <= 0) {
        alert('Por favor, insira um valor válido para a conta.');
        return;
    }

    calcularGorjeta(totalConta, qualidadeServico, exibirResultado);
});