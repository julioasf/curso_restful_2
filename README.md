# curso_restful_2

Essa versão é implementada sem a utilização de Design Patterns.

A versão que utiliza Design Patterns é a curso_restful_2_v2.
https://www.udemy.com/course/api-restful-de-vendas/learn/lecture/25624914#questions

1 - Quando efetuado o clone do projeto:
1.1 - Executar: $ yarn install

2 - TypeORM:
2.1 - Copiar e renomear o arquivo conforme o ambiente:
  DEV:   /ormconfig.example_dev.json para /ormconfig.json;
  PROD:  /ormconfig.example_prod.json para /ormconfig.json;
2.2 - Configurar os dados de conexão com o BD.

3 - Para executar esse projeto:
3.1 - Executar os containers Docker:
  Postgres:     $ docker container start postgres
  Redis:        $ docker container start redis
  Redis-Client: $ docker container start redis-client
3.2 - Executar o projeto (na raiz do projeto):
  Em DEV:  $ yarn dev
  Em PROD: $ yarn build
