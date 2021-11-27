describe('components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=profilecomponent--primary'));
  it('should render the component', () => {
    cy.get('zukkari-github-io-profile').should('exist');
  });
});