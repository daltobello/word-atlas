function getWordDefinition() {
  return fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
  .then((response) => {
    if(response.ok) {
      return response
    } else {
      throw new Error(`${response.status} ${response.statusText}. Something went wrong retrieving the searched word.`)
    }
  })
  .then((response) => response.json())
}

export default getWordDefinition