const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "k7qm7z",
    baseUrl: "https://petstore.swagger.io/#/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});