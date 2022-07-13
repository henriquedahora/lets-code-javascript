// COERÇÃO (CONVERSÃO) DE TIPOS:

// - 1. Coerção Explícita (Manual):
console.clear()
const numero = 10;
console.log(numero, typeof numero);

const numeroEmFortatoString = String(numero);
console.log(numeroEmFortatoString, typeof numeroEmFortatoString);

console.log(Number('123'));                 // Converte de String para Number
console.log(parseFloat('123.123'));         // Converte de String para Number fracionado
console.log(parseInt('123.123'));           // Converte de String para Number Inteiro
console.log(Boolean(1));                    // Converte de Number para Boolean (1, 2, 3... = True)
console.log(Boolean(0));                    // Converte de Number para Boolean (0 = False)

// - 2. Coerção Implícita (Automática):

// Quando usado o sinal de + no JavaScript, ele converte para String e faz a concatenação:
console.clear()
console.log('10' + 1);                  // Concatenação de uma String (10) com um Number (1) = 101
console.log(10 + '1');                  // Concatenação de um Number (10) com uma String (1) = 101

// Quando usado o sinal de - no JavaScript, ele converte para Number e faz a Subtração:
// O mesmo ocorre para outras operações aritmeticas, menos com a Adição (+):
console.clear()
console.log('10' - 1);                  // Conversão de uma String para Number e realizado a Subtração
console.log(10 - '1');                  // Conversão de uma String para Number e realizado a Subtração

// Agora se a String não for um numero, o JavaScript retorna um erro NaN (Not a number):
console.clear();
console.log(10 - 'Casa')

// Outros exemplos:

// Exemplo 01:
// A variável n recebeu o valor de 11
console.clear();
let n = 1 + "1";
console.log(n);

// Exemplo 02:
// A variável n que tinha o valor 11 subtraiu 1
n = n - 1;
console.log(n)

// Exemplo 03:
console.log(2 + 3 + 4 + "5");
console.log("5" + 2 + 3 + 4);
console.log("10" - "4" - "3" - "2" + "5");
