var primeiroValor = parseInt(prompt("Digite o primeiro valor: "))
var segundoValor = parseInt(prompt("Digite o segundo valor: "))

var operacao = prompt ("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração")

if (operacao == 1) {
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado +"</h2>")
}
else if (operacao == 2){
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado +"</h2>")
}
else if ( operacao == 3) {
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado +"</h2>")
}
else if (operacao == 4){
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado +"</h2>")
} else  {
  document.write ("<h2>Opição inválida</h2>")
}


//escrevedo na tela - document.write()
//concatenação (juntar palavras com variaveis) - ("palavra" + variavel)
//== - comparação é diferente do = que usamos para fazer atribuiçaõ


//if = se Ex "e se..."
//else  = senão  Ex "senão..."
//else if = senão se 