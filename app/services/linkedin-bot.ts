import { Builder, By, Key, until } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";

class LinkedInBot {
  private numberOfFriendsAdded = 0;
  private currentPageNumber = 1;
  private chromeOptions = new Options();
  private role = process.env.LINKEDIN_FRIEND_ROLE || "";
  private email = process.env.LINKEDIN_EMAIL || "";
  private password = process.env.LINKEDIN_PASSWORD || "";
  private isReloadWindowOnError = process.env.RELOAD_WINDOW_ON_ERROR || false;

  constructor() {
    this.requestFriend();
    this.chromeOptions.addArguments("--disable-extensions");

    if (!this.role || !this.email || !this.password) {
      throw new Error("Missing environment variables!!");
    }
  }

  private async requestFriend() {
    // Configura o driver do Selenium
    const driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(this.chromeOptions)
      .build();

    try {
      // Navega para a página de login do LinkedIn
      await driver.get("https://www.linkedin.com/login");

      await driver.manage().window().maximize();

      // Encontra o campo de e-mail e preenche
      const emailInput = await driver.findElement(By.id("username"));
      await emailInput.sendKeys(this.email, Key.RETURN);

      // Encontra o campo de senha e preenche
      const passwordInput = await driver.findElement(By.id("password"));
      await passwordInput.sendKeys(this.password, Key.RETURN);

      // Aguarda até que a página de perfil do usuário seja carregada
      await driver.wait(until.titleContains("Feed | LinkedIn"), 50000);

      // Clica em pesquisar e digita o termo da pesquisa
      const searchInput = await driver.findElement(
        By.css("#global-nav-typeahead>input")
      );

      await searchInput.sendKeys(this.role, Key.RETURN);

      await driver.wait(
        until.titleContains('"' + this.role + '" | Pesquisar | LinkedIn'),
        50000
      );

      // Clica no link para ir até a listagem de todas as pessoas
      const allPeopleLink = await driver.findElement(
        By.linkText("Ver todos os resultados de pessoas")
      );

      await allPeopleLink.click();

      // Clica no botão Conexões

      const connectionsButton = await driver.wait(
        until.elementLocated(By.xpath("//button[text()='Conexões']")),
        10000
      );

      await connectionsButton.click();

      // Clica no label com atributo for igual a network-S

      const secondDegreeLabel = await driver.wait(
        until.elementLocated(By.xpath("//label[@for='network-S']")),
        10000
      );

      await secondDegreeLabel.click();

      const showResultsButton = await driver.wait(
        until.elementLocated(
          By.xpath("//button[@data-control-name='filter_show_results']")
        ),
        10000
      );

      await showResultsButton.click();

      while (true) {
        // Clica em todos os botões que contém o texto Conectar
        try {
          const followButtons = await driver.wait(
            until.elementsLocated(
              By.css("button[aria-label*='para se conectar']")
            ),
            10000
          );

          for (const button of followButtons) {
            await button.click();
            // Espera 3 segundos e clicar no botão com o texto Enviar
            await driver.sleep(3000);
            const sendButton = await driver.wait(
              until.elementLocated(
                By.xpath("//button[@aria-label='Enviar agora']")
              ),
              10000
            );

            await sendButton.click();
            // Espera entre 5 e 13 segundos para não ser bloqueado
            await driver.sleep(Math.floor(Math.random() * 13000) + 5000);
            this.numberOfFriendsAdded++;
            console.log(
              `Número de conexões adicionadas: ${this.numberOfFriendsAdded}`
            );
          }
        } catch (e) {
          if (this.isReloadWindowOnError) {
            await driver.navigate().refresh();
            await driver.sleep(2500);
          }
          // Scroll para o final da página
          await driver.executeScript(
            "window.scrollTo(0, document.body.scrollHeight);"
          );
          // Clica no botão que contem o texto avançar para ir para a próxima página
          const nextButton = await driver.wait(
            until.elementLocated(By.xpath("//button[@aria-label='Avançar']")),
            10000
          );

          await nextButton.click();
          this.currentPageNumber++;
          console.log(`Número da página atual: ${this.currentPageNumber}`);
        }
      }
    } finally {
      // Fecha o driver do Selenium
      await driver.quit();
    }
  }
}

new LinkedInBot();
