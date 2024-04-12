import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controllerr = new NegociacaoController
const form =document.querySelector('.form');
form.addEventListener('submit',event =>{
    event.preventDefault();
    controllerr.adiciona();
})