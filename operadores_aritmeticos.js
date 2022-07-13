// OPERADORES ARITMÉTICOS:

/*
Dicas para nomes de variáveis:
- Nunca começe o nome da variável com números;
- Sempre começe com letras;
- Sempre começo com letras minúsculas;
- Nuca use espaço;
- Use a boa prática do "camelCase" (ex. primeiroNumero)
*/

let primeiroNumero = 20;
let segundoNumero = 2;

// Adição:              +
// Subtração:           -
// Multiplicação:       *
// Divisão:             /
// Exponenciação:       **
// Resto da Divisão:    %

console.log('Adição =', primeiroNumero + segundoNumero);
console.log('Subtração =', primeiroNumero - segundoNumero);
console.log('Multiplicação =', primeiroNumero * segundoNumero);
console.log('Divisão =', primeiroNumero / segundoNumero);
console.log('Exponenciação =', primeiroNumero ** segundoNumero);
console.log('Resto da Divisão =', primeiroNumero % segundoNumero);

// PRECEDÊNCIA DE OPERADORES:

/*
1º Parênteses Internos;
2º Potência e Raiz;
3º Multiplicação e Divisão;
4º Adição e Subtração.
*/

console.log(3 + 7 * 3);         // Neste exemplo foi realizado a multiplicação e depois a soma.
console.log((3 + 7) * 3);       // Neste exemplo foi realizado a soma e depois a multiplicação, devido aos ().


// BIBLIOTECA MATH:
console.log('O numero de PI é', Math.PI)                    // Função que apresenta o valor de PI.
console.log('A Raiz Quadrada de 16 é', Math.sqrt(16))       // Função que calcula a Raiz Quadrada, neste caso do número 16.

