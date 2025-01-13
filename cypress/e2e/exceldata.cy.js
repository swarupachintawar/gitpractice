///<reference types="cypress"/>

describe("read the data from excel",()=>{
    const filePath="./cypress/fixtures/testData.xlsx"
    it("read from excel",()=>{
        cy.task('excelToJson', filePath).then((readdata)=>{
            cy.visit("https://www.webdriveruniversity.com/")
            cy.get('#contact-us').invoke('removeAttr', 'target').click()
            cy.get('input[name="first_name"]').type(readdata.Sheet1[3].A)
            cy.get('input[name="last_name"]').type(readdata.Sheet1[3].B)
            cy.get('input[name="email"]').type(readdata.Sheet1[3].C)
            cy.get('textarea[name="message"]').type(readdata.Sheet1[3].D)
            cy.get('input[value="SUBMIT"]').click()
        })

    })
})

