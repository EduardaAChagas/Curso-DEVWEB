// Função em JS é First-Class Object (Citizens)
// Higher-order function

//criar de forma literal
function funcao() {}

//armazenar em uma variavel
const funcao2 = function () {}

//armazenar em um array
const array = [function (a, b) { return a + b }, funcao, funcao2]
console.log(array[0](2, 3))

//Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function() { return 'Olá'}
console.log(obj.falar())

//passar uma função como param
function run(fun) {
    fun()
}

run(function () { console.log( 'Executando' ) })

//Uma função pode retornar/conter uma outra função
function soma (a, b) {
    return function (c) {
        console.log( a + b + c) 
    }
}

soma(1, 2) (3)
const funcaoDentro = soma(1, 2)
funcaoDentro(3)