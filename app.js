document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const botoes = document.querySelectorAll('.btn');
    
    let entradaAtual = '0';
    let entradaAnterior = '';
    let operacao = null;

    let titulo = document.querySelector('.texto');
    titulo.innerHTML = 'CALCULADORA';

    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            const valor = botao.textContent;

            if (botao.classList.contains('numero')) {
                manipularNumero(valor);
            } else if (botao.classList.contains('operacao')) {
                manipularOperacao(valor);
            } else if (botao.classList.contains('igual')) {
                calcularIgual();
            } else if (botao.classList.contains('limpar')) {
                limpar();
            } else if (botao.classList.contains('ponto')) {
                adicionarDecimal();
            }

            atualizarDisplay();
        });
    });

    function manipularNumero(valor) {
        if (entradaAtual === '0') {
            entradaAtual = valor;
        } else {
            entradaAtual += valor;
        }
    }

    function manipularOperacao(op) {
        if (entradaAtual === '') return;

        if (entradaAnterior !== '') {
            calcular();
        }

        operacao = op;
        entradaAnterior = entradaAtual;
        entradaAtual = '';
    }

    function calcularIgual() {
        if (operacao === null || entradaAtual === '') return;

        calcular();
        operacao = null;
        entradaAnterior = '';
    }

    function calcular() {
        let resultado;
        const anterior = parseFloat(entradaAnterior);
        const atual = parseFloat(entradaAtual);

        switch (operacao) {
            case '+':
                resultado = anterior + atual;
                break;
            case '-':
                resultado = anterior - atual;
                break;
            case '*':
                resultado = anterior * atual;
                break;
            case '/':
                resultado = anterior / atual;
                break;
            default:
                return;
        }

        entradaAtual = resultado.toString();
    }

    function limpar() {
        entradaAtual = '0';
        entradaAnterior = '';
        operacao = null;
    }

    function adicionarDecimal() {
        if (!entradaAtual.includes('.')) {
            entradaAtual += '.';
        }
    }

    function atualizarDisplay() {
        display.textContent = entradaAtual;
    }

    limpar();
});
