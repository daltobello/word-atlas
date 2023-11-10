describe('landing page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/time", {
      statusCode: 200,
      fixture: 
    })
  })



  it("should display landing page and direct user to search", () => {
    cy.visit("http://localhost:3000")
  })
})