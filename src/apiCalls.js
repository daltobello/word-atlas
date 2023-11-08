function getWordDefinition(word) {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  .then((response) => {
    if(response.ok) {
      return response
    } else {
      throw new Error(`${response.status} ${response.statusText}. Something went wrong retrieving the searched word.`)
    }
  })
  .then((response) => response.json())
}


function getThesaurus(word) {
  return fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=a3ed202f-4c0b-419f-867c-5c7b3856fc95`)
  .then((response) => {
    if(response.ok) {
      return response
    } else {
      throw new Error(`${response.status} ${response.statusText}. Something went wrong retrieving the searched word.`)
    }
  })
  .then((response) => response.json())
}

export {getWordDefinition, getThesaurus}