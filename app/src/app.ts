import { NegociacaoController } from './controllers/negociacao-controller.js';
import { Negociacao } from './models/negociacao.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}

const botaoImporta = document.querySelector('#botao-importa');

if (botaoImporta) {

    botaoImporta.addEventListener('click', function () {
        controller.importaDados();
    });
} else {

    throw Error('botão importa não foi encontrado.');
}