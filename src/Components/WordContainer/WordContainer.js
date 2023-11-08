import "./WordContainer.css";
import Definition from "../Definition/Definition";
import {useState, useEffect } from "react"
import {getWordDefinition} from "../../apiCalls"

function WordContainer({ selectedWord, setNetworkError}) {
  const [wordDetails, setWordDetails] = useState({})

  useEffect(() => {
    if(selectedWord) {
      getWordDefinition(selectedWord) 
      .then((word) => {
        setWordDetails(word[0])
      })
      .catch(error => setNetworkError(error.message))
    }
  }, [selectedWord])

if(Object.keys(wordDetails).length === 0) {
  return null
} else {
const definitions = wordDetails.meanings.map((definition, index) => {
return <Definition key={index} definitions={definition}/>
})

// const phonetic = selectedWord.phonetics[0].audio

  return (
      <div className="upper-section">
        <div className="word">
          <h1>{wordDetails.word}</h1>
          <p>{wordDetails.phonetic}</p>
          <button className="phonetic-audio-btn"></button>
          {definitions}
        </div>
      </div>
    )
}

}

export default WordContainer;



