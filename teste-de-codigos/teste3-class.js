class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}

class Admin extends User {
  constructor(nome, email, nascimento, role = 'admin', ativo = true) {
    super(nome, email, nascimento, role, ativo)
  }
  criaCurso() {
    console.log('Criando um curso')
  }
}

const novoAdm = new Admin('Davyd', 'davyd@email.com', '15/07/2005')
console.log(novoAdm)
console.log(novoAdm.exibirInfos())
console.log(novoAdm.criaCurso())