// Meu Jeito

function tocarSom(seletorAudio){

    const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio') elemento.play();
    else alert("Elemento não encontrado!");

}

const listaDeTeclas = document.querySelectorAll('.tecla')

listaDeTeclas.forEach(element => {
    element.onclick = function(){
        classeDoBotao = element.classList[1];
        tocarSom(`#som_${classeDoBotao}`);
    }
    element.onkeydown =  function (evento){
        if(evento.code === "Enter" || evento.code === "Space")
            element.classList.add('ativa');
    }
    element.onkeyup = function(evento){
        if(evento.code === "Enter" || evento.code === "Space")
            element.classList.remove('ativa')
    }
});