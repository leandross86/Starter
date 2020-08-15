
// REST

const usuario1 = {
  nome1: 'Leandro',
  idade1: 33,
  empresa: 'empresa'
}

const { nome1, ...rest } = usuario1

console.log(nome1)
console.log(rest)

// SPREAD

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const array3 = [...array1, ...array2]

console.log(array3)

const user = {
  name: 'Leandro',
  age: 33,
  company: 'company'
}
const user2 = {...user, name: 'João'}

console.log(user)
console.log(user2)


/*--------------------------------------DESTRUTURING-------------------------------------------------*/
const usuario = {
  nome: ' Leandro',
  idade: 33,
  endereco: {
    cidade: 'Rio das Ostras',
    estado: 'RJ',
  },
}

const { nome, idade, endereco: { cidade } } = usuario

console.log(nome)
console.log(idade)
console.log(cidade)

function mostraNome({ nome }) {
  console.log(nome)
}
mostraNome(usuario)

// const name = usuario.nome
// const idade = usuario.idade
// const cidade = usuario.endereco.cidade



/*--------------------------------------DEFAULT VALUE-------------------------------------------------*/

const soma = (a = 3, b = 6) => a + b
console.log(soma(1))
console.log(soma())

/*--------------------------------------ARROW FUNCTION-------------------------------------------------*/

const arr1 = [1, 3, 5, 4, 7, 8]

const newArr1 = arr1.map(item => item * 2)
console.log(newArr1)

/*--------------------------------------ARRAY-------------------------------------------------*/

const arr = [1, 3, 4, 5, 8, 9]

const newArr = arr.map(function(item, index) {
  return item + index
})

console.log(newArr)

const sum = arr.reduce(function(total, next){
  return total + next
})
console.log(sum)

const filter = arr.filter(function(item) { // RETORNA TRUE OU FALSE
  return item % 2 === 0
})
console.log(filter)

const find = arr.find(function(item) {
  return item === 4
})

console.log(find)


/*--------------------------------------CLASS-------------------------------------------------*/

class List {
  constructor() {
    this.data = []
  }
  add(data) {
    this.data.push(data)
    console.log(this.data)
  }
}

class TodoList extends List{
  constructor() {
    super();

    this.usuario = 'Leandro'
  }
  mostraUsuario() {
    console.log(this.usuario)
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();


