# Friend Bot
Este projeto é um bot que adiciona conexões automaticamente no LinkedIn. No entanto, é importante notar que o LinkedIn tem termos de serviço rigorosos e pode banir contas que violam esses termos. Portanto, é altamente recomendável que este bot seja usado apenas com o consentimento explícito das pessoas que você deseja se conectar.

## Configuração
Antes de executar o bot, é necessário configurar algumas informações. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
```
LINKEDIN_EMAIL=meu_email
LINKEDIN_PASSWORD=minha_senha
LINKEDIN_FRIEND_ROLE=tech recruiter
RELOAD_WINDOW_ON_ERROR=false
```

# Instalação
Clone o repositório e acesse a pasta do projeto:
```
git clone https://github.com/seu-username/linkedin-bot.git
cd linkedin-bot
```

Instale as dependências do projeto:
```
npm install
```

Inicie o bot:
```
npm start
```

# Dependências
"@types/selenium-webdriver": "^4.1.13"

"chromedriver": "^111.0.0"

"dotenv": "^16.0.3"

"selenium-webdriver": "^4.8.1"

"ts-node": "^10.9.1"

"typescript": "^4.9.5"

# Licença
Este projeto está licenciado sob a licença MIT. 
