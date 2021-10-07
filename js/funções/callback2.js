const notas = [7.6, 2.5, 8.9, 9.2, 4.6, 8.2, 7.0, 10.0]

//sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback
const notasBaixas2 = notas.filter( function (nota)  {
    return nota < 7
} )

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)