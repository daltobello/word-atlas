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



function cleanThesaurusData(data) {
  const cleanedData = [];

  data.forEach(item => {
    const cleanedItem = {
      stems: item.meta.stems[0],
      syns: [
        item.meta.syns[0],
        item.meta.syns[1],
        item.meta.syns[2]
      ],
      ants: [
        item.meta.ants[0],
        item.meta.ants[1],
        item.meta.ants[2]
      ]
    };
    cleanedData.push(cleanedItem);
  });

  return cleanedData;
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
  .then((data) => cleanThesaurusData(data))
}



export {getWordDefinition, getThesaurus}