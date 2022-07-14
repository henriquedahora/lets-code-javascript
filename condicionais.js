// ESTRUTURAS CONDICIONAIS

console.clear()
const idade = 20;

if (idade >= 18) {
    console.log('Você é maior de idade!');
} else {
    console.log('Você é menor de idade!');
}


// Se media >= 7, Aprovado.
// Se media < 7 e media >= 5, Recuperação.
// Se media < 5,, Reprovado.

console.clear()
let media = 7;
if (media >= 7) {
    console.log('Aprovado!');
} else if (media < 7 && media >= 5) {
    console.log('Recuperação!')
} else {
    console.log('Reprovado!')
}
