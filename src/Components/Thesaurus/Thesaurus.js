import Definition from "../Definition/Definition";
import {useState, useEffect } from "react"
import {getThesaurus} from "../../apiCalls"

function Thesaurus({ selectedWord, setNetworkError}) {
  const [wordDetails, setWordDetails] = useState({})

  useEffect(() => {
    if(selectedWord) {
      getThesaurus(selectedWord) 
      .then((word) => {
        setWordDetails(word[0])
      })
      .catch(error => setNetworkError(error.message))
    }
  }, [selectedWord])

// if(Object.keys(wordDetails).length === 0) {
//   return null
// } else {
// const definitions = wordDetails.meanings.map((definition, index) => {
// return <Definition key={index} definitions={definition}/>
// })

// // const phonetic = selectedWord.phonetics[0].audio

  return (
      <div>
        <h1>Hi!</h1>
      </div>
    )
}

export default Thesaurus
