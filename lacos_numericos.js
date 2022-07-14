// LAÇOS NUMÉRICOS: FOR

// O problema: Quero que você pegue 3 notas de um aluno e calcule a média. 1º Modo de Resolver:
/*
const input = require('readline-sync');
const nota1 = Number(input.question('Informe a nota 1: '));
const nota2 = Number(input.question('Informe a nota 2: '));
const nota3 = Number(input.question('Informe a nota 3: '));
let media = (nota1 + nota2 + nota3) / 3;
console.log('Sua média é', media);
*/

// O problema: Quero que você pegue 3 notas de um aluno e calcule a média. 2º Modo de Resolver:
const input = require('readline-sync');
console.clear()
let nota;
let soma = 0;
for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Informe a nota ${i} do aluno: `));
    soma = soma + nota;
}
console.log(`A média do aluno é ${soma / 3}.`)
// Acumuladores:
/*
let acumulador = 0;
acumulador = acumulador + 10        // 1º Forma de usar o acumulador
acumulador += 10                    // 2º Forma de usar o acumulador
acumulador++                        // 3º Forma de usar o acumulador (Soma + 1)
*/

// Estrutura "for"
/*
for (let i = 1; i < 11; i = i + 1) {
    console.log('Repetição', i)
}
*/

