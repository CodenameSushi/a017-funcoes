// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

function somar(num1,num2){
    return num1+num2
}

function subtrair(num1,num2){
    return num1-num2
}

function multiplicar(num1,num2){
    return num1*num2
}

function dividir(num1,num2){
    return num1/num2
}

let numUser = Number(prompt("Insira um numero!"))
let numUser2 = Number(prompt("Insira outro numero!"))

console.log(somar(numUser,numUser2))

console.log(subtrair(numUser,numUser2))

console.log(multiplicar(numUser,numUser2))

console.log(dividir(numUser,numUser2))