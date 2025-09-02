const produtoRepository = require('./repository/repository.js');

function main(){
    let produto = {
        nome: "Feijão", categoria: "Alimentos", preco: 4.5
    };
    produtoRepository.insert(produto);
    let produto2 = {
        nome: "Arroz", categoria: "Alimentos", preco: 6.0
    };
    produtoRepository.insert(produto2);
    produtoRepository.list();
}

main();
