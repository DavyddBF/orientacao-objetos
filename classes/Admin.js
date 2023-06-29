// [IMPORTAÇÃO DA CLASSE "User" E CRIAÇÃO DA CLASSE "Admin" RECEBENDO COMO PROTÓTIPO "User"

import User from "./User.js"

export default class Admin extends User {
  constructor(nome, email, nascimento, role = 'admin', ativo = true) {
    super(nome, email, nascimento, role, ativo) // como se fosse = new User(nome, email...) Essa comparação funciona na minha cabeçakkkkk
  }

  criarCurso(nomeDoCurso, numeroDeVagas) {
    return `Curso de ${nomeDoCurso} tem ${numeroDeVagas} vagas disponiveis`
  }
}
