import "./DictionaryContainer.css";
import Definition from "../Definition/Definition";
import { useState, useEffect } from "react";
import { getWordDefinition } from "../../apiCalls";
import ErrorPage from "../ErrorPage/ErrorPage";
import PropTypes from 'prop-types';
import playAudioButton from "../../assets/play-circle-svgrepo-com (1).svg"

function DictionaryContainer({ selectedWord, setSelectedWord }) {
  const [wordDetails, setWordDetails] = useState({});
  const [networkError, setNetworkError] = useState("")
  const [audio, setAudio] = useState(null)

  useEffect(() => {
    if (!selectedWord) {
      return
    }
    getWordDefinition(selectedWord)
      .then(wordData => {
        setWordDetails(wordData[0]);
        if (wordData[0].phonetics.length > 0 && wordData[0].phonetics[0].audio) {
          const audioFile = new Audio(wordData[0].phonetics[0].audio);
          setAudio(audioFile);
        }
      })
      .catch(error => {
        setNetworkError(error.message);
      });

    return () => {
      resetError();
    };
  }, [selectedWord]);
  
  const resetError = () => {
    setNetworkError("");
  };
  
  const playAudio = () => {
   if(audio) {
    audio.play()
   }
  }

    const definitions = wordDetails.meanings?.map((definition, index) => {
      return <Definition key={index} definitions={definition} />;
    });

  return (
    <div>
      {networkError ? (
        <ErrorPage networkError={networkError} resetError={resetError}  setSelectedWord={ setSelectedWord}/>
      ) :  Object.keys(wordDetails).length > 0 ? ( 
        <section className='definition-section'>
          <div className="top-container">
            <h2 className="word">{wordDetails.word}</h2>
            {wordDetails.phonetics.length  && wordDetails.phonetics[0].audio && (
              <button
                className='play-audio' 
                onClick={playAudio}>
                <img src={playAudioButton} alt="Play Audio"/>
                </button>
            )}
          </div>
          <p className="phonetic">{wordDetails.phonetic}</p>
          {definitions}
        </section>
      ) : null }
    </div>
  );
}

export default DictionaryContainer;

DictionaryContainer.propTypes = {
  selectedWord: PropTypes.string.isRequired, 
  setSelectedWord: PropTypes.func.isRequired
}