describe("dictionary search", () => {
    beforeEach(() => {
      cy.intercept("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/particular",
        {
          statusCode: 200,
          fixture: "dictionaryWord",
        }
      ).as("getDictionarySearch")
      .visit("http://localhost:3000/")

      cy.intercept("GET", "https://dictionaryapi.com/api/v3/references/thesaurus/json/particular?key=a3ed202f-4c0b-419f-867c-5c7b3856fc95",
      {
        statusCode: 200,
        fixture: "thesaurusWord",
      }
      ).as("getThesaurusSearch")
    })

  it.only("should display the results of a dictionary search and navigate to thesaurus results and back" , () => {
    cy.get('input[name="word-search"]').type("particular").should("have.value", "particular")
    .get('.submit-search').click()
    cy.wait("@getDictionarySearch")
    .get('.definition-section').should("have.length" , 1)
    .get('.word').contains("particular")
    .get('.phonetic').contains("/pəˈtɪkjələ/")
    .get('.definition-section > :nth-child(3)').should("exist")
    .get('.definition-section').find(".part-of-speech").contains("noun")
    .get(':nth-child(3) > .meaning').contains("Meaning")
    .get(':nth-child(3) > :nth-child(3) > ul > .definition').contains("A small individual part of something larger; a detail, a point.")
    .get(':nth-child(3) > :nth-child(4) > ul > .definition').contains("A person's own individual case.")
    .get(':nth-child(3) > :nth-child(5) > ul > .definition').contains("(chiefly in plural) A particular case; an individual thing as opposed to a whole class. (Opposed to generals, universals.)")
    .get('.definition-section').find(".part-of-speech").contains("adjective")
    .get(':nth-child(4) > .meaning').contains("Meaning")
    .get(':nth-child(4) > :nth-child(3) > ul > .definition').contains("Pertaining only to a part of something; partial.")
    .get(':nth-child(4) > :nth-child(4) > ul > .definition').contains("Specific; discrete; concrete.")
    .get(':nth-child(4) > .example').contains("I couldn't find the particular model you asked for, but I hope this one will do.")
    .get(':nth-child(4) > :nth-child(5) > ul > .definition').contains("Specialised; characteristic of a specific person or thing.")
    .get(':nth-child(5) > .example').contains("I don't appreciate your particular brand of cynicism.")
    .get(':nth-child(6) > ul > .definition').contains("Known only to an individual person or group; confidential.")
    .get(':nth-child(7) > ul > .definition').contains("Distinguished in some way; special (often in negative constructions).")
    .get(':nth-child(7) > .example').contains("He brought no particular news.")
    .get(':nth-child(8) > ul > .definition').contains("Of a person, concerned with, or attentive to, details; minute; precise; fastidious.")
    .get(':nth-child(8) > .example').contains("He is very particular about his food and if it isn't cooked to perfection he will send it back.")
    .get(':nth-child(9) > ul > .definition').contains("Concerned with, or attentive to, details; minute; circumstantial; precise.")
    .get(':nth-child(9) > .example').contains("a full and particular account of an accident")
    .get(':nth-child(10) > ul > .definition').contains("Containing a part only; limited.")
    .get(':nth-child(10) > .example').contains("a particular estate, or one precedent to an estate in remainder")
    .get(':nth-child(11) > ul > .definition').contains("Holding a particular estate.")
    .get(':nth-child(11) > .example').contains("a particular tenant")
    .get(':nth-child(12) > ul > .definition').contains("Forming a part of a genus; relatively limited in extension; affirmed or denied of a part of a subject.")
    .get(':nth-child(12) > .example').should("exist")

    .get('.nav-link').eq(1).should("have.text", "Thesaurus").click()
    cy.wait("@getThesaurusSearch")
    .url().should('eq', 'http://localhost:3000/thesaurus')
    .get('.thes-word-container').find("p").should("have.text", "particular")
    .get('.syns-list').should("exist")
   .get('.syns-list').find(".synonym-heading").contains("Synonyms")
   .get('.syns-list').first().contains("choosy")
   .get('.syns-list').last().contains("selective")
   .get('.ants-list').find(".antonym-heading").contains("Antonyms")
   .get('.ants-list').first().contains("undemanding")
   .get('.ants-list').last().contains("unselective")
   .get('.nav-link').eq(0).should("have.text", "Dictionary").click()
   .url().should('eq', 'http://localhost:3000/')
  })
})
