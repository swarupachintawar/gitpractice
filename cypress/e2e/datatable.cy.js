///<reference types="cypress"/>

describe("Datatable",()=>{
    it("fetching datatable",()=>{
        cy.visit("/")
        cy.get("#data-table").invoke("removeAttr","target").click()
        cy.get("#thumbnail-1 tr").each((userdetails)=>{

            const ufname= userdetails.find("td:nth-child(1)").text()
            console.log(ufname)
            const ulname= userdetails.find("td:nth-child(2)").text()
            console.log(ulname)

            if(ufname=='Jason' && ulname=='Jones'){
                const uage=userdetails.find("td:nth-child(3)").text()

                console.log(`who's first name is ${ufname} & lname is ${ulname} his age is ${uage} `)
                expect(uage).to.equal("27")
            }

        })
    })
})