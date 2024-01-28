describe("template spec", () => {
  it("passes", () => {
    cy.visit("/fundamentals");
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  });
});
