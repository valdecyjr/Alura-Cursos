import aplicarDesconto from "./aplicarDescontos.js";
import {conectaAPI} from "./conectarAPI.js";

const listaDeLivros = await conectaAPI.buscarLivro()
const divLivros = document.getElementById("livros");

exibirOsLivrosNaTela(listaDeLivros)

export function exibirOsLivrosNaTela(listaDeLivros){
    listaDeLivros.forEach(livro => {
        const divCriarLivro = document.createElement('div')
        //livro.preco = aplicarDesconto(livro.preco, 0.2)
        divCriarLivro.innerHTML = ` 
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo"> ${livro.titulo} </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${livro.categoria}</span>
            </div>
        </div>
      `
      if (livro.quantidade == 0){
        var tagImg = divCriarLivro.querySelector(".livro__imagens")
        tagImg.classList.add("indisponivel");
        
      }
    
      divLivros.appendChild(divCriarLivro)
    });
}

export function exibirValorTotalDisponivel(valor){
  var totalLivros = document.getElementById("valor_total_livros_disponiveis")

  console.log(totalLivros)
  totalLivros.innerHTML = `
  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
  </div>`
}