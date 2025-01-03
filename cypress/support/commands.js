Cypress.Commands.add("login",(fname,lname,email,comments)=>{
    cy.get('input[name="first_name"]').type(fname)
    cy.get('input[name="last_name"]').type(lname)
    cy.get('input[name="email"]').type(email)
    cy.get('textarea[name="message"]').type(comments)
    cy.get('input[value="SUBMIT"]').click()

})