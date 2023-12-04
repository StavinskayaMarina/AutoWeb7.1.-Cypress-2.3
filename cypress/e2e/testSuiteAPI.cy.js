import user from "../fixtures/user1.json";
import updateUs from "../fixtures/user2.json";
import deleteUs from "../fixtures/user1.json";

describe("integration tests", () => {
  it("creating a user", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: user,
    }).then((response) => {
      expect(response.status).be.eq(200);
    });
    cy.request({
      method: "GET",
      url: `https://petstore.swagger.io/v2/user/${user.username}`,
    }).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eqls(user);
    });
  });

  it("user edits", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: user,
    }).then((response) => {
      expect(response.status).be.eq(200);
    });
    cy.request({
      method: "PUT",
      url: `https://petstore.swagger.io/v2/user/${user.username}`,
      body: updateUs,
    }).then((response) => {
      expect(response.status).be.eq(200);
    });
    cy.request({
      method: "GET",
      url: `https://petstore.swagger.io/v2/user/${updateUs.username}`,
    }).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eqls(updateUs);
    });
  });

  it("deleting a user", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: deleteUs,
    }).then((response) => {
      expect(response.status).be.eq(200);
    });
    cy.request({
      method: "DELETE",
      url: `https://petstore.swagger.io/v2/user/${deleteUs.username}`,
    }).then((response) => {
      expect(response.status).be.eq(200);
    });
  });
});
