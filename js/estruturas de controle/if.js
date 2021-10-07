function soBoaNoticia(nota){
    if(nota>=7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.3)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade...')
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('Eduarda')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})



function teste(num){
    if(num>7)
        console.log(num)
    console.log('Final')
}

teste(6)
teste(8)
 