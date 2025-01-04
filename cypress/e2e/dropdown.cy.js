///<reference types="cypress"/>

describe("handling dropdown & checkboxes",()=>{
    it.skip("handling drop down",()=>{
        cy.visit("/")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr","target").click()
        cy.get("#dropdowm-menu-1").select("Python").should('have.value',"python")
        cy.get("#dropdowm-menu-2").select("testng").should('have.value',"testng")
        cy.get("#dropdowm-menu-3").select(1).should('not.be.NaN')

    })

    it("handling the checkbox",()=>{
    
        cy.visit("/")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr","target").click()
        cy.get("div input").eq(1).check()
        // cy.get("div input").each((ele)=>{
        //    let val=ele.text()
        //     cy.log(val)
        //     if(val==='yellow'){
        //         cy.wrap(ele).click()
        //     }
        // })

        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="lettuce"]').should('be.enabled').check()
    })
})