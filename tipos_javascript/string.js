const palavra = "Mod3rno";

console.log(palavra.charAt(5)); //Mostra a 5ª letra da string.
console.log(palavra.charAt(7)); //JS não mostra um erro, quando a letra não está na string.
console.log(palavra.charCodeAt(3)); //Mostra a posição do número 3 na tabela unicode.
console.log(palavra.indexOf("n")); //Verifica se existe a letra dentro da string e mostra sua posição.
console.log(palavra.substring(4)); //Mostra o restante da string, apartir da posição selecionada.
console.log(palavra.substring(0, 5)); //Começa a mostrar a partir do 0 e exclui a ultima posição.

//FORMAS DE CONCATENAR STRING
console.log("1 - Curso de JavaScript ".concat(palavra));
console.log("2 - Curso de JavaScript " + palavra);

console.log(palavra.replace(3, "e")); //Troca a letra por outra.
console.log("JS, Node, Vue".split(",")); //Separa a string em um array.