import Definition from "../Definition/Definition";
import {useState, useEffect } from "react"
import {getThesaurus} from "../../apiCalls"
import ThesaurusDetails from "../ThesaurusDetails/ThesaurusDetails";


function ThesaurusContainer({ selectedWord, setNetworkError}) {
  const [wordDetails, setWordDetails] = useState({})

  useEffect(() => {
    if(selectedWord) {
      getThesaurus(selectedWord) 
      .then((wordDetails) => {
        setWordDetails(wordDetails[0])
        console.log("wordDetails out of fetch", wordDetails)
      })
      .catch(error => setNetworkError(error.message))
    }
  }, [selectedWord])

if(!wordDetails) {
  return null
} else {
  console.log("EMPTY OBJECT?", wordDetails)
// const thesaurusData = wordDetails.map((detail, index) => {
// return <ThesaurusDetails key={index} detail={detail}/>
// })
}

// // const phonetic = selectedWord.phonetics[0].audio

  return (
      <div>
        <h1>Hi!</h1>
      </div>
    )
}

export default ThesaurusContainer
