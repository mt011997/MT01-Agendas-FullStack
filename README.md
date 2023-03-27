<h1>API está temporariamente indisponível</h1>

<h2 align="center" style='font-family: sans-serif'>
	Register-FullStack | API REST (Back-end)
</h2>

<p align = "center">
Para iniciar a Api siga os passos a seguir:

1 - Na pasta "back-end" crie um .env e preencha os campos informado no .env.exemple passando suas credencias. 
2 - No terminal digite: "cd back-end".
3 - No terminal digite: "npm run dev" ou "yarn dev".
</p>


<p align = "center">
Este é o backend da aplicação Register-FullStack para gerenciamento de clientes e contatos.
</p>

<h2 align ='center'>Clientes (Endpoints)</h2>

## **Rotas Sem Autenticação**

<li style='font-size: 20px'>Criação de um Cliente:</li>

<br/>

Observação: O campo "phone" precisa ter 12 digitos contando com o espaço

`POST /clients - FORMATO DA REQUISIÇÃO - STATUS 201`

```json
{
	"full_name": "Exemplo",
	"email": "exemplo@email.com",
	"password": "Abc123",
	"phone": "21 999999999"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /clients - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"id": "8adf41a4-cb12-4be6-878a-a3fc98b08632",
	"full_name": "Exemplo",
	"email": "exemplo@email.com",
	"phone": "21 999999999",
	"created_at": "2023-03-26T23:14:26.229Z",
	"isActive": true,
	"isAdm": false
}
```

<br/>

<li style='font-size: 20px'>Login do Cliente</li>

<br/>

`POST /clients/login - FORMATO DA REQUISIÇÃO - STATUS 201`

```json
{
	"email": "exemplo@email.com",
	"password": "Abc123"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /clients/login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6ZmFsc2UsImlhdCI6MTY3OTg3MjQ5NCwiZXhwIjoxNjc5OTU4ODk0LCJzdWIiOiI4YWRmNDFhNC1jYjEyLTRiZTYtODc4YS1hM2ZjOThiMDg2MzIifQ.M_UjjoaJSLYnLYTWLznkliVvHAey2p6irjSWwSOBNdY",
	"clientId": "8adf41a4-cb12-4be6-878a-a3fc98b08632",
	"full_name": "Exemplo",
	"email": "exemplo@email.com",
	"contacts": []
}
```

Caso dê um erro irá retornar o seguinte erro:

```json
{
	"message": "Wrong email or password"
}
```

## **Rotas Com Autenticação**

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

Após o usuário estar logado, ele deve conseguir informar as tecnologias que ele aprendeu até agora.

> Caso você tente acessar os endpoints sem um token válido receberá o seguinte erro

<br/>

`(Exemplo) POST /contacts/ - 401 Sem Autorização`

```json
{
    "message": "Invalid token"
}
```

<br/>

> Caso seja informado um id inválido ou diferente do id do usuário logado irá retornar:

```json
{
    "message": "Invalid Credentials Token"
}
```

## <br/>

<li style='font-size: 20px'>Podemos acessar um cliente específico utilizando o endpoint:</li>

<br/>

`GET /clients/list - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "8adf41a4-cb12-4be6-878a-a3fc98b08632",
	"full_name": "Exemplo",
	"email": "exemplo@email.com",
	"phone": "21 999999999",
	"created_at": "2023-03-26T23:14:26.229Z",
	"isActive": true,
	"isAdm": false,
	"contacts": []
}
```

<li style='font-size: 20px'>Atualização de um cliente. Não precisa passar todos os campos, somente o que quer atualizar</li>

<br/>

`PATCH /clients/update- FORMATO DA REQUISIÇÃO`

```json
{
	"full_name": "Exemplo Update",
	"password": "123Abc",
	"phone": "21 111111111"
}
```

Caso dê tudo certo, a resposta será assim:

`PATCH /clients/update- FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "8adf41a4-cb12-4be6-878a-a3fc98b08632",
	"full_name": "Exemplo Update",
	"email": "exemplo@email.com",
	"phone": "21 111111111",
	"created_at": "2023-03-26T23:14:26.229Z",
	"isActive": true,
	"isAdm": false,
	"contacts": []
}
```

<li style='font-size: 20px'>Podemos fazer um soft delete em um cliente específico utilizando o endpoint:</li>

<br/>

`DELETE /clients/delete - FORMATO DA RESPOSTA - STATUS 204`

```json
{}
```

<br/>

<li style='font-size: 20px'>Outra Possível Mensagem de Erro:</li>

<br/>

```json
{
    "message": "Client Not Found"
}
```

<h2 align ='center'>Contatos (Endpoints)</h2>

<li style='font-size: 20px'>Criando um contato a partir do cliente logado:</li>

<br/>

`POST /contacts - FORMATO DA REQUISIÇÃO`

```json
{
	"full_name": "Contato Exemplo",
	"email": "contatoExemplo@gmail.com",
	"phone": "21 999999999",
	"client": "229ac975-b67f-4933-a415-7e7a9f8ba5dd"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /contacts - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"full_name": "Contato Exemplo",
	"email": "contatoExemplo@gmail.com",
	"phone": "21 999999999",
	"client": "8adf41a4-cb12-4be6-878a-a3fc98b08632",
	"id": "0771d4a7-b8ce-49a0-ae12-e0ef78c9ddce",
	"created_at": "2023-03-26T23:24:31.706Z"
}
```

<li style='font-size: 20px'>Atualização de um cliente, também não é preciso passar todos os campos, somento os que queira aatualizar.</li>

<br/>

`PATCH /contacts/:contact_id - FORMATO DA REQUISIÇÃO`

```json
{	
	"email": "exemploContatoUpdate@gmail.com",
	"full_name": "Exemplo Contato Update",
	"phone": "21 955555555"
}
```

<li style='font-size: 20px'>Caso dê tudo certo, a resposta será assim:</li>

`PATCH /contacts/:contact_id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "0771d4a7-b8ce-49a0-ae12-e0ef78c9ddce",
	"full_name": "Exemplo Contato Update",
	"email": "exemploContatoUpdate@gmail.com",
	"phone": "21 955555555",
	"created_at": "2023-03-26T23:24:31.706Z"
}
```

<li style='font-size: 20px'>Podemos deletar um contato específico utilizando o endpoint:</li>

<br/>

`DELETE /contacts/:contact_id - FORMATO DA RESPOSTA - STATUS 204`

```json
{}
```

<br/>

<li style='font-size: 20px'>Outra Possível Mensagem de Erro:</li>

<br/>

```json
{
    "message": "Contact Not Found"
}
```

<h2 align="center" style='font-family: sans-serif'>
	Register-FullStack | API REST (Front-end)
</h2>

<p align = "center">
Para iniciar o front End siga os passos a seguir:

1 - No terminal digite: "cd front-end".
2 - No terminal digite: "npm run dev" ou "yarn dev".
3 - Clique no link que foi informado no terminal após a execução do comando segurando a tecla "ctrl"
</p>
