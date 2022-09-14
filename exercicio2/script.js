// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// c) Uma função que receba um número e imprima se ele é par ou não

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.


// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function imprimirSoma(num1,num2){
    return num1+num2
}
console.log(imprimirSoma(22,23))

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function maiorOuIgual(num1,num2){
    let resultado
    if(num1 >= num2){
        resultado = false
    }
    return resultado
}
console.log(maiorOuIgual(30,23))

// c) Uma função que receba um número e imprima se ele é par ou não

const paridade = (num) => {
    let resultadoParidade
    if(num%2 === 0){
        resultadoParidade = true
    }else{
        resultadoParidade = false
    }
    return resultadoParidade
}

console.log(paridade(23))

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

function medirMensagem(string){
    return `Essa mensagem tem ${string.length} caracteres! ${string.toUpperCase()}` 

}
console.log(medirMensagem('ALO ALO REDE GLOBO!'))

