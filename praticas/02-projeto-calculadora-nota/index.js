// importando a lib prompt-sync
let prompt = require('prompt-sync')()

// usar a lib do prompt-sync
let nome = prompt("Qual é o seu nome?")

// usando o nome capturado pelo prompt
console.log("Olá " + nome)

// importar o modulo CalculadoraNota
let {calcularNotaA1, calcularNotaA2, calcularNotaFinal} = require('./CalculadoraNota')

// Perguntar pro usuários a nota de exercicios, trabalho e prova
let exerciciosA1 = parseFloat(prompt("Qual a nota de exercícios A1: "))
let trabalhoA1 =  parseFloat(prompt("Qual a nota do trabalho A1: "))
let provaA1 = parseFloat(prompt("Qual a nota da prova A1: "))
let notaA1 = calcularNotaA1(exerciciosA1, trabalhoA1, provaA1)

console.log("### Calculo da NOTA A1 ###")
console.log("Nota Exercicio A1: ", exerciciosA1)
console.log("Nota Trabalho A1: ", trabalhoA1)
console.log("Nota Prova A1: ", provaA1)
console.log("NOTA A1 CALCULADA: ", notaA1)



