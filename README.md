# Documentação do Projeto Movie Store

Este projeto é o resultado de minha implementação com padrões de design, de um problema de refatoração criado e publicado por Martin Fowler em sua primeira edição do livro Refactoring.
Essa aplicação é trata-se de exemplo fictício que calcula e apresenta um extrato com base em dados de clientes e informações de filmes. Ele oferece duas opções de apresentação diferentes - um apresentador de texto e um apresentador de HTML - para exibir o extrato.

Detalhes sobre a aplicação original em: [Refactoring a JavaScript video store](https://www.martinfowler.com/articles/refactoring-video-store-js/)

O problema real é refatorar a aplicação de modo torná-la flexível e sustentável, sendo possível apresentar os relatórios em formato textual ou em HTML. Para isso, técnicas de refatoração inclusas no livro Refactoring foram utilizadas. Além disso, utilizei princípios de design e alguns táticas de DDD para enriquecer o resultado final.

As regras de negócio dentro das entidades são totalmente fictícias e seguem a representação do exemplo do original apresentado do artigo.

## Como começar

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório em sua máquina local:

```bash
git clone https://github.com/cahmoraes/movie-store-clean-architecture.git
```

2. Instale as dependências necessárias:

```bash
cd movie-store-clean-architecture
npm install
```

3. Execute os testes:

```bash
npm test
```

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `src/statement.ts`: Este arquivo contém a classe `Statement`, que é responsável por calcular e apresentar o extrato.
- `src/presenter/string-presenter.ts`: Este arquivo contém a classe `StringPresenter`, que apresenta o extrato como texto simples.
- `src/presenter/html-presenter.ts`: Este arquivo contém a classe `HTMLPresenter`, que apresenta o extrato como uma tabela HTML.
- `src/movies-repository.ts`: Este arquivo contém a classe `MoviesRepositoryImpl`, que simula um repositório de filmes.
- `repository/customers.json`: Este arquivo contém os dados de clientes de exemplo usados para testes.
- `repository/movies.json`: Este arquivo contém os dados de filmes de exemplo usados para testes.
- `tests/`: Este diretório contém os arquivos de teste do projeto.

## Como Usar

Para usar a classe `Statement` e gerar o extrato, você precisa criar uma nova instância dela e passar os parâmetros necessários:

```typescript
import { Statement } from './src/statement'
import { StringPresenter } from './src/presenter/string-presenter'
import { MoviesRepositoryImpl } from './src/movies-repository'

// Crie uma nova instância de MoviesRepositoryImpl com os dados de filmes
const moviesRepository = new MoviesRepositoryImpl(dadosDosFilmes)

// Crie uma nova instância de Statement com os dados de clientes, repositório de filmes e apresentador
const extrato = new Statement(
  dadosDosClientes,
  moviesRepository,
  new StringPresenter(),
)

// Calcule o extrato e obtenha o resultado
const resultado = extrato.calcular()

console.log(resultado)
```

Você pode escolher entre diferentes classes de apresentador para exibir o extrato em formatos diferentes. Atualmente, o projeto fornece o `StringPresenter` para a saída em texto simples e o `HTMLPresenter` para a saída em uma tabela HTML.
