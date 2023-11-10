import "./DictionaryContainer.css";
import Definition from "../Definition/Definition";
import { useState, useEffect } from "react";
import { getWordDefinition } from "../../apiCalls";
import ErrorPage from "../ErrorPage/ErrorPage";

function DictionaryContainer({ selectedWord }) {
  const [wordDetails, setWordDetails] = useState({});
  const [networkError, setNetworkError] = useState("")

  useEffect(() => {
    if (selectedWord) {
      getWordDefinition(selectedWord)
        .then((word) => {
          setWordDetails(word[0]);
        })
        .catch((error) => {
          console.log("error in .catch():", error)
            setNetworkError(error.message)
        }
        );
    }
    return () => {
      resetError();
    };
  }, [selectedWord]);

  const resetError = () => {
    setNetworkError("");
  };

  let definitions = [];
  if (Object.keys(wordDetails).length > 0) {
    definitions = wordDetails.meanings.map((definition, index) => {
      return <Definition key={index} definitions={definition} />;
    });
  }

  // const phonetic = selectedWord.phonetics[0].audio

  return (
    <div className='word-info-section'>
      {networkError ? (
        <ErrorPage networkError={networkError} resetError={resetError}/>
      ) :  Object.keys(wordDetails).length > 0 ? ( 
        <div className='word'>
          <h1>{wordDetails.word}</h1>
          <p>{wordDetails.phonetic}</p>
          <button className='phonetic-audio-btn'></button>
          {definitions}
        </div>
      ) : null }
    </div>
  );
}

export default DictionaryContainer;
