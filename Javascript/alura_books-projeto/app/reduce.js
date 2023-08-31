export default function valorTotal(livros){
    return livros.reduce((acc,livros) => acc + livros.preco, 0)
}