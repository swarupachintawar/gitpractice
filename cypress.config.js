const { defineConfig } = require("cypress");
const excelToJson = require("convert-excel-to-json")
const fs=require("fs")

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'gitpractice report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
        excelToJson(filePath){
          const readFile = excelToJson({
            source: fs.readFileSync(filePath) 
          })
          return readFile
        }
      })
    },
    watchForFileChanges:false,
    baseUrl:"https://www.webdriveruniversity.com/"
  },
});
