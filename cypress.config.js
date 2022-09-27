const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    "grepFilterSpecs": true,
    "grepOmitFiltered": true
  },
  e2e: {
    baseUrl:"https://practice.automationtesting.in/",
    video:false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('cypress-grep/src/plugin')(config);

    },
  },
});
