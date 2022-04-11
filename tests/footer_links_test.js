describe('Footer links test', () => {
    it('', () => {
          cy.visit("https://dev-rebuild.charitybuzz.com/")
          cy.get(':nth-child(2) > .no-bullet > :nth-child(2) > a').click()
          cy.get('.hide-for-medium-down > a').click()
          cy.get('.no-bullet > :nth-child(4) > a').click()
          cy.get('.no-bullet > :nth-child(5) > a').click()
          cy.get('.no-bullet > :nth-child(6) > a').click()
          cy.get(':nth-child(7) > a').click()
          cy.get(':nth-child(8) > a').click()
    });
});