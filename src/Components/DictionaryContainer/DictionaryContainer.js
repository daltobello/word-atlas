import "./DictionaryContainer.css";
import Definition from "../Definition/Definition";
import { useState, useEffect } from "react";
import { getWordDefinition } from "../../apiCalls";
import ErrorPage from "../ErrorPage/ErrorPage";

function DictionaryContainer({ selectedWord }) {
  const [wordDetails, setWordDetails] = useState({});
  const [networkError, setNetworkError] = useState({hasError: false, message: ""})

  useEffect(() => {
    if (selectedWord) {
      getWordDefinition(selectedWord)
        .then((word) => {
          setWordDetails(word[0]);
        })
        .catch((error) => {
          console.log("error:", error)
            setNetworkError({ hasError: true, message: `${error.message}` })
          
        }
        );
    }
    return () => {
      resetError();
    };
  }, [selectedWord]);

  const resetError = () => {
    setNetworkError({ hasError: false, message: "" });
  };

  let definitions = [];
  if (Object.keys(wordDetails).length === 0) {
    return null;
  } else {
    definitions = wordDetails.meanings.map((definition, index) => {
      return <Definition key={index} definitions={definition} />;
    });
  }
  // const phonetic = selectedWord.phonetics[0].audio

  return (
    <div className='upper-section'>
      {networkError.hasError ? (
        <ErrorPage networkError={networkError} resetError={resetError}/>
      ) : (
        <div className='word'>
          <h1>{wordDetails.word}</h1>
          <p>{wordDetails.phonetic}</p>
          <button className='phonetic-audio-btn'></button>
          {definitions}
        </div>
      )}
    </div>
  );
}

export default DictionaryContainer;
