///<reference types="cypress"/>

describe("reading the file",()=>{
    it("read json file",()=>{
        cy.readFile("./cypress/fixtures/writefile1.json").should("have.property","userpwd")
        cy.readFile("./cypress/fixtures/writefile1.json").then((user)=>{
            cy.log(user)
        })
    })

    it("read txt file",()=>{
       cy.readFile("./cypress/fixtures/testdata.txt").then((user)=>{
        cy.log(user)
       })
       
    })
})