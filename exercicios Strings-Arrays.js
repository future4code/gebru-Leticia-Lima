// EXERCICIO 1
let array
console.log('array.', array)

array = null
console.log('null. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('array. ', array.length)

let i = 0
console.log('let i. ', array[i])

array[i+1] = 19
console.log('array[i+1]. ', array)

const valor = array[i+6]
console.log('valor. ', valor)

// EXERCICIO 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("frase", "Subi num ônibus em Marrocos"), frase.length)

// EXERCICIO 3

const nome = prompt("Qual o seu nome")
const email = prompt("Qual seu email")

const fraseConcatenada = 'O nome de ' + nome + ' é ' + email
console.log(fraseContatenada)

const templateString = `O e-mail foi cadastrado com sucesso.Seja bem-vinda ${nome} é ${email}`
console.log(templateString)

// EXERCICIO 4

const minhasComidasPreferidas = ["macarronada", "miojo" , "pizza" , "hamburguer" , "sorvete"]
