async function buscarCep(cep){
    var mensagemErro = document.getElementById('erro_cep');
    mensagemErro.innerHTML = "";
    try{
        var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json`);
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro){
            throw Error ("Cep Invalido!")
        }
    } catch (erro) {
        mensagemErro.innerHTML = `<p>Cep invalido. Tente novamente!</p>`
        console.log(erro);
    }

    var cidade = document.getElementById('cidade');
    var estado = document.getElementById('estado');
    var logradouro = document.getElementById('endereco');
    
    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;

}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscarCep(cep.value));