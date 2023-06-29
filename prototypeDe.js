// [CRIANDO DOIS OBJETOS - USANDO "user" COMO prototype DE "admin"]
// Uso de objetos literais
const user = {
    nome: 'Davyd',
    email: 'd@d.com',
    nascimento: '15/07/2005',
    role: 'estudante',
    ativo: true,
    exibirInfos() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Marcone',
    email: 'm@m.com',
    nascimento: '25/12/2000',
    role: 'admin',
    ativo: true,
    criaCurso() {
        console.log('Criando um curso')
    }
}

Object.setPrototypeOf(admin, user)
//Aqui o objeto "admin" tem acesso aos métodos do objeto "user"
admin.criaCurso()
admin.exibirInfos()