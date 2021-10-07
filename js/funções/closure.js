//closure

const x = 'Golbal'

function fora() {
    const x = 'Ç=local'
    function dentro() {
        return x
    }
}

const minhaFuncao = fora()
console.log(minhaFuncao())

