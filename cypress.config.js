const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://practice.automationtesting.in/",
    video:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
