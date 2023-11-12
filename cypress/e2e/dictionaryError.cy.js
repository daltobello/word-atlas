describe("dictionary server error", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/particular",
      {
        statusCode: 404,
       body: "",
      }
    ).as("getDictionarySearch")
    .visit("http://localhost:3000/dictionary")
  })

  it("should display server error message for dictionary search" , () => {
    cy.get('input[name="word-search"]').type("particular").should("have.value", "particular")
    .get('.submit-search').click()
    cy.wait("@getDictionarySearch")
    .get('.error-message').should("be.visible")
    .get('.error-message').contains("Oh no! 404 Not Found. Something went wrong retrieving your searched word. Please try again.")
    .get('.return-button').should("be.visible")
    .get('.return-button').click().url().should('eq', 'http://localhost:3000/')
    })
})

describe("dictionary server error", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/asdadsf",
      {
        statusCode: 404,
       body: "",
      }
    ).as("getDictionarySearch")
    .visit("http://localhost:3000/dictionary")
  })
    it("should display error message when user types non-word into search", () => {
      cy.get('input[name="word-search"]').type("asdadsf").should("have.value", "asdadsf")
      .get('.submit-search').click()
      .get('.error-message').contains("Oh no! 404 Not Found. Something went wrong retrieving your searched word. Please try again.")
      .get('.return-button').should("be.visible")
    })
})

describe("bad URL", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/particular",
      {
        statusCode: 404,
       body: "",
      }
    ).as("getBadURL")
    .visit("http://localhost:3000/dictionarybadURL")
  })

  it("should display server error message for bad URL" , () => {
    cy.get('.error-message').should("be.visible")
    .get('.error-message').contains("Page Not Found. Please double check the URL.")
    .get('.return-button').should("be.visible")
    })
})
