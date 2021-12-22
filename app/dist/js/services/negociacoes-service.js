import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoesDoDia() {
        return fetch('http://localhost:8080/dados')
            .then(result => result.json())
            .then((dados) => dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)));
    }
}
//# sourceMappingURL=negociacoes-service.js.map