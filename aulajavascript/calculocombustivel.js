// Faça um algoritmo que efetue o cálculo da quantidade de litros de combustível gastos em uma viagem, sabendo-se que o carro faz 12km com um litro. Deverão ser fornecidos o tempo gasto na viagem e a velocidade média. Utilizar as seguintes fórmulas:
// distância = tempo*velocidade
// litros usados = distância/12
// O algoritmo deverá apresentar os valores da velocidade média, tempo gasto na viagem, distância percorrida e a quantidade de litros utilizados na viagem. 

var tempo = 3;
var velocidade = 80;
var distancia = tempo * velocidade;
var litros = distancia/12;

console.log("A velocidade média foi: " + velocidade + " km/h")
console.log("O tempo gasto na viagem foi: " + tempo + " horas")
console.log("A distância percorrida foi: " + distancia + " km")
console.log("O consumo de combústivel foi: " + litros + " litros")
 