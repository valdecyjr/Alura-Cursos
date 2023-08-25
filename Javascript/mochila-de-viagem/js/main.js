const formItem = document.getElementById("novoItem");
const listaDeItens = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("item")) || []

itens.forEach((item)=>{
    criarElemento(item)
})



formItem.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = event.target.elements['nome']
    const quantidade = event.target.elements['quantidade']

    const existe = itens.find(element => element.nome === nome.value)

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe){
        itemAtual.id = existe.id
        
        atualizarElemento(itemAtual)

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual

    } else {

        itemAtual.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0
        criarElemento(itemAtual);

        itens.push(itemAtual)
    }
    

    

    localStorage.setItem("item", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
});

function criarElemento(item){

    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const quantidadeDoItem = document.createElement('strong')
    quantidadeDoItem.innerHTML = item.quantidade
    quantidadeDoItem.dataset.id = item.id

    novoItem.appendChild(quantidadeDoItem)
    novoItem.innerHTML += item.nome

    novoItem.appendChild(buttonDelete(item.id))

    listaDeItens.appendChild(novoItem)
}

function deletaElemento(tag, id){
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("item", JSON.stringify(itens))
}

function atualizarElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function buttonDelete(id) {
    const elementoButton = document.createElement("button")
    elementoButton.innerText = "X"

    elementoButton.addEventListener("click", function () {
        deletaElemento(this.parentNode, id)
    })

    return elementoButton
}