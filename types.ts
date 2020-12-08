// boolean (true/false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array (type[]) é um pouco diferente do JS
let items: number[]
items = [1, 2, 3]

// segunda forma de utilizar arrays (Generic)
let values: Array<number>
values = [1, 2, 3]

// tuple - Array que sabemos a quantidade de itens e os tipos que são
let title: [number, string]
title = [1, "foo"]

// enum - conjunto de chave e valor
enum Colors {
  white = '#fff',
  black = '#000'
}

// any  (qualquer coisa) Não é legal evite usar / Dá para definir no tsconfig.json para não permitir
let coisa: any
coisa = [1]

//void (vazio)
function logger(): void {
  console.log('foo')
}

// null / undefined
type Bla = string | undefined;

// never (nunca vai retornar nada)
function error(): never {
  throw new Error("error");
}

// object (Tudo aquilo que não é um tipo primitivo)
let cart: object //pode ser qualquer coisa
cart = { 
  key : "fi"
}

//Inferência de tipo (Type inference)
let message2 = "mensagem definida"; //o Typescript infere automaticamente que é um string
message2 = "string nova"; //Só aceita outra string

//Inferência de tipo: Sabe que o "e" é o evento sem definirmos
window.addEventListener("click", (e) => {
  console.log(e.target);
})


