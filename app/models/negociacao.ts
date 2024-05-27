export class Negociacao{

    constructor(
      private _data: Date,
      private _valor: number,
      private _quantidade: number){
 
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