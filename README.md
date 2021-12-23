# Desafio AXUR

>O objetivo dessa aplicação é ler os dados de contatos de uma planilha e cadastrar em uma lista de contatos no Hubspot e retornar um array com a todos os dominios de emails dos contatos cadastrados a quantidade que os mesmos se repete.

## Informações adicionais
- A aplicação não está limitada a somente 100 contatos na planilha.
- A planilha precisa estar dentro da pasta database para ser executado corretamente.

## Execuntando a aplicação

>Existem duas formas para executar a aplicação, utilizando o docker ou localmente em sua máquina/servidor.

### Docker


> Primeiro precisamos ir no arquivo docker-compose e adicionar a sua chave de API fornecida pela Hubspot:


![env](https://i.ibb.co/nsvBQtW/screenshot1.png)


>Obs: Por padrão a porta configurada é a 3000, caso queira alterar basta alterar as portas no arquivo docker-compose:

![env](https://i.ibb.co/9cLPHnF/screenshot2.png)

>Após configurar a chave basta digitar o comando para subir o container:

```
docker-compose up
```

### Localmente

<blockquote>
    <p>
        Primeiro precisamos configurar o arquivo .env, você precisa informar a chave de api e porta. Caso não queira configurar a porta, por padrão será executado na 3000. 
    </p>
    <p>Existem três modos de executar a aplicação:</p>
    <p> <strong>Produção</strong>: <code> npm run start </code> </p> 
    <p> <strong>Desenvolvimento</strong>: <code> npm run dev </code> </p>
    <p> <strong>Teste Unitários </strong>: <code> npm run test </code> </p>
</blockquote>

## Iniciando a aplicação

> Ao iniciar a aplicação, irá aparecer no console qual porta o servidor está rodando:

![server running](https://i.ibb.co/CnCD1M4/screenshot3.png)

> Logo depois irá aparecer no console o id e nome da lista que será cadastrado os contatos. E uma mensagem informando que está cadastrando os contatos na lista.

![created list](https://i.ibb.co/gWGmHHJ/screenshot4.png)

> Após cadastrar todos os contatos irá aparecer no console que os contatos foram cadastrados na lista com sucesso:

![adding contacts](https://i.ibb.co/yXSpR95/screenshot5.png)

## Consultando dominios de email

> Para obtermos o array com todas os dominios de email e suas respectivas quantidades podemos digitar na barra de endereço do navegador ou fazer uma requisição GET em algum API Client a seguinte url:

```
http://localhost:3000/v1/contacts
```

> E iremos obter o resultado:

![result](https://i.ibb.co/Vg98wZt/screenshot6.png)

