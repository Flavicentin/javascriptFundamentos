const nome = 'Rebeca';
const concanetacao = 'Olá '+ nome +'!';
const templateString = `Olá ${nome}!`

console.log(concanetacao, templateString);

//expressões
console.log(`1 + 1 = ${1 + 1}`);


const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);