export class Negociacao{
     #data;
     #valor;
     #quantidade;

    constructor(data,valor,quantidadae){
        this.#data = data;
        this.#valor = valor;
        this.#quantidade = quantidadae;
    }

    get(data) {
       return this.#data
    }

    get(valor) {
      return  this.#valor
    }

    get(quantidadae) {
       return this.#quantidade * this.#valor;
    }


}