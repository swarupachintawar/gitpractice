/// <reference types="cypress"/>

describe("validate contact us ",()=>{
    let info
    before(()=>{
        cy.fixture('example').then((val)=>{
         info=val
        })
    })
    it("enter correct details",()=>{
        cy.visit("/")
        cy.get("#contact-us").invoke("removeAttr","target").click()
        cy.login(info.fname,info.lname,info.email,info.comments)
        cy.get('#contact_reply').should("include.text","Thank You for your Message!")
    })
})
