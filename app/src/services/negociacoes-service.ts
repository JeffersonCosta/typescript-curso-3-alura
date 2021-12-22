import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(result => result.json())
            .then((dados: any[]) =>
                dados.map(dado =>
                    new Negociacao(new Date(), dado.vezes, dado.montante)
                )
            )
    }
}