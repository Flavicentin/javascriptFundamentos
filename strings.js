const escola = "Cod3r";

console.log(escola.charAt(0));
console.log(escola.charAt(1));
console.log(escola.charAt(2));
console.log(escola.charAt(3));
console.log(escola.charAt(4));


console.log("-----------");

//converte para tabela de valores 
console.log(escola.charCodeAt(3));

//verifica se tem o valor "o" da palavra
console.log(escola.indexOf('o'));

//vai mostrar do valor que eu quero até pra frente
console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola).concat("!"));

//replace o proprio nome ja diz 
console.log(escola.replace(3, 'e'));


console.log('Ana,Maria,Pedro'.split(','));


