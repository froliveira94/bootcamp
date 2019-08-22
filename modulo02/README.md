# Anotações

## Docker

- Trabalha na criação de ambientes isolados (containers)
- Os containers expõem portas para a comunicação

### Principais conceitos

- Imagem: são ferramentas, tecnologias que podem ser inseridos dentro de containers da aplicação
- Container: é uma instância de uma imagem
- Docker Registry (Docker Hub): Registro onde estão todas as imagens do Docker
- Dockerfile: Define como a imagem da aplicação funciona em um ambiente novo

### Criando ambiente

```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

## ORM

- Abstração do banco de dados
- Tabelas viram models

## Migration

- Controle de versão para a base de dados
- Cada arquivo contem instruções para criação, alteração ou remoção de tabelas e colunas
- Mantém a base atualizada entre todos os desenvolvedores do time e também no ambiente de produção
- Cada arqivo é uma migration e sua ordenação ocorre por data
- É possível desfazer uma migração se erramos algo enquanto estivermos desenvolvendo a feature
- Depois que a migration foi enviada para outros devs ou para o ambiente de produção ela jamais poderá ser alterada
- Cada migration pode realizar alterações em apenas uma tabela, você pode criar várias migrations para alterações maiores.

## Seeds

- População da base de dados para desenvolvimento
- Muito utilizado para popular dados para testes
- Executável apenas por código
- Jamais será utilizado em produção
- Caso sejam dados quem precisam ir para produção, a própria migration pode manipular os dados da tabela

## Arquitetura MVC

- O model armazena a abstração do banco, utilizado para manipular os dados contidos nas tabelas do banco. Não possuem responsabilidade sobre a regra de negócios da nossa aplicação
- O controller é o ponto de entrada das requisições da nossa aplicação, uma rota geralmente está associada diretamente com um método do controller. Podemos incluir a grande parte das regras de negociação da aplicação nos controllers. (Conforme a aplicação cresce podemos isolar as regras).
- A view é o retorno ao cliente, em aplicações que não utilizamos o modelo REST isso pode ser um HTML, mas no nosso caso é a view é apenas nosso JSON que será retornado ao front-end e depois manipulado pelo ReactJS ou React Native

## A face de um controller

- Classes
- Sempre retorna um JSON
- Não chama outro controller/método
- Quando criar um novo controller:
  - Apenas 5 métodos
    ```
    class UserController {
      index() {} // Listagem de usuários
      show() {} // Exibir um único usuário
      store() {} // Cadastrar usuário
      update() {} // Alterar usuário
      delete() {} // Remover usuário
    }
    ```
  - Estou falando da mesma entidade ?
