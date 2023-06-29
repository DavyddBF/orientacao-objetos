function User() {}
User.prototype.nome = 'Davyd'
User.prototype.idade = 17
User.prototype.peso = '85kg'
User.prototype.altura = '1,78'

const pessoa = new User()
console.log(pessoa) // {nome:'Davyd' idade: 17, peso:'85kg', altura:'1,78'}
console.log(pessoa.nome) // 'Davyd'
