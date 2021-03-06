## GitHub Find Users

Esse é um projeto Vue que consome informações de usuários na API do GitHub.

## Antes de tudo

Adicionar a secret que enviei por email nos \*.env em VUE_APP_GITHUB_TOKEN para ser possível fazer mais requisições na API do GitHub

## Como usar?

**1 - Instalar as dependências**

```
yarn i
```

ou

```
npm i
```

**3 - Subir a aplicação em modo de desenvolvimento**

```
yarn dev
```

ou

```
npm run dev
```

**3 - Build da aplicação em modo de produção**

```
yarn build
```

ou

```
npm run build
```

**4 - Usando Docker para fazer build**

Gerando a imagem docker

```
docker build . -t github-find-users
```

Criando um container com base na imagem gerada

```
docker run -d -p 8085:80 --name github-find-users github-find-users
```

Caso queira simplicar as duas etapas anteriores pode usar o docker-compose

```
docker-compose up --build -d
```

## Versão

1.0.0
