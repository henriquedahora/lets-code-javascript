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
// Se tiver maior ou igual a 18 anos e tiver CNH, então pode dirigir:
let idade = 26;
let tenhoCNH = true;
const possoDirigir = idade >= 18 && tenhoCNH === true;
console.log('Posso dirigir?', possoDirigir)

// OR => ||
// Se tiver menos de 18 anos ou mais de 70 anos, não precisa votar:
let suaIdade = 20;
const votoFacultativo = suaIdade < 18 || suaIdade >= 70;
console.log('Meu voto é facultativo?:', votoFacultativo);

console.clear()                     // Clear o Console até aqui!!!

// NOT => !
// Usado para inverter
const estouGostandoDoCurso = false;
console.log(estouGostandoDoCurso)       // Apresenta o valor real da variável, neste caso False.
console.log(!estouGostandoDoCurso)      // Apresenta o valor invertido da variável, neste caso True.