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
});


/*

// Jeito Alura 
function tocarSom(butaoPressionado){
    document.querySelector('#som_'+classeTeclaApertada[1]).play();
}

contador = 0

const listaDeTeclas = document.querySelectorAll('.tecla');

while(contador < listaDeTeclas.length){

    const instrumento = listaDeTeclas[contador].classList[1];
    const idAudio = `#som_${instrumento}`
    listaDeTeclas[contador].onclick = function () {
        tocarSom('idAudio');
    }

    contador += 1 ;
}

*/