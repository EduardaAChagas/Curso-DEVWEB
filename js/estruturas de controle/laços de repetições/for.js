const notas = [4.5, 2.3, 10.0, 10.0]
for (let i = 0; i < notas.length; i++) {
    console.log(`nota ${i+1} = ${notas[i]}`)
}

for (let i in notas) {
    console.log(`i = ${i}`)
}

const pessoa = {
    nome: 'Eduarda',
    idade: 20,
    sobrenome: 'Chagas'
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}