describe('zuk', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('zukkari-github-io-root').should('exist');
  });
});