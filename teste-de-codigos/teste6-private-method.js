// [CRIAÇÃO DA CLASSE "User" E EXPORTAÇÃO DELA]

export default class User {
// [Private class - Tornando as propriedades privadas]
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

// [Private class - Tornando os métodos privados]
    #objetoUser() {
      return ({
        nome: this.#nome,
        email: this.#email,
        nascimento: this.#nascimento,
        role: this.#role,
        ativo: this.ativo
      })
    }

    exibirInfos() {
      const newObjUser = this.#objetoUser()
      return `${newObjUser.nome}, ${newObjUser.email}, ${newObjUser.nascimento}`
    }
}
