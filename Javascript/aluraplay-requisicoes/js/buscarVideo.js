import { conectaAPI } from "./conectaAPi.js";
import construirCard from "./mostrarVideo.js";

async function buscarVideo(evento){
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscarVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]")
    
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach( element => lista.appendChild(
        construirCard(
            element.titulo, element.descricao, element.url , element.imagem
        )));

    if (buscarVideo.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe titulo com esse termo</h2>`
    }
}


const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));