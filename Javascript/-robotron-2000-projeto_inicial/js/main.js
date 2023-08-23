const controles = document.querySelectorAll('[data-controle]');

const estatisticas = document.querySelectorAll('[data-estatistica]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controles.forEach((controle) => {
    controle.addEventListener("click", (evento) => {
    manipularDados(evento.target.dataset.controle, evento.target.parentNode);    
    autalizarestatistica(evento.target.dataset.peca);
    });
});

function manipularDados(operecao, controle){
    const peca = controle.querySelector("[data-contador]")

    if(operecao == '-') peca.value = parseInt(peca.value) - 1;
    if(operecao == '+') peca.value = parseInt(peca.value) + 1;
}

function autalizarestatistica(peca){
    estatisticas.forEach( (estatica)=>{
        estatica.textContent = parseInt(estatica.textContent) +  pecas[peca][estatica.dataset.estatistica]
    })
}
