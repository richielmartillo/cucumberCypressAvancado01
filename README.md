# cucumberCypressAvancado01

Projeto de automação de testes end-to-end (E2E) com **Cypress** e **Cucumber**, desenvolvido como prática do curso de **Engenheiro de Qualidade de Software da EBAC**.

Este repositório foi criado com o objetivo de treinar a escrita de cenários em **Gherkin**, a implementação de testes automatizados com **BDD**, a organização da estrutura do projeto e a validação de fluxos de login com cenários positivos e negativos.

---

## Sobre o projeto

Durante esta prática, foi desenvolvido um projeto de automação focado na funcionalidade de **login** da aplicação **Hub de Leitura**.

A proposta foi automatizar cenários importantes do fluxo de autenticação, cobrindo comportamentos esperados do sistema, como:

- login realizado com sucesso
- login com credenciais inválidas
- validação de formato inválido de email
- tentativas inválidas utilizando massa de dados

Além da automação dos testes, também foram praticados conceitos importantes de organização de projeto, reutilização de código, uso de comandos customizados no Cypress e acompanhamento das execuções com **Cypress Cloud**.

---

## Objetivo do projeto

Este projeto foi criado para praticar e demonstrar:

- automação de testes E2E com Cypress
- escrita de cenários em Gherkin
- utilização de Cucumber no padrão BDD
- validação de cenários positivos e negativos
- uso de massa de dados em testes automatizados
- criação de comandos customizados
- separação entre arquivos `.feature` e `step definitions`
- organização da estrutura do projeto para facilitar manutenção
- acompanhamento de execuções e resultados com Cypress Cloud

---

## Funcionalidades testadas

Os testes automatizados deste projeto estão concentrados no fluxo de login da aplicação.

### Cenários automatizados

- **Login realizado com sucesso**  
  Valida que um usuário padrão consegue acessar a plataforma com credenciais válidas.

- **Login com credenciais inválidas**  
  Valida a exibição da mensagem de erro quando o usuário informa email e/ou senha incorretos.

- **Validação de email inválido**  
  Valida o comportamento do sistema quando o campo email recebe um valor em formato inválido.

- **Login inválido com massa de dados**  
  Valida múltiplas tentativas de login incorretas utilizando diferentes combinações de email, senha e mensagem esperada.

---

## Tecnologias utilizadas

Neste projeto foram utilizadas as seguintes tecnologias:

- **Cypress**  
  Framework de automação de testes end-to-end.

- **Cucumber / Gherkin**  
  Ferramenta utilizada para escrever cenários no formato BDD.

- **JavaScript**  
  Linguagem utilizada para implementar os step definitions e os comandos customizados.

- **Node.js**  
  Ambiente necessário para instalar dependências e executar o projeto.

- **npm**  
  Gerenciador de pacotes utilizado no projeto.

- **Cypress Cloud**  
  Plataforma utilizada para acompanhar execuções, resultados e evidências dos testes automatizados.

---

## Estrutura do projeto

A estrutura foi organizada para separar claramente os cenários, os steps e os arquivos de suporte:

```bash
cypress/
 ├── e2e/
 │    ├── loginP.feature
 │    ├── loginP-email-invalido.feature
 │    └── loginP-masa.feature
 │
 ├── fixtures/
 │
 ├── support/
 │    ├── step_definitions/
 │    │    ├── loginP.steps.js
 │    │    └── teste.steps.js
 │    ├── commands.js
 │    └── e2e.js
