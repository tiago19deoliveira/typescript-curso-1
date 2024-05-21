export class Negociacao{
     private _data: Date;
     private _valor: number;
     private _quantidade:number ;

    constructor(data: Date,valor: number,quantidadae: number){
        this._data = data;
        this._valor = valor;
        this._quantidade = quantidadae;
    }

    get data(): Date {
       return this._data
    }

    get valor(): Number {
      return  this._valor
    }

    get quantidade(): Number{
       return this._quantidade * this._valor;
    }


}