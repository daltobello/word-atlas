import "./DictionaryContainer.css";
import Definition from "../Definition/Definition";
import { useState, useEffect } from "react";
import { getWordDefinition } from "../../apiCalls";
import ErrorPage from "../ErrorPage/ErrorPage";
import PropTypes from 'prop-types';

function DictionaryContainer({ selectedWord }) {
  const [wordDetails, setWordDetails] = useState({});
  const [networkError, setNetworkError] = useState("")

  useEffect(() => {
    if (selectedWord) {
      getWordDefinition(selectedWord)
        .then((word) => {
          setWordDetails(word[0]);
        })
        .catch((error) => setNetworkError(error.message)
        );
    }
    return () => {
      resetError();
    };
  }, [selectedWord]);

  const resetError = () => {
    setNetworkError("");
  };

    const definitions = wordDetails.meanings?.map((definition, index) => {
      return <Definition key={index} definitions={definition} />;
    });

  return (
    <div>
      {networkError ? (
        <ErrorPage networkError={networkError} resetError={resetError}/>
      ) :  Object.keys(wordDetails).length > 0 ? ( 
        <section className='definition-section'>
          <h2 className="word">{wordDetails.word}</h2>
          <p className="phonetic">{wordDetails.phonetic}</p>
          {definitions}
        </section>
      ) : null }
    </div>
  );
}

export default DictionaryContainer;

DictionaryContainer.propTypes = {
  selectedWord: PropTypes.string.isRequired
}