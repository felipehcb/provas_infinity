let saldo = 1000;

    function realizarOperacao() {
        const operacao = document.getElementById('operation').value;
        const valorInput = document.getElementById('amount').value;
        const valor = parseFloat(valorInput);
        const resultado = document.getElementById('result');

        if (operacao === 'consultar') {
            resultado.textContent = `Seu saldo atual é: R$ ${saldo.toFixed(2)}`;
            return;
        }

        if (isNaN(valor) || valor <= 0) {
            resultado.textContent = 'Por favor, insira um valor válido.';
            return;
        }

        if (operacao === 'sacar') {
            if (valor > saldo) {
                resultado.textContent = 'Saldo insuficiente para realizar o saque.';
            } else {
                saldo -= valor;
                resultado.textContent = `Saque de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${saldo.toFixed(2)}`;
            }
        } else if (operacao === 'depositar') {
            saldo += valor;
            resultado.textContent = `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${saldo.toFixed(2)}`;
        }
    }