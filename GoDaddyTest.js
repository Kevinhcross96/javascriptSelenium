const {Builder, By, Key, util} = require("selenium-webdriver");
require("chromedriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://www.godaddy.com")
  await driver.manage().window().maximize();
  let currentUrl = await driver.getCurrentUrl();
  let currentTitle = await driver.getTitle();
  console.log(currentUrl);
  console.log(currentTitle);

  if (currentUrl === "https://www.godaddy.com/") {
    console.log("URL Success")
  }

  if (currentTitle === "Domain Names, Websites, Hosting & Online Marketing Tools - GoDaddy"){
    console.log("Title Success")
  }

  let pagesource = await driver.getPageSource();

// Lines 25-29 are supposed to take the page source and ensure that the page title can be found in it
// Unfortunately, it currently cannot do so, and always returns false. Still trying to figure out why
  if (pagesource.includes("Domain Names, Websites, Hosting & Online Marketing Tools - GoDaddy")) {
    console.log("Title Found in Page Source")
  }  else {
    console.log("Cannot Find Title in Page Source")
  }


  await driver.quit();
}

example();
