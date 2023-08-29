function verficarChute(chute){
    const numero = +chute

    if ( chuteInvalido(numero)) elementoChute.innerHTML +=  '<div>valor inválido: o valor precisa ser um numero</div>';
    if (numeroMaiorOuMenor(numero)) elementoChute.innerHTML += `<div> valor inválido: o valor tem que estar entre ${menorValor} e ${maiorValor}</div>`;
    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2> Parabens, Você acertou! </h2>
            <h3> O numero secreto era ${numeroSecreto} </h3>

            <button id= "jogar-novamente" class = "btn-jogar">Jogar Novamente</button>
        `
    } else if (numero < numeroSecreto){
        elementoChute.innerHTML += `
            <div>O numero secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O numero secreto é maior <i class="fa-solid fa-down-long"></i></div>
        `
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e =>{
    if (e.target.id == "jogar-novamente") window.location.reload()
})