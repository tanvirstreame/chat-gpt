## Features
- My own chat gpt using open ai

##  Tech
 - Node JS
 - Open AI

## Demo

<img src="https://github.com/tanvirstreame/chat-gpt/blob/main/docs/assets/snap.gif" width="700" />

## Installation

First create .env accroding to .env.example. Make sure you have added mongo db url and  server port.

#### Node Server

```sh
$ npm install
```

Run the server project
```sh
$ npm run dev
```

Verify the deployment to you server address in your browser
```sh
$ 127.0.0.1:5445
```


## Endpoints
```sh
POST api/chats
```
## Status Code
| Status Code                   | Description                        
|-------------------------------|--------------------------
| 200                           | OK    
| 201                           | CREATE 
| 400                           | BAD REQUEST
| 404                           | NOT FOUND  
| 500                           | INTERNAL SERVER ERROR
