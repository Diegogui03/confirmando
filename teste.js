document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    let primeiroOperando = '';
    let operacaoAtual = null;
    let resetarDisplay = false;

    function resetarCalculadora() {
        primeiroOperando = '';
        operacaoAtual = null;
        display.textContent = '0';
        resetarDisplay = false;
    }

    function lidarComCliqueNumero(numero) {
        if (operacaoAtual === null || resetarDisplay) {
            display.textContent = '';
            resetarDisplay = false;
        }
        display.textContent += numero;
    }

    function lidarComCliqueOperacao(operacao) {
        if (operacaoAtual !== null) {
            avaliarOperacao();
        }
        primeiroOperando = display.textContent;
        operacaoAtual = operacao;
        resetarDisplay = true;
    }

    function avaliarOperacao() {
        const segundoOperando = display.textContent;
        const num1 = parseFloat(primeiroOperando);
        const num2 = parseFloat(segundoOperando);
        let resultado;

        switch (operacaoAtual) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                resultado = num1 / num2;
                break;
        }

        display.textContent = resultado;
        operacaoAtual = null;
    }

    document.querySelectorAll('.numero').forEach(numero => {
        numero.addEventListener('click', () => lidarComCliqueNumero(numero.textContent));
    });

    document.querySelectorAll('.operacao').forEach(operacao => {
        operacao.addEventListener('click', () => lidarComCliqueOperacao(operacao.textContent));
    });

    document.querySelector('.igual').addEventListener('click', avaliarOperacao);
    document.querySelector('.limpar').addEventListener('click', resetarCalculadora);
});
