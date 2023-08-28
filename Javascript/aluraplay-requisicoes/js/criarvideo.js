import { conectaAPI } from "./conectaAPi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento){
    evento.preventDefault();

    console.log("funcionou 1");

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try{
        await conectaAPI.criarVideos(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html"
    } catch(e){
        alert(e)
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento))

// formulario.addEventListener("submit", evento => criarVideo(evento));

