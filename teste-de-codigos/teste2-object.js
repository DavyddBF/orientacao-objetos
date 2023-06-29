console.log(this) // Global

const objeto = {
    nome: 'Davyd',
    idade: 17,
    peso: '85kg',
    info() {
        console.log(this.nome) // mesmo que -> console.log(objeto.nome)
    }
}

objeto.info()