/// <reference types="cypress"/>

describe('filtering',()=>{
    beforeEach(()=>{
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    
        cy.get('.new-todo').type("Call Dwight{enter}")
        cy.get('.new-todo').type("Call Mom{enter}")
        cy.get('.new-todo').type("Respond to L2{enter}")

        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })
    it('should filter "Active" todos',()=>{
        cy.contains('Active').click()

        cy.get('.todo-list li').should('have.length',2)
    })
    it('should filter "Completed" todos',()=>{
        cy.contains('Completed').click()

        cy.get('.todo-list li').should('have.length',1)
    })
    it('should filter "All" todos',()=>{
        cy.contains('All').click()

        cy.get('.todo-list li').should('have.length',3)
    })
})