// [Métodos estáticos - Treino / Testes]

// class User {
//   constructor(nome, idade, cep) {
//     this.nome = nome;
//     this.idade = idade;
//     this.cep = cep;
//   }
//
// <- Método exibirInfos() não é estático ->
//   exibirInfos() {
//     console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e meu cep é ${this.cep}`);
//   }
// }
//
// const newUser = new User('Davyd', 17, '88780-000');
// newUser.exibirInfos();

//------------------------------------------------------------------------------------------------

class User {
  constructor(nome, idade, cep) {
    this.nome = nome;
    this.idade = idade;
    this.cep = cep;
  }

  exibirInfos() {
    console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e meu cep é ${this.cep}`);
  }

// Método estático ->
  static exibeNome() {
    return this.nome
  }
}

const newUser = new User('Davyd', 17, '88780-000');
const nomeUser = novoUser.nome
console.log(User.exibeNome(nomeUser))
