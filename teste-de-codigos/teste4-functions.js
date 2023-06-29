// [USANDO FUNÇÕES AO INVÉS DE CLASSE - TESTE]

function User(nome, email, nascimento, role, ativo = true) {
  this.nome = nome
  this.email = email
  this.nascimento = nascimento
  this.role = role || 'Estudante'
  this.ativo = ativo
  this.exibirInfos = () => {
    return `Nome: ${this.nome}, Email: ${this.email}`
  }
}

const newUser = new User('Davyd', 'davyd@gmail.com', '15/07/2005')
console.log(newUser)
console.log(newUser.exibirInfos())

//----------------------------------------------------------------------------

function Admin(nome, email, nascimento, role = 'Admin') {
    User.call(this, nome, email, nascimento)
    this.role = role
    this.criarCurso = (nomeDoCurso, numeroDeVagas) => {
      return `Curso de ${nomeDoCurso} tem ${numeroDeVagas} vagas disponiveis`
    }
}

const newAdm = new Admin('Davyd', 'davyd@gmail.com', '15/07/2005')
console.log(newAdm)
console.log(newAdm.exibirInfos())
console.log(newAdm.criarCurso('JavaScript', 13))

//----------------------------------------------------------------------------

function Docente(nome, email, nascimento, role = 'Docente') {
  User.call(this, nome, email, nascimento)
  this.role = role
  this.aprovaEstudante = (estudante, curso) => {
    return `O estudante ${estudante} passou no curso ${curso}`
  }
}

const newDocente = new Docente('Davyd', 'davyd@gmail.com', '15/07/2005')
console.log(newDocente)
console.log(newDocente.exibirInfos())
console.log(newDocente.aprovaEstudante('Davyd', 'JavaScript'))

//----------------------------------------------------------------------------
