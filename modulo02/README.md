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
