import { Negociacao, Negociacao, Negociacao } from "./models/negociacao"; 

const Negociacao = new Negociacao(new Date(),10,100);
console.log(Negociacao);
Negociacao.quantidade = 1000;
console.log(Negociacao.volume);