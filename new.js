// [USANDO FUNÇÃO COMO CONSTRUCTOR]

// function User(nome, idade) {
//     this.nome = nome
//     this.idade = idade

//     this.exibirInfos = () => {
//         return `${this.nome}, ${this.idade}`
//     }
// }

// const novoUser = new User('Davyd', 17)
// console.log(novoUser.exibirInfos())

//------------------------------------------------------

// [CRIANDO O CONSTRUCTOR DE ADMIN E USANDO "User" COMO prototype]

// function Admin(role) {
//     User.call(this, 'Davyd', 17)
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

//------------------------------------------------------

// [USO DE OBJETO LITERAL, MAS USANDO "init" COMO CONSTRUTOR]
const user = {
    init: function(nome, idade) {
        this.nome = nome
        this.idade = idade
    },
    exibirInfos: function() {
        return console.log(this.nome, this.idade)
    }
}

const novoUser = Object.create(user)
novoUser.init('Davyd', 17)
novoUser.exibirInfos()

// console.log(novoUser.exibirInfos('Davyd'))
// console.log(user.isPrototypeOf(novoUser))
