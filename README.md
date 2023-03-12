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

## Instalação
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

## Dependências
"@types/selenium-webdriver": "^4.1.13": Este pacote fornece definições TypeScript para a biblioteca Selenium WebDriver, que é usada para automatizar interações do navegador.

"chromedriver": "^111.0.0": Chromedriver é um executável separado que o WebDriver usa para controlar o Chrome. Este pacote instala a versão mais recente do Chromedriver que corresponde à versão instalada do Chrome.

"dotenv": "^16.0.3": Dotenv é um módulo de dependência zero que carrega variáveis de ambiente de um arquivo .env em process.env. Isso permite que você mantenha informações confidenciais, como senhas e chaves de API, fora do seu código e em um arquivo separado.

"selenium-webdriver": "^4.8.1": Selenium WebDriver é uma biblioteca que permite automatizar interações do navegador para testes e outros fins. Este pacote instala a versão mais recente do Selenium WebDriver.

"ts-node": "^10.9.1": ts-node é um mecanismo de execução TypeScript e REPL para Node.js. Ele permite que você execute código TypeScript diretamente no Node sem compilá-lo para JavaScript primeiro.

"typescript": "^4.9.5": TypeScript é um superset do JavaScript que adiciona tipagem estática opcional e outros recursos à linguagem. Este pacote instala a versão mais recente do TypeScript.

## Licença
Este projeto está licenciado sob a licença MIT. 
