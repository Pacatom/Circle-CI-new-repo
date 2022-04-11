
describe('Success registration test', () => {
    it('Make new user', () => {
        cy.visit("https://dev-rebuild.charitybuzz.com/onboarder/registration")

        cy.get('#show-login-popup').click()
        cy.get('[id=email_primary]').type("jdraslar+1000@charitynetwork.com")
        cy.get('[id="password-field"]').type('Aa123456!')
        cy.get('[id="login-popup-submit"]').click()
        cy.wait(5000)

        cy.visit('https://dev-rebuild.charitybuzz.com/onboarder/registration-success')
        cy.get('[data-testid="next"]').click()

        //Card info
        cy.get('#react-unique-id-0').type("Vzorek Vzorný")
        cy.get('#react-unique-id-1').type("4242424242424242")
        cy.get('#react-unique-id-2').type("123")
        cy.get('[class="Input-module__label___3Mmv9"]').type("0324")
        cy.get('[data-testid="next"]').click()
        
        //Adress info
        cy.get('#react-unique-id-4').type("307-663-5929")
        cy.get('#react-unique-id-5').type("Vzorek")
        cy.get('#react-unique-id-6').type("Vzorný")
        cy.get('#react-unique-id-7').type("938 Thorn Street")
        cy.get('#react-unique-id-10').select("Wyoming")
        cy.get('#react-unique-id-11').type("Edgemont")
        cy.get('#react-unique-id-12').type("57735")
        cy.get('#react-unique-id-13').click()
        cy.get('.Button-module__button____spOe').click()
        cy.wait(4000)
        cy.get('.Button-module__button____spOe').click()

        // Interests
        cy.get(':nth-child(7) > .Categories-module__name___bsl-f').click()
        cy.get('.Button-module__button____spOe').click()
        cy.get('.SubCategories-module__cardsWrapper___DHIQW > :nth-child(3)').click()
        cy.get('.Button-module__button____spOe').click()
        cy.get('.Button-module__button____spOe > span').click()
        
        
    });
});