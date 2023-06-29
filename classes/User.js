// [CRIAÇÃO DA CLASSE "User" E EXPORTAÇÃO DELA]

export default class User {
// [Private class - Tornando as propriedades privadas]
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

// Propriedade acessor - "get"
    get nome() {
      return this.#nome
    }

    get email() {
      return this.#email
    }

    get nascimento() {
      return this.#nascimento
    }

    get role() {
      return this.#role
    }

    get ativo() {
      return this.#ativo
    }

    set nome(novoNome) {
      if(novoNome === '') {
        throw new Error('Formato inválido. Não pode inserir valores vazios!')
      } else {
        console.warn('Nome mudado para: ' + novoNome)
      }

      let [ nome, ...sobrenome] = novoNome.split(" ")
      sobrenome = sobrenome.join(' ')
      this.#nome = nome
      this.#sobrenome = sobrenome
    }

    get sobrenome() {
      return this.#sobrenome
    }

    get nomeSobrenome() {
      return `${this.#nome} ${this.#sobrenome}`
    }

    exibirInfos() {
      return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}
