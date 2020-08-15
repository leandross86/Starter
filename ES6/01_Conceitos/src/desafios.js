class Usuario {
  constructor(email, senha){
    this.email = email
    this.senha = senha
  }
  isAdmin() {
    return this.Admin === true
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha)

    this.admin = true
  }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");

console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

// 2.1

const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

// 2.2

const rocketseat18 = usuarios.filter(
  usuario => usuario.empresa === "Rocketseat" && usuario.idade >= 18
);
console.log(rocketseat18);

// 2.3

const google = usuarios.find(usuario => usuario.empresa === "Google");
console.log(google);

// 2.4

const calculo = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);

console.log(calculo);

// 3.1

const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);

// 3.2

const usuario = { nome: "Leandro", idade: 33 };

const mostraIdade = usuario => usuario.idade;

mostraIdade(usuario);

// 3.3

const nome = "Leandro";
const idade = 33;

const mostraUsuario = (nome = "Leandro", idade = 18) => ({
  nome,
  idade
});

mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4

const promise = () => new Promise((resolve, reject) => resolve());

// 4.1

const empresa = {
  nome: "Leandro",
  endereco: {
    cidade: "Rio das Ostras",
    estado: "RJ"
  }
};

const {
  nome,
  endereco: { cidade, estado }
} = empresa;

console.log(nome); 
console.log(cidade); 
console.log(estado); 

// 4.2

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}

mostraInfo({ nome: "Leandro", idade: 33 });

// 5.1 A

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// 5.1 B

function soma(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// 5.2

const usuario = {
  nome: "Leandro",
  idade: 233,
  endereco: {
    cidade: "Rio das Ostras",
    uf: "RJ",
    pais: "Brasil"
  }
};

const usuario2 = { ...usuario, nome: "João" };
const usuario3 = {
  ...usuario,
  endereco: { ...usuario.endereco, cidade: "Rio de Janeiro" }
};


const usuario1 = "Leandro";
const idade = 33;

console.log(`O usuário ${usuario} possui ${idade} anos`);

const nome = "Leandro";
const idade = 33;

const usuario = {
  nome,
  idade,
  cidade: "Rio das Ostras"
};