describe("Form Tests", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    const firstNameInput = () => cy.get("input[name=firstName]");
    const lastNameInput = () => cy.get("input[name=lastName]");
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const checkboxInput = () => cy.get('input[name=termsOfService]');
    const createUserBtn = () => cy.get('button[id="create-user"]');

 
 

    it("Check for exist", () => {
        firstNameInput().should("exist");
        lastNameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        checkboxInput().should("exist");
        createUserBtn().should("exist");
        cy.contains("User Onboarding").should("exist");
        cy.contains("Create User").should("exist");
  
    });

    it("Type in inputs", () => {
        cy.get("input[name=firstName]").type("tommy").should("have.value", "tommy")
        cy.get("input[name=lastName]").type("brits").should("have.value", "brits")
        cy.get("input[name=email]").type("hey@hey.com").should("have.value", "hey@hey.com")
        cy.get("input[name=password]").type("pass").should("have.value", "pass")
        cy.get("input[type=checkbox]").check().should("be.checked")
        cy.get("input[type=submit]").click()
        cy.get("input[name=firstName]").should("have.value",'')
    });


});