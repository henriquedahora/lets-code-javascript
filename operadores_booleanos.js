// OPERADORES BOOLEANOS:

// Igualdade:           == (ou ===)
// Desigualdade:        != (ou !==)
// Maior que:           >
// Maior ou Igual:      >=
// Menor que:           <
// Menor ou Igual:      <=

const numero = 10;
console.log(numero == 10);          // Igualdade
console.log(numero != 10);          // Desigualdade
console.log(numero > 10);           // Maior que
console.log(numero >= 10);          // Maior ou Igual
console.log(numero < 10);           // Menor que
console.log(numero <= 10);          // Menor ou Igual 

console.log(numero == '10')         // Verifica se apenas o CONTEÚDO é igual.
console.log(numero === '10')        // Verifica se a VARIÁVEL e o CONTEÚDO são iguais.

console.log(numero != 10);          // Verifica se apenas o CONTEÚDO é igual (Conteúdo 10).
console.log(numero !== 10);         // Verifica se a VARIÁVEL e o CONTEÚDO são iguais (Tipo Number e 10).
console.log(numero !== '10');       // Verifica se a VARIÁVEL e o CONTEÚDO são iguais (Tipo Number e 10, Tipo String e 10).

// CONJUÇÕES LÓGICAS:

// AND => &&

// OR => ||