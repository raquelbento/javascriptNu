// O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

var custoFabrica = 40000;
var porcDist;
var porcImp;
var custoFinal;

porcDist = custoFabrica * 28/100;
porcImp = custoFabrica * 45/100;
custoFinal = custoFabrica + porcDist + porcImp;
console.log ("O custo final ao consumidor é:" + custoFinal)
