import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome)
novoUser.nome = 'Davyd de Basto Ferreira'
console.log(novoUser.nomeSobrenome)
