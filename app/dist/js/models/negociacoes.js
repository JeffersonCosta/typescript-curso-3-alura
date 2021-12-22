export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 4);
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    ehIgual(negociacoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}
//# sourceMappingURL=negociacoes.js.map