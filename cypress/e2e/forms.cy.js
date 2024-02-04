describe("forms test", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subscribe form", () => {
    cy.contains(/testing forms/i);

    // Define a Cypress alias "subscribe-input" for the input field.
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");

    // Get the input (using the alias) and type in it.
    cy.get("@subscribe-input").type("testemail@testdomain.com");

    // Checking a valid email subscription.

    cy.contains(/Successfully subbed: testemail@testdomain.com!/i).should(
      "not.exist"
    );
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: testemail@testdomain.com!/i).should(
      "exist"
    );

    // The message is set to disappear after 3000 ms
    // so we wait and check.

    cy.wait(3000);

    cy.contains(/Successfully subbed: testemail@testdomain.com!/i).should(
      "not.exist"
    );

    // Test an invalid email.

    cy.get("@subscribe-input").type("invalidemail@notvalid");
    cy.contains(/Invalid email: invalidemail@notvalid!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email: invalidemail@notvalid!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Invalid email: invalidemail@notvalid!/i).should("not.exist");

    // Test an empty email.

    cy.contains(/fail!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
    cy.wait(3000);
    cy.contains(/fail!/i).should("not.exist");
  });
});
