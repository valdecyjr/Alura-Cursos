const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

async function buscarLivro(){

    const res = await fetch(endpointDaAPI);
    const resConvertida = await res.json();
    return resConvertida
}

export const conectaAPI = {
    buscarLivro
}