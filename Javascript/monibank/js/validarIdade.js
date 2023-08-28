export default function validarIdade(campo){
    const dataNascimento = new Date(campo.value);

    if (!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function validaIdade(data){
    const dataAtual = new Date();
    const dataMaiorDeIdade = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMaiorDeIdade;
}