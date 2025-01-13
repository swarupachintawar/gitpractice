///<reference types="cypress"/>

describe("perform mouse action",()=>{
    it("drag drop action",()=>{
        cy.visit("/")
        cy.get("#actions").invoke("removeAttr","target").click()
        cy.get("#draggable").trigger('mousedown',{which:1})
        cy.get("#droppable").trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable > p > :nth-child(1)').should("have.text","Dropped!")

    })

    it("hover mouse",()=>{
        cy.visit("/")
        cy.get("#actions").invoke("removeAttr","target").click()
        //cy.get(".dropdown.hover").invoke("show").click()
        cy.get(".dropdown.hover").trigger('mouseover').get(".dropdown.hover > div >a").click({force:true})
        // cy.get(".dropdown.hover > div >a").click({force:true})
        // cy.on('window:alert',(str)=>{
        //     expect(str).to.include("Well done you clicked on the link!")
        // })
    })

    it.only("doubleclick action",()=>{
        cy.visit("/")
        cy.get("#actions").invoke("removeAttr","target").click()
        cy.get("#double-click").dblclick()
        cy.get(".div-double-click.double").should('have.css','background-color','rgb(147, 203, 90)')
    })
})