describe("thesaurus server error", () => {
  beforeEach(() => {
  cy.intercept("GET", "https://dictionaryapi.com/api/v3/references/thesaurus/json/particular?key=a3ed202f-4c0b-419f-867c-5c7b3856fc95",
  {
    statusCode: 500,
    body: "",
  }
  ).as("getThesaurusSearch")
  .visit("http://localhost:3000/thesaurus")
})

  it("should display server error message for thesaurus search" , () => {
    cy.get('input[name="word-search"]').type("particular").should("have.value", "particular")
    .get('.submit-search').click()
    cy.wait("@getThesaurusSearch")
    .get('.error-message').should("be.visible")
    .get('.error-message').contains("Oh no! 500 Internal Server Error. Something went wrong retrieving the searched word.. Please try again.")
    .get('.return-button').should("be.visible")
    .get('.return-button').click()
    .url().should('eq', 'http://localhost:3000/')
    })
})

