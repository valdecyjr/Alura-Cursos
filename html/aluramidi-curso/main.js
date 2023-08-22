// Meu Jeito

function tocarSom(instrumento){

    document.querySelector(`#som_${instrumento}`).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla')

listaDeTeclas.forEach(element => {
    element.onclick = function(){
        classeDoBotao = element.classList[1];
        tocarSom(classeDoBotao);
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