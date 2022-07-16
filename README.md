# On17-TodasEmTech-AulaExtra-Revisao

Esta é a Aula Extra de Revisão da turma online: Todas em Tech on17 - Front-end, nesta aula do dia 16/07/2022 teremos os seguintes conteúdos:

- Métodos de array
- APIs
    - Protocolo HTTP
    - Request/Response
    - API
    - JSON
    - fetch()

<br>

<img src="https://c.tenor.com/xS0kULrg5F4AAAAC/bitch-im-back-by-popular-demand-beyonce.gif" width=900>

## Apresentação

[Lilit Bandeira](https://www.instagram.com/lilitravesti), sou uma travesti paraibana residente em São Paulo, trabalho como Software Engineer no Nubank, ex-aluna e professora {reprograma} e professora também no minas programam;

- E-mail: devlilitbandeira@gmail.com
- [LinkedIn](https://www.linkedin.com/in/lilitbandeira)
- [GitHub](https://github.com/lilitbandeira)

## Acordos

- Manter atenção nas explicações e codar nos momentos definidos;
- Enviar dúvidas no chat para as monitoras;
- Levantar a mão sempre que desejar falar, o que pode ser feito a qualquer momento;
- Manter microfones desligados sempre que alguém estiver falando;
- Manter as câmeras ligadas o máximo de tempo possível;

# Plano de aula - Revisão

## 1. Métodos de Array (by popular demand)

```js
  const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];
  ```

`filter()`

  ```js
  const filtrarPor = numeros.filter((element) => element == 3);
  console.log(filtrarPor); // retorno [3, 3, 3]
  ```

`map()`

  ```js
  const executarTodos = numeros.map((element) => (element = 4));
  console.log(executarTodos); // retorn  [4, 4, 4, 4, 4, 4, 4, 4, 4]
  ```

`reduce()` -> O método reduce() uma callback que será executada para cada elemento da array, resultando num único valor de retorno, esta callback pode receber alguns parâmetros, sendo os mais comuns o `acumulador` e o `valorAtual`

  ```js
  const ReduzirPara = numeros.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual
  );
  console.log(ReduzirPara); // retorno 27
  ```

## 2. API's

### 2.1 Protocolo HTTP

- O <b style="color: greenyellow;">HTTP</b> - Hypertext Transfer Protocol (Protocolo de transferência de Hipertexto) é um protocolo de comunicação. Através dele o cliente e o servidor conseguem se comunicar, seguindo um conjunto de regras bem definidas. Esse protocolo determina como devem ser solicitadas informações e como elas devem ser entregues.

- Quando acessamos uma <b style="color: greenyellow;">URL</b>, o <b style="color: greenyellow;">Client</b> envia uma solicitação passando todas as informações que precisamos para o <b style="color: greenyellow;">Server</b>, esta comunicação é feita na grande maioria dos casos de aplicações modernas através do <b style="color: greenyellow;">Protocolo HTTP</b>

---

### 2.2 Request/Response

- O protocolo HTTP é um protocolo usado no modelo Client/Server e é baseado em <b style="color: greenyellow;">requests</b>(requisições) e 
<b style="color: greenyellow;">responses</b>(respostas);

- Uma <b style="color: greenyellow;">Request</b> deve indicar a ação a ser executada de acordo com as definições do protocolo HTTP, estes são os <b style="color: greenyellow;">Métodos HTTP</b>

- Principais métodos HTTP:

| Estado   | Ação realizada                                                                                             |
| -------- | -------------------------------------------------------------------------------------------------------    |
| POST     | <b style="color: greenyellow;">C</b>reate (Criar) - Armazena dados no banco                                |
| GET      | <b style="color: greenyellow;">R</b>ead (Ler) - Realiza apenas leitura de dados no banco                   |
| PUT      | <b style="color: greenyellow;">U</b>pdate (Substituir) - Atualiza dados substituindo o conjunto de dados   |
| PATCH    | <b style="color: greenyellow;">U</b>pdate (Modificar) - Atualiza dados modificando apenas o campo desejado |
| DELETE   | <b style="color: greenyellow;">D</b>elete (Excluir) - Exclui dados do banco                                |

- Uma <b style="color: greenyellow;">Response</b> é a <i style="color: pink;">reação</i> do <b style="color: greenyellow;">Server</b> enviada após receber uma requisição do <b style="color: greenyellow;">Client</b>, e seu conteúdo possui além do que foi solicitado, um <b style="color: greenyellow;">Status Code</b>.

| Código    | Tipo de Resposta       |
| --------- | ---------------------  |
| 100 - 199 | Apenas informações     |
| 200 - 299 | Sucesso                |
| 300 - 399 | Redirecionamento       |
| 400 - 499 | Erro do Client         |
| 500 - 599 | Erro do Server         |

---

### 2.3 APIs

- Uma <b style="color: greenyellow;">API</b> - Application Programming Interface (Interface de Programação de Aplicativos) é uma interface de comunicação e integração entre aplicações. As <b style="color: greenyellow;">APIs</b> criam formas e ferramentas para que utilizemos uma funcionalidade ou acessemos dados sem precisar recriar coisas que já existem.

- As <b style="color: greenyellow;">APIs</b> podem ser uma Web APIs, uma lib, um framework e todas as interfaces que forneçam funcionalidades em uma linguagem específica;

- As <b style="color: greenyellow;">Web APIs</b> são um conjunto de instruções e padrões de programação para acesso a um aplicativo de software fornecido por uma empresa de software para que outras desenvolvedoras possam utiliza-o em sua próprias aplicações, algumas destas são <b style="color: greenyellow;">APIs públicas</b> que podem ser acessadas por meio de cadastros gratuitos ou até completamente aberta, outras são <b style="color: greenyellow;">APIs privadas</b> que são de uso restrito/interno da empresa criadora.

- Dentre as arquiteturas das APIs, temos as <b style="color: greenyellow;">APIs REST</b>: A arquitetura REST - ou Representational State Transfer (Transferência de Estado Representacional), que é amplamente utilizada dentro do desenvolvimento de APIs pois possui um modelo mais simples de requisição que segue determinadas práticas e diretrizes na sua criação, neste curso iremos estudar as <b style="color: greenyellow;">APIs REST</b>.

- Exemplos de APIs públicas:
  1. [Dog API](https://dog.ceo/dog-api/)
  2. [ViaCEP API](https://viacep.com.br/)
  3. [ReqRes API](https://reqres.in/)
  4. [Studios Ghibli API](https://ghibliapi.herokuapp.com/)
  5. [Poke API](https://pokeapi.co/)
 
 <br>

- Toda API possui uma documentação que nos fornecem tudo que precisamos saber para utilizá-la;

---

### 2.4 JSON

- <b style="color: greenyellow;">JSON</b> - JavaScript Object Notation (Notação de Objeto JavaScript) é um formato baseado em texto padrão para representar dados estruturados com base na sintaxe do objeto JavaScript; _(MDN)_

- Mesmo que se assemelhe à sintaxe literal do objeto JavaScript, ele pode ser usado independentemente do JavaScript, e muitos ambientes de programação possuem a capacidade de ler (analisar) e gerar JSON; _(MDN)_

- O <b style="color: greenyellow;">JSON</b> é transmitido por uma rede como string e é uma formatação muito leve, o que permite ser utilizado em uma variedade enorme de aplicações. 

- O JavaScript possui o Objeto global `JSON` que possui métodos para converter para objeto quando queremos acessar os dados e para string quando queremos enviá-lo por rede;

- Um objeto JSON pode ser armazenado em seu próprio arquivo. _(MDN)_ (**ex.: arquivo.json**)

> JSON contém apenas propriedades, sem métodos; <br> JSON só aceita aspas duplas; <br> JSON não aceita chaves/propriedades sem aspas como objetos JS, toda string precisa usar aspas;

### 2.5 fetch()

- `fetch()` é um método moderno e amplamente utilizado nas aplicações JavaScript atualmente que permite acesso e manipulação de requisições HTTP, este método é fornecido pela <b style="color: greenyellow;">API Fetch</b>. O `fetch()`retorna uma `Promise`.

- Estrutura do `fetch()`:

```js
  fetch(url, options)
```

- `url` é geralmente uma string que se refere ao recurso que desejamos buscar, no caso do método `GET` somente este argumento é necessário;
- `options` é um argumento opcional, um objeto que contém qualquer configurações customizadas que desejamos adicionar às requisições, sendo os principais: 
  1. `method` uma string que define o método da requisição;
  2. `headers` um objeto com informações de cabeçalho;
  3. `body` um objeto com informações do corpo da requisição;

<br>

- Uma requisição `GET` utilizando `fetch()`, sem informações adicionais:

```js
async function getData() {
  try {
    const response = await fetch("https://api.exemplo.com")
    const data = await response.json()
    console.log(data)
  }
  catch(erro) {
    console.log("HTTP-Error: " + erro);
  }
}
getData()
```

- Uma requisição `GET` utilizando `fetch()`, adicionando um objeto de configurações:

```js
async function getData() {
  try {
    const response = await fetch("https://api.exemplo.com", {
      method: 'GET',
      headers: {
      'Content-Type': 'image/jpeg'
      },
      cache: 'default'
    })
    const data = await response.json()
    console.log(data)
  }
  catch(erro) {
    console.log("HTTP-Error: " + erro);
  }
}
getData()
```

---
