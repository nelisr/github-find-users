## GitHub Find Users

Esse é um projeto Vue que consome informações de usuários na API do GitHub.

## Como usar?

1. Instalar as dependências

```
yarn i
```

ou

```
npm i
```

2. Subir a aplicação em modo de desenvolvimento

```
yarn dev
```

ou

```
npm dev
```

3. Build da aplicação em modo de produção

```
yarn build
```

ou

```
npm build
```

4. Usando Docker para fazer build

4.1. Gerando a imagem docker

```
docker build . -t github-find-users
```

4.2. Criando um container com base na imagem gerada

```
docker run -d -p 8085:80 --name github-find-users github-find-users
```

4.3. Caso queira simplicar as etapas anteriores pode usar o docker-compose

```
docker-compose up --build -d
```

## Versão

1.0.0
