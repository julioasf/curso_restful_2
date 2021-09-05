# curso_restful_2

Essa versão é implementada sem a utilização de Design Patterns.

A versão que utiliza Design Patterns é a curso_restful_2_v2.
https://www.udemy.com/course/api-restful-de-vendas/learn/lecture/25624914#questions

1 - Quando efetuado o clone do projeto:
1.1 - Executar: $ yarn install

2 - TypeORM:
2.1 - Renomear o arquivo /ormconfig.example.json para /ormconfig.json e configurar os dados de conexão com o BD.
2.2 - No arquivo ormconfig.json, ajustar os paths de entities, migrations e migrationsDir conforme o ambiente:
  DEV  ---> ./src
  PROD ---> ./dist

3 - Para executar esse projeto:
3.1 - Executar os containers Docker:
  Postgres:     $ docker container start postgres
  Redis:        $ docker container start redis
  Redis-Client: $ docker container start redis-client
3.2 - Executar o projeto (na raiz do projeto):
  Em DEV:  $ yarn dev
  Em PROD: $ yarn build
