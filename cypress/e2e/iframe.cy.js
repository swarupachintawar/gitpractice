///<reference types="cypress"/>

describe("handling iframe",()=>{
    it("iframe",()=>{
        cy.visit("/")
        cy.get("#iframe").invoke("removeAttr","target").click()
        cy.get("#frame").then((frameinfo)=>{
            let framebody=frameinfo.contents().find("bod")
            cy.wrap(framebody).as('inframe')
            cy.get('@inframe').find(".sub-heading").eq(1).should('have.text',"GREAT SERVICE!")
        })
    })
})