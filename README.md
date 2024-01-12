# Desafio entrevista NodeJS 

Este projeto é um desafio para a vaga de desenvolvedor backend NodeJS, consiste em uma API feita utilizando o framework NestJS

## Tecnologias de desenvolvimento utilizadas

- NestJS
- TypeORM
- MySQL
- JWT (Json Web Token)

## Objetivos

O objetivo do projeto é a criação de uma API REST para gerenciamento de estacionamento. A API realiza operações CRUD para cadastrar Estabelecimentos e Veículos e também gera relatórios personalizados.

## Endpoints
### Estabelecimentos
- GET - estabelecimentos/ . Busca todos os estabelecimentos cadastrados.
- GET - estabelcimentos/:estabelecimentoId . Busca um estabelecimento específico pelo seu ID.
- POST - estabelecimentos/ . Cria um novo estabelecimento.
  
  Corpo da requisição: `` {
  "nome": "Teste Tech Corp 1",
  "cnpj": "00.197.939/0001-99",
  "endereco": "rua teste2, numero 171",
  "telefone": "19999558844",
  "qtd_vagas_moto": 20,
  "qtd_vagas_carro": 10
} ``
- PUT - estabelecimentos/:estabelecimentoId . Atualiza os dados de um estabelecimento.
  
  Corpo da requisição: `` {
  "nome": "Teste Tech Corp 1",
  "cnpj": "00.197.939/0001-99",
  "endereco": "rua teste2, numero 171",
  "telefone": "19999558844",
  "qtd_vagas_moto": 20,
  "qtd_vagas_carro": 10
} ``
- DELETE - estabelecimentos/:estabelecimentoId . Deleta um estabelecimento.

### Veículos
- GET - veiculos/ . Busca todos os veiculos cadastrados.
- GET - veiculos/:veiculoId . Busca um veiculo específico pelo seu ID.
- POST - veiculos/ . Cria um novo veiculo.
  
   Corpo da requisição: `` {
  "marca": "Chevrolet",
  "modelo": "Prisma 1.4 LTZ 2018",
  "cor": "Preto",
  "placa": "FBI6H48",
  "tipo": "sedan"
} ``
- PUT - veiculos/:veiculoId . Atualiza os dados de um veiculo.
  
   Corpo da requisição: `` {
  "marca": "Chevrolet",
  "modelo": "Prisma 1.4 LTZ 2018",
  "cor": "Preto",
  "placa": "FBI6H48",
  "tipo": "sedan"
} ``
- DELETE - veiculos/:veiculoId . Deleta um veiculo.

### Movimentações
- GET - movimentacao/ . Busca todo o histórico de movimentações (entradas e saídas) disponível no banco.
- GET - movimentacao/:id . Busca uma movimentação específica pelo seu ID.
- GET - movimentacao/sumario/:estabelecimentoId . Gera um sumário de entradas e saídas de veículos em um estabelecimento específico.
- GET - movimentacao/sumario-por-hora/:estabelecimentoId . Gera um sumário de entradas e saídas por hora de um estabelecimento específico.
- GET - movimentacao/relatorio/:estabelecimentoId . Gera um relatório de veículos que entraram e saíram de um estabelecimento específico.
- POST - movimentação/:veiculoId/:estabelecimentoId/entrada . Cria uma entrada de veiculo em um estabelecimento.
- PUT - movimentacao/:id/saida . Cria uma saída de veículo utlizando o ID da movimentação desejada atualizando o campo com a data de saída.

### Auth
- POST - auth/generate-token . Cria um token de autenticação necessário para utilizar os endpoints.

## Instruções de uso
Para rodar o projeto faça o download desse repositório utilizando o comando ``git clone https://github.com/ChromeCrysis/desafio-nodejs.git`` 

Para instalar as dependências execute o comando ``npm install`` ou ``npm i`` .

Também é necessária a configuração do banco de dados MySQL preenchendo as variáveis presentes no arquivo app.module.ts.

Para utilizar qualquer endpoint da API será necessário gerar um Token, pois a mesma está protegida e utiliza de JWT (Json Web Token) para autenticação. Siga as instruções abaixo:
- Abra sua ferramenta de requisições e acesse o endpoint http://localhost:3000/auth/generate-token . O resultado será um JSON com um token.
  ![image](https://github.com/ChromeCrysis/desafio-nodejs/assets/43283660/446e79a2-e791-4fe2-9d39-bf49b424c364)

- Copie o token e insira como BearerToken na autenticação da requisição do endpoint desejado.
  ![image](https://github.com/ChromeCrysis/desafio-nodejs/assets/43283660/b4b2dcc8-ba97-4493-8258-c3c7516b0f70)
