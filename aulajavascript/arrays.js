var valores = [8,1,7,2,9];

console.log(valores[3]);

for (var pos = 0 ; pos < valores.length; pos++){
    console.log("Posição: " + pos + " Valor: " + valores[pos]);
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BMW", "Yamaha", "Honda");

// calcular a média de todos os numeros de um array

var soma = 0;
for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];
}

var media = soma/valores.length;

console.log(media);


var arr1 = [1,2,3,4,5,6];

console.log(arr1.join(' '));

var retirado = arr1.shift();

console.log(retirado);

console.log(arr1);

console.log("Posição do número 3: " + arr1.indexOf(3));

arr1.push(7);

console.log(arr1);

arr1.pop();

console.log(arr1);

var arr2 = [1,2,3,4,5,6,7];
arr2.splice(1,1);
console.log(arr2);

var nomes = ["Maria","Joao","Lucas","Pedro"];
var novos = nomes.splice(1,1, "Luiz");
console.log(nomes);

var pais = ["Brasil", "Argentina", "Colombia"];
pais.unshift("Uruguai");
console.log(pais);

var nomes = ["Guilherme", "Manuel", "Samuel", "Davi", "Joao"];
nomes.unshift("Monica");
console.log(nomes);

var nomes = ["Guilherme", "Manuel", "Samuel", "Davi", "Joao"];
var novos = nomes.splice(4,1)
console.log(novos);

var nomes = ["Guilherme", "Manuel", "Samuel", "Davi", "Joao"];
var novos = nomes.splice(1,1, "Emanuel");
console.log(nomes); 


var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
var gerente = ["Davi", "Manuela"];

var pessoas1 = pessoa.slice(1,3);
console.log(pessoa);
console.log(pessoas1);

var empresa = pessoa.concat(gerente);
console.log(empresa);

var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var trimestre1 = meses.slice(0,4);
var trimestre2 = meses.slice(4,8);
var trimestre3 = meses.slice(8,);
console.log(trimestre1);
console.log(trimestre2);
console.log(trimestre3);









