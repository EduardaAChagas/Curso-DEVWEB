const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 4998.90
prod1['Desconto'] = 0.40

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 79.90,
    tecido: {
        tipo: 'polo',
        valor: 0.20
    }

}
console.log(prod2)

console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)
