// [TESTE DOS "getter" E "setter"]

// class Name {
//     constructor(name) {
//         this.name = name
//     }
//
//     get name() {
//         return this.name
//     }
//
//     set name(newName) {
//         this.name = newName
//     }
//
//     showName() {
//         console.log(this.name)
//     }
// }
//
// const newName = new Name('Davyd')
// console.log('Nome atual: ' + newName.name)
// newName.name = 'Rodrigo'
// console.log('Nome foi mudado para: ' + newName.name)
// newName.showName()

// [O CÓDIGO ACIMA DÁ UM ERRO, POIS O "get" E O "set" ESTÃO COM O MESMO NOME, PARA DAR CERTO, SEGUE O CÓDIGO ABAIXO]

//------------------------------------------------------------------------------

class Name {
    constructor(name) {
        this.name = name
    }

    get getName() {
        return this.name
    }

    set getName(newName) {
        this.name = newName
    }

    showName() {
        console.log(this.name)
    }
}

const newName = new Name('Davyd')
console.log('Nome atual: ' + newName.getName)
newName.getName = 'Rodrigo'
console.log('Nome foi mudado para: ' + newName.getName)
newName.showName()
