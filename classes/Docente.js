// [IMPORTAÇÃO DA CLASSE "User" E CRIAÇÃO DA CLASSE "Docente" RECEBENDO COMO PROTÓTIPO "User"]

import User from "./User.js"

export default class Docente extends User {
  constructor(nome, email, nascimento, role = 'docente', ativo = true) {
    super(nome, email, nascimento, role, ativo)
  }

  aprovaEstudante(curso, estudante) {
    return `O estudante ${estudante} passou no curso ${curso}`
  }
}
