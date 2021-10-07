 const pessoa = { 
     saudacao: 'Bom dia',
     falar() {
         console.log(this.saudacao)
     }
 }

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


function Pessoar() {
    this.idade = 0
    const self = this
    setInterval( function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000 )
}
new Pessoar