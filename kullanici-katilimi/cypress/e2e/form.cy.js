describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const nameInput = () => cy.get("[data-cy=test-name");

  it("passes", () => {
    expect(true).to.equal(true);
  });

  it("submits form successfully", () => {
    nameInput();
    cy.get("[data-cy=test-name]")
      .should("have.value", "")
      .type("Osman Sofu")
      .should("have.value", "Osman Sofu");
    cy.get("[data-cy=test-email]")
      .should("have.value", "")
      .type("osman@workintech.com")
      .should("have.value", "osman@workintech.com");
    cy.get("[data-cy=test-password]")
      .should("have.value", "")
      .type("123456")
      .should("have.value", "123456");
    cy.get("[data-cy=test-terms]").should("not.checked");
    cy.get("[data-cy=test-submit]").click();
  });
});
