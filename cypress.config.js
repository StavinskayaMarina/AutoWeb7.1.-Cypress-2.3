const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "34f629",
    baseUrl: "https://petstore.swagger.io/#/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});