# prisma-try
GraphQL trial with Prisma

# Refferences
* [Prisma](https://www.prisma.io/docs/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/)
* [Playground](https://github.com/prisma/graphql-playground)
* [GraphQL](https://graphql.org/learn/)

# Requirements

* npm
* prisma CLI
* graphql-yoga
* prisma-client-lib

```
$ npm install -g prisma
```

## Local Preparation

```
# environment for local development
$ git clone {this repository}
$ cd {reposity path}
$ npm install

# docker preparation
$ docker-compose up -d

# Data Model & counter-part Client
$ prisma deploy
$ prisma generate
```

## Run Your Own Prisma Serve

```
$ node index.js
```

Access to http://localhost:4000


## Run playground to access Docker directly

```
$ prisma playground
```

Access to http://localhost:3000

