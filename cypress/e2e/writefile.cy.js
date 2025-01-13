///<reference types="cypress"/>

describe("create the write in the file",()=>{
    it("write in the file",()=>{
        cy.writeFile("./cypress/fixtures/writefile1.json",
        {
            username: "swarupa",
            userpwd: "Swarupa@2024"
        })
    })
    //it is creating new filw & adding content to it
    it("write in the file",()=>{
        cy.writeFile("./cypress/fixtures/writefile1.json",
        {
            username: "swarupa1",
            userpwd: "Swarupa@20241"
        })
    })

    //it is overwritting the data if file name is same

    it("write",()=>{
        cy.writeFile("./cypress/fixtures/writefilw2.json",{
            loginid: "536twye",
            password: "gafstd456"
        })
    })

    //it is adding content to the already present file

    it.only("write txt file",()=>{
        cy.writeFile("./cypress/fixtures/testdata.txt","Hello world")
    })
})
