# DesafioChronos
# Sobre o projeto

Esta aplicação consiste em um sistema CRUD simples utilizando React, NodeJs e Mysql com as 4 operações essenciais e outras features listadas mais abaixo. O desafio foi solucionado
para o processo de seleção de estágio na Chronos Tecnologia.

## Layout Web
![Web](https://github.com/danilolan/assets/blob/main/Screenshot_12.png)
![Web](https://github.com/danilolan/assets/blob/main/Screenshot_10.png)
![Web](https://github.com/danilolan/assets/blob/main/Screenshot_11.png)

# Features


## Associação simples entre os selects Estado / Cidade
![Web](https://github.com/danilolan/assets/blob/main/Screenshot_13.png)

## Input de Hobbies completamente dinâmico podendo mudar a quantidade e o tipo
![Web](https://github.com/danilolan/assets/blob/main/Screenshot_14.png)

## Mensagens de feedback após tentativa de adicionar um novo cliente
![Web](https://github.com/danilolan/assets/blob/main/Screenshot_15.png)
![Web](https://github.com/danilolan/assets/blob/main/Screenshot_16.png)
![Web](https://github.com/danilolan/assets/blob/main/Screenshot_17.png)

## Ações para editar e excluir um cliente na tabela
![Web](https://github.com/danilolan/assets/blob/main/Screenshot_18.png)

## Tabela Paginada
![Web](https://github.com/danilolan/assets/blob/main/Screenshot_19.png)


# Tecnologias utilizadas
## Back end
- NodeJs
- Express
- MySql

## Front end
- HTML / CSS / JS / JavaScript
- ReactJS
- Axios

# Como executar o projeto

## Back end
Pré-requisitos: npm / mysql

```bash
# clonar repositório
git clone https://github.com/danilolan/desafioChronos
```

### Iniciar servidor MySql
- Criar nova mysql connection
- Importar o arquivo clientsDb.sql (selecionar clients no Target Schema) - guia: https://ajuda.hostnet.com.br/importacao-do-banco-via-mysql-workbench/
- Iniciar servidor mysql

```bash
# entrar na pasta do projeto back end
cd backend

# instalar dependências
npm install

```
### Configurar .env com informações da mysql connection

```bash
# executar o projeto
npm start

```

## Front end web
Pré-requisitos: npm

```bash
# clonar repositório
git clone https://github.com/danilolan/desafioChronos

# entrar na pasta do projeto frontend
cd frontend

# instalar dependências
npm install

# executar o projeto
npm start
```

# Autor

Danilo Herculano

https://www.linkedin.com/in/danilo-herculano-3906761b4/

