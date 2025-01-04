///<reference types="cypress"/>

describe("handle the alerts",()=>{
    it("handle the alert",()=>{
        cy.visit("/")
        cy.get("#popup-alerts").invoke("removeAttr","target").click()
        cy.get("#button1").click()
        cy.on('window:alert',(str)=>{
            expect(str).to.be.include("I am an alert box!")
        })
    })

    it("handle the confirm alert",()=>{
        cy.visit("/")
        cy.get("#popup-alerts").invoke("removeAttr","target").click()
        cy.get("#button4").click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.include("Press a button!")
            return false
        })
        cy.get("#confirm-alert-text").should("not.include.text","You pressed OK!")
    })
    it.only("handle the popup",()=>{
        cy.visit("/")
        cy.get("#popup-alerts").invoke("removeAttr","target").click()
        
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('It’s that Easy')
            
        })
        cy.get('#button2').click()
        

    })
})