// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function imprimirNome(seuNome){
// console.log(`Ola, ${seuNome}!`)
// }

// imprimirNome("Fernando")

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function imprimirTabuada(num){
//     num = 6
//     for(let i = 1; i <= 10; i++){
//         console.log(i*num)
//     }
    
// }
// imprimirTabuada()


// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const imprimirTabuada = (num) => {
    num = 6
    for(let i = 1; i <= 10; i++){
        console.log(i*num)
    }
}

imprimirTabuada()