///<reference types = 'Cypress'/>

describe('Facebook signin signup tests', () => {

    beforeEach(() => {
       
        cy.visit('http://facebook.com');
        cy.get('[data-testid=open-registration-form-button]').click();
        

    });

    it('FB signup page', ()=>{

        cy.get('#month', {timeout: 10000}).select('8');
        cy.get('#month').invoke('val').should('equal', '8');
        
        cy.get('#day').select('1');
        cy.get('#day').invoke('val').should('equal', '1');
        
        cy.get('#year').select('2000');
        cy.get('#year').invoke('val').should('equal', '2000');

    });

    it('FB signup gender test', () =>{

        //cy.get('#u_1_4').check().should('be.checked');
        cy.get('label')
        .contains('Другое')
        .siblings('input')
        .check()
        .should('be.checked');

    });


});