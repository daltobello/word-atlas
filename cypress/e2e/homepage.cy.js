describe('landing page', () => {
  it("should display landing page elements and direct user to search page", () => {
    cy.visit("http://localhost:3000")
    .get(".word-atlas").contains("Word Atlas")
    .click()
    .url().should('eq', 'http://localhost:3000/dictionary')
    .get('.dict-nav-link').contains("Dictionary")
    .get('.thes-nav-link').contains("Thesaurus")
    .get('.search-input').should("exist")
    .get('.submit-search').should("exist")
  })
})

describe("search", () => {
    beforeEach(() => {
      cy.intercept("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/particular",
        {
          statusCode: 200,
          fixture: "searchedWord",
        }
      ).as("getSearch")
      .visit("http://localhost:3000/dictionary")
    })

  it("should display the results of a search" , () => {
    cy.get('.search-input').type("particular")
    .get('.submit-search').click()
    cy.wait("@getSearch")
    .get('.definition-section').should("have.length" , 1)
    .get('.word').contains("particular")
    .get('.phonetic').contains("/pəˈtɪkjələ/")
    .get('.definition-section > :nth-child(3)').should("exist")
    .get(':nth-child(3) > .part-of-speech-wrapper > .part-of-speech').contains("noun")
    .get(':nth-child(3) > .meaning').contains("Meaning")
    .get(':nth-child(3) > :nth-child(3) > ul > .definition').contains("A small individual part of something larger; a detail, a point.")
    .get(':nth-child(3) > :nth-child(4) > ul > .definition').contains("A person's own individual case.")
    .get(':nth-child(3) > :nth-child(5) > ul > .definition').contains("(chiefly in plural) A particular case; an individual thing as opposed to a whole class. (Opposed to generals, universals.)")
  })
})

