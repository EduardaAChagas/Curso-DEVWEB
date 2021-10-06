console.log("Sentença de Código")

const prova1 = 9.871
const prova2 = 6.871

const peso1 = 1
const peso2 = 2

const media = prova1 * peso1 + prova2 * peso2
const mediaTotal = media/(peso1+peso2)

const mediaReduzida = mediaTotal.toFixed(2)
console.log(mediaTotal)
console.log(mediaTotal.toFixed(2)) 
console.log(mediaTotal.toString(2)) //em binario

const raio = 5.6
const area = Math.PI * Math.pow(raio,2)

console.log(area)

const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3)) //retorna o codigo associado da tabela ascii
console.log(escola.indexOf('3'))
console.log(escola.substring(1))
console.log(escola.substring(0,3))
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(/\d/, 'e')) //substitui o numero pela letra e
console.log(escola.replace(/\w/, 'e')) //substitui o primeiro caractere pela letra e
console.log(escola.replace(/\w/g, 'e')) //substitui tudo pela letra e
console.log(escola.replace(/\d/g, 'e')) //substitui todos os numeros pela letra e

console.log('Ana,Maria,Pedro'.split(','))
