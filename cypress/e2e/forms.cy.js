describe("forms test", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form")
      .find("input")
      .type("testemail@testdomain.com");
    cy.contains(/Successfully subbed: testemail@testdomain.com!/i).should(
      "not.exist"
    );
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: testemail@testdomain.com!/i).should(
      "exist"
    );
  });
});
