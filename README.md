<h1 align="center">
    <img alt="Rocketseat" title="Rocketseat" src=".github/rocketseat.png" width="60px" />
</h1>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
  </p>
<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

</p>

<br>

<p align="center">
  <img alt="Sistema" src=".github/imagem1.PNG" width="100%">
</p>

## API rest mostrar rodadas do Brasileirão

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/) - v14.4.0
- [Mongo](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) - 19.03.8
- [Yarn](https://yarnpkg.com/) - 1.22.4
- [Npm](https://www.npmjs.com/) - 6.14.5


## 💻 Projeto

Projeto para cadastro de rodadas do Brasileirão usando NodeJS, Express, MongoDB e Docker.

## 🚀 Como Rodar

- Clone o projeto.
- Rode o comando "yarn install" para instalar as dependências.
- Rode o comando "docker run --name mongodb -p 27017:27017 -d -t mongo"
- docker ps para ver se o Mongo está rodando no Docker.
- Caso não esteja docker start mongo para rodar.
- Rode o comando "node src/index.js" para iniciar a API.
- Para testar a API acesse localhost:3000.

## 👩🏿‍💻 Rotas

- **`POST auth/register`**: Rota crair um usuario;
Envio
```
{
    "name": "João",
    "email": "joao3@joao.com",
    "password": "123456"
}

```
Retorno
```
{
    "user": {
        "_id": "6020684de0458a0c6c2ceaf6",
        "name": "João",
        "email": "joao4@joao.com",
        "createdAt": "2021-02-07T22:23:09.011Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJpZCI6IjYwMjA2ODRkZTA0NThhMGM2YzJjZWFmNiJ9LCJpYXQiOjE2MTI3MzY1ODksImV4cCI6MTYxMjgyMjk4OX0.vbU6uG_RalGcVEfeEtErqedD8-BjBnKr_DHdy3H-liQ"
}
```

- **`POST auth/authenticate`**: Rota para autenticar o usuario;
Envio
```
{
    "email": "joao3@joao.com",
    "password": "123456"
}

```
Retorno
```
{
    "user": {
        "_id": "6020684de0458a0c6c2ceaf6",
        "name": "João",
        "email": "joao4@joao.com",
        "createdAt": "2021-02-07T22:23:09.011Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJpZCI6IjYwMjA2ODRkZTA0NThhMGM2YzJjZWFmNiJ9LCJpYXQiOjE2MTI3MzY1ODksImV4cCI6MTYxMjgyMjk4OX0.vbU6uG_RalGcVEfeEtErqedD8-BjBnKr_DHdy3H-liQ"
}
```

- **`POST auth/forgot_password`**: Rota para gerar token para mudar senha;
Envio
```
{
    "email": "jamjs7@gmail.com"
}

```
Retorno
```
{
    OK
}
```

- **`POST auth/reset_password`**: Rota para para mudar senha;
Envio
```
{
    "email": "jamjs7@gmail.com",
    "token": "7bc2403e52028b54fec0aa88357b708646549ce2",
    "password": "654321"
}
```

- **`GET /time`**: Rota para usuarios autenticados verem os times;
Retorno
```
{
    "times": [
        {
            "_id": "6024358ea896930b48bad1ca",
            "nome": "Vasco da Gama",
            "createdAt": "2021-02-10T19:35:42.938Z",
            "__v": 0
        },
        {
            "_id": "60243598a896930b48bad1cb",
            "nome": "Flamengo",
            "createdAt": "2021-02-10T19:35:52.174Z",
            "__v": 0
        },
        {
            "_id": "6024359ca896930b48bad1cc",
            "nome": "Botafogo",
            "createdAt": "2021-02-10T19:35:56.851Z",
            "__v": 0
        },
        {
            "_id": "602435a5a896930b48bad1cd",
            "nome": "Fluminense",
            "createdAt": "2021-02-10T19:36:05.325Z",
            "__v": 0
        }
    ]
}
```

- **`GET /time/:timeId`**: Rota para usuarios autenticados verem detalhe do time;
Retorno
```
{
    "_id": "6024358ea896930b48bad1ca",
    "nome": "Vasco da Gama",
    "createdAt": "2021-02-10T19:35:42.938Z",
    "__v": 0
}
```

- **`DELETE /time/:timeId`**: Rota para usuarios autenticados excluírem o time;
Retorno
```
{
    "msg": "Time excluido com sucesso."
}
```
- **`POST /time`**: Rota para usuarios autenticados criarem times;
Envio
```
{
    "nome": "Internacional"    
}
```
 
 Retorno
 ```
 {
     "time": {
         "_id": "60243a96287fc10f7c39c756",
         "nome": "Internacional",
         "createdAt": "2021-02-10T19:57:10.053Z",
         "__v": 0
     }
 }
```

- **`PUT /time/:timeId`**: Rota para usuarios autenticados alterarem o time;
Envio
```
{
    "nome": "Vasco da Gama"
}
```

Retorno
```
{
    "time": {
        "_id": "6024358ea896930b48bad1ca",
        "nome": "Vasco da Gama",
        "createdAt": "2021-02-10T19:35:42.938Z",
        "__v": 0
    }
}
```

- **`POST /jogos`**: Rota para usuarios autenticados criarem jogos;
Envio
```
{
    "ano": "2020",  
    "rodada": 1,
    "visitante": "60243a96287fc10f7c39c756",
    "mandante": "602435a8a896930b48bad1ce",
    "placar_visitante": 1, 
    "placar_mandante": 1, 
    "vencedor": 3
}
```
 
 Retorno
 ```
{
    "jogo": {
        "_id": "60244124a67c9d49fc963101",
        "ano": 2020,
        "rodada": 1,
        "visitante": "60243a96287fc10f7c39c756",
        "mandante": "602435a8a896930b48bad1ce",
        "placar_visitante": 1,
        "placar_mandante": 1,
        "vencedor": 3,
        "createdAt": "2021-02-10T20:25:08.369Z",
        "__v": 0
    }
}
```

- **`GET /jogos/:ano/:rodada`**: Rota para usuarios autenticados consultarem jogos com filtro de ano e rodada;
 Retorno
 ```
{
    "jogos": [
        {
            "_id": "60243eb699430622e840ea36",
            "ano": 2020,
            "rodada": 1,
            "visitante": {
                "_id": "60243598a896930b48bad1cb",
                "nome": "Flamengo",
                "createdAt": "2021-02-10T19:35:52.174Z",
                "__v": 0
            },
            "mandante": {
                "_id": "6024358ea896930b48bad1ca",
                "nome": "Vasco da Gama",
                "createdAt": "2021-02-10T19:35:42.938Z",
                "__v": 0
            },
            "placar_visitante": 0,
            "placar_mandante": 2,
            "vencedor": 1,
            "createdAt": "2021-02-10T20:14:46.069Z",
            "__v": 0
        },
        {
            "_id": "6024410da67c9d49fc963100",
            "ano": 2020,
            "rodada": 1,
            "visitante": {
                "_id": "602435c3a896930b48bad1d2",
                "nome": "Atletico Mineiro",
                "createdAt": "2021-02-10T19:36:35.389Z",
                "__v": 0
            },
            "mandante": {
                "_id": "602435cfa896930b48bad1d4",
                "nome": "Gremio",
                "createdAt": "2021-02-10T19:36:47.014Z",
                "__v": 0
            },
            "placar_visitante": 3,
            "placar_mandante": 1,
            "vencedor": 2,
            "createdAt": "2021-02-10T20:24:45.599Z",
            "__v": 0
        },
        {
            "_id": "60244124a67c9d49fc963101",
            "ano": 2020,
            "rodada": 1,
            "visitante": {
                "_id": "60243a96287fc10f7c39c756",
                "nome": "Internacional",
                "createdAt": "2021-02-10T19:57:10.053Z",
                "__v": 0
            },
            "mandante": {
                "_id": "602435a8a896930b48bad1ce",
                "nome": "Santos",
                "createdAt": "2021-02-10T19:36:08.409Z",
                "__v": 0
            },
            "placar_visitante": 1,
            "placar_mandante": 1,
            "vencedor": 3,
            "createdAt": "2021-02-10T20:25:08.369Z",
            "__v": 0
        }
    ]
}
```
- **`GET /jogos/time/:ano/:timeId`**: Rota para usuarios autenticados consultarem jogos com filtro de ano e time;
 Retorno
 ```
{
    "jogos": [
        {
            "_id": "60244124a67c9d49fc963101",
            "ano": 2020,
            "rodada": 1,
            "visitante": {
                "_id": "60243a96287fc10f7c39c756",
                "nome": "Internacional",
                "createdAt": "2021-02-10T19:57:10.053Z",
                "__v": 0
            },
            "mandante": {
                "_id": "602435a8a896930b48bad1ce",
                "nome": "Santos",
                "createdAt": "2021-02-10T19:36:08.409Z",
                "__v": 0
            },
            "placar_visitante": 1,
            "placar_mandante": 1,
            "vencedor": 3,
            "createdAt": "2021-02-10T20:25:08.369Z",
            "__v": 0
        },
        {
            "_id": "60244533c1bd9b3e74041864",
            "ano": 2020,
            "rodada": 2,
            "visitante": {
                "_id": "602435a8a896930b48bad1ce",
                "nome": "Santos",
                "createdAt": "2021-02-10T19:36:08.409Z",
                "__v": 0
            },
            "mandante": {
                "_id": "602435a8a896930b48bad1ce",
                "nome": "Santos",
                "createdAt": "2021-02-10T19:36:08.409Z",
                "__v": 0
            },
            "placar_visitante": 1,
            "placar_mandante": 1,
            "vencedor": 3,
            "createdAt": "2021-02-10T20:42:27.701Z",
            "__v": 0
        }
    ]
}
```

- **`GET /rodadas/:ano/:rodadaId`**: Rota para usuarios autenticados consultarem a classificação por ano e rodada;
 Retorno
 ```
{
    "classificacao": [
        {
            "vitoria": "1",
            "derrota": "0",
            "empate": "0",
            "_id": "6025e20b6710dc52481e7140",
            "ano": 2020,
            "rodada": 1,
            "time": {
                "_id": "602435c3a896930b48bad1d2",
                "nome": "Atletico Mineiro",
                "createdAt": "2021-02-10T19:36:35.389Z",
                "__v": 0
            },
            "gols_pro": "2",
            "gols_contra": "1",
            "gols_saldo": "1",
            "createdAt": "2021-02-12T02:03:55.952Z",
            "__v": 0
        },
        {
            "vitoria": "1",
            "derrota": "0",
            "empate": "0",
            "_id": "6025e2936710dc52481e7143",
            "ano": 2020,
            "rodada": 1,
            "time": {
                "_id": "602435aea896930b48bad1cf",
                "nome": "São Paulo",
                "createdAt": "2021-02-10T19:36:14.912Z",
                "__v": 0
            },
            "gols_pro": "2",
            "gols_contra": "1",
            "gols_saldo": "1",
            "createdAt": "2021-02-12T02:06:11.782Z",
            "__v": 0
        },
        {
            "vitoria": "1",
            "derrota": "0",
            "empate": "0",
            "_id": "6025e2d76710dc52481e7148",
            "ano": 2020,
            "rodada": 1,
            "time": {
                "_id": "602435cfa896930b48bad1d4",
                "nome": "Gremio",
                "createdAt": "2021-02-10T19:36:47.014Z",
                "__v": 0
            },
            "gols_pro": "4",
            "gols_contra": "1",
            "gols_saldo": "3",
            "createdAt": "2021-02-12T02:07:19.916Z",
            "__v": 0
        },
        {
            "vitoria": "1",
            "derrota": "0",
            "empate": "0",
            "_id": "6025e3176710dc52481e714b",
            "ano": 2020,
            "rodada": 1,
            "time": {
                "_id": "602435a8a896930b48bad1ce",
                "nome": "Santos",
                "createdAt": "2021-02-10T19:36:08.409Z",
                "__v": 0
            },
            "gols_pro": "5",
            "gols_contra": "1",
            "gols_saldo": "4",
            "createdAt": "2021-02-12T02:08:23.997Z",
            "__v": 0
        },
        {
            "vitoria": "0",
            "derrota": "1",
            "empate": "0",
            "_id": "6025e20b6710dc52481e713f",
            "ano": 2020,
            "rodada": 1,
            "time": {
                "_id": "602435cba896930b48bad1d3",
                "nome": "Athletico",
                "createdAt": "2021-02-10T19:36:43.165Z",
                "__v": 0
            },
            "gols_pro": "1",
            "gols_contra": "2",
            "gols_saldo": "-1",
            "createdAt": "2021-02-12T02:03:55.904Z",
            "__v": 0
        },
        {
            "vitoria": "0",
            "derrota": "1",
            "empate": "0",
            "_id": "6025e2936710dc52481e7142",
            "ano": 2020,
            "rodada": 1,
            "time": {
                "_id": "602435b6a896930b48bad1d0",
                "nome": "Palmeiras",
                "createdAt": "2021-02-10T19:36:22.592Z",
                "__v": 0
            },
            "gols_pro": "1",
            "gols_contra": "2",
            "gols_saldo": "-1",
            "createdAt": "2021-02-12T02:06:11.779Z",
            "__v": 0
        },
        {
            "vitoria": "0",
            "derrota": "1",
            "empate": "0",
            "_id": "6025e2d76710dc52481e7149",
            "ano": 2020,
            "rodada": 1,
            "time": {
                "_id": "60243a96287fc10f7c39c756",
                "nome": "Internacional",
                "createdAt": "2021-02-10T19:57:10.053Z",
                "__v": 0
            },
            "gols_pro": "1",
            "gols_contra": "4",
            "gols_saldo": "-3",
            "createdAt": "2021-02-12T02:07:19.919Z",
            "__v": 0
        },
        {
            "vitoria": "0",
            "derrota": "1",
            "empate": "0",
            "_id": "6025e3186710dc52481e714c",
            "ano": 2020,
            "rodada": 1,
            "time": {
                "_id": "602435a5a896930b48bad1cd",
                "nome": "Fluminense",
                "createdAt": "2021-02-10T19:36:05.325Z",
                "__v": 0
            },
            "gols_pro": "1",
            "gols_contra": "5",
            "gols_saldo": "-4",
            "createdAt": "2021-02-12T02:08:24.000Z",
            "__v": 0
        }
    ]
}
```
## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

