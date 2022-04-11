describe('Contact us test', () => {
    it('', () => {
        cy.visit("https://dev-rebuild.charitybuzz.com/")
        cy.get('.contact').click()
        cy.get('#contact_email').type("vzorek.vzorny@gmail.com")
        cy.get('#contact_name').type("Vzorek Vzorný")
        cy.get('#contact_topic').select("I would like to launch an auction")
        cy.get('#contact_message').type("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Nulla pulvinar eleifend sem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?")
        cy.get('.cssButton').click()

        
    });
});