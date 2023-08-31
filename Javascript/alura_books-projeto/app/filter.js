import { conectaAPI } from "./conectarAPI.js";
import {exibirOsLivrosNaTela, exibirValorTotalDisponivel} from "./criarLivros.js";
import valorTotal from "./reduce.js";

const listaDeLivros = await conectaAPI.buscarLivro();
const divLivros = document.getElementById("livros");
const botoes = document.querySelectorAll(".btn")

botoes.forEach( botao => botao.addEventListener("click", () => {
    filterLivros(botao.value, listaDeLivros)
}) )


function filterLivros(tag,listaDeLivros){
    if( tag !== "disponíveis" && tag !== "ordenar")
    {
        console.log("entrou")
        divLivros.innerHTML = ""
        const livrosFiltrados = listaDeLivros.filter(livro => livro.categoria == tag)
        exibirOsLivrosNaTela(livrosFiltrados)
    }else if ( tag == "disponíveis"){
        divLivros.innerHTML = ""
        const livrosFiltrados = listaDeLivros.filter(livro => livro.quantidade > 0)
        exibirOsLivrosNaTela(livrosFiltrados)
        const valor = valorTotal(livrosFiltrados)
        exibirValorTotalDisponivel(valor)
    }else if ( tag == "ordenar"){
        divLivros.innerHTML = ""
        const livrosFiltrados = listaDeLivros.sort((a,b) => a.preco - b.preco)
        exibirOsLivrosNaTela(livrosFiltrados)
    }
}