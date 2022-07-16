// ### exemplos básicos

const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];

let acumulador = 0
for(let i = 0; i < numeros.length; i++) {
  acumulador -= numeros[i]
}
// console.log(acumulador)

let valorInicial = 0
let usandoReduceParaSubtrair = numeros.reduce((acumulador, valorAtual) => acumulador - valorAtual, valorInicial)
// console.log(usandoReduceParaSubtrair)

function calcularMedia(lista) {
  let soma = 0
  for(let i = 0; i < lista.length; i++) {
    soma += lista[i]
  }
  console.log(soma/lista.length)
}

// calcularMedia(numeros)

function calcularMediaUsandoReduce(lista) {
  let media = lista.reduce((acumulador, valorAtual) => acumulador + valorAtual) / lista.length
  console.log(media)
}

// calcularMediaUsandoReduce(numeros)


let filtrados = [];
for(let i = 0; i < numeros.length; i++) {
  if (numeros[i] == 3) {
    filtrados.push(numeros[i]);
  } 
}
// console.log(filtrados)
let usandoFilter = numeros.filter((i) => i == 3)
// console.log(usandoFilter)


let resultados = []
for(i of numeros) {
  let multiplicado = i = i * 3
  resultados.push(multiplicado)
}
// console.log(resultados)
let usandoMap = numeros.map((i) => i * 3)
// console.log(usandoMap)




// ### filter()

let getFilmsTofilter = async (field, value) => {
  try {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const filmes = await response.json()
    console.log(filmes)
    const resultadoPesquisa = filmes.filter(filme => filme[field].toLowerCase().includes(value.toLowerCase()))
    console.log(resultadoPesquisa)

  } catch (error) {
    console.error(error)
  }
}

// getFilmsTofilter('description', 'killed')


// ### map()

const container = document.getElementById('demo')

let getFilmsToMap = async (field, value) => {
  try {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const filmes = await response.json()
    console.log(filmes)
    // const nossosFilmes = filmes.slice(2, 6)
    // console.log(nossosFilmes)
    filmes.map((filme) => {
      const titulo = document.createElement('h2')
      titulo.innerText = filme.title
      const imagem = document.createElement('img')
      imagem.setAttribute('src', filme.image)
      container.appendChild(imagem)
      container.appendChild(titulo)
    })
    

  } catch (error) {
    console.error(error)
  }
}

// getFilmsToMap()

// ### Quando request retorna apenas 1 elemento como objeto, não precisamos de métodos de iteração de arrays


let buscarCEP = async (cep) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const endereco = await response.json()
    console.log(endereco)
    console.log(endereco.bairro)
    console.log(endereco.logradouro)
    const bairro = document.createElement('p')
    bairro.innerText = endereco.bairro
    container.appendChild(bairro)
  } catch (error) {
    console.error(error)
  }
}

// buscarCEP(51010000)
