const peso1 = 3.0;
const peso2 = Number("6.0"); //Conversão do Tipo.

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //Verifica com true ou false, se o número é um inteiro.
console.log(Number.isInteger(peso2));

const n1 = 7.8;
const n2 = 5.2;


const total = (n1 * peso1) + (n2 * peso2);
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //Reduz a quantidade de casas, após o ponto.
console.log(media.toString(2)); //Transforma para binário.
console.log(typeof media);  //Mostra o tipo.
console.log(typeof Number); //Number é uma função.