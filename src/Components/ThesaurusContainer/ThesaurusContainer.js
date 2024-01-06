import "./ThesaurusContainer.css";
import { useState, useEffect } from "react";
import { getThesaurus } from "../../apiCalls";
import ThesaurusDetails from "../ThesaurusDetails/ThesaurusDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import PropTypes from 'prop-types';

function ThesaurusContainer({ selectedWord, setSelectedWord}) {
  const [wordDetails, setWordDetails] = useState({});
  const [networkError, setNetworkError] = useState("")
  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    if (selectedWord) {
      getThesaurus(selectedWord)
        .then((wordData) => {
        if(wordData[0] === undefined) {
          setNoResults(true)
        } else {
          setNoResults(false)
          setWordDetails(wordData[0])
        }
        })
        .catch((error) => {
          setNetworkError(error.message);
        });
    }
    return () => {
      resetError();
    };
  }, [selectedWord]);

  const resetError = () => {
    setNetworkError("");
  };

  const mapThesaurusWords = (details) => {
    return details.map((detailArr, rIndex) => {
      return detailArr?.map((detail, index) => (
        <ThesaurusDetails key={index} detail={detail} rIndex={rIndex}/>
      ));
    });
  };

    const synonymData = wordDetails.syns && Array.isArray(wordDetails.syns) ? mapThesaurusWords(wordDetails.syns) : null;
    const antonymData = wordDetails.ants && Array.isArray(wordDetails.ants) ? mapThesaurusWords(wordDetails.ants) : null;

    const renderSelectedWord = () => {
      return <p>{selectedWord}</p>
    }
  
    return (
      <section className="thesaurus-section">
        {networkError ? (
          <ErrorPage networkError={networkError} resetError={resetError} setSelectedWord={setSelectedWord}/>
        ) : (
          <div className="all-words overflow-scroll">
            {noResults ? (
              <p>Sorry, there were no results</p>
            ) : Object.keys(wordDetails).length > 0 && (
              <>
                <div className="syns-list">
                  <h2 className="thes-word-container">{renderSelectedWord()}</h2>
                  <h3 className="synonym-heading">Synonyms</h3>
                  <div className="synonym-cards-container">
                    {synonymData}
                  </div>
                </div>
                  {antonymData[0] !== undefined && (
                  <div className="ants-list">
                  <h3 className="antonym-heading">Antonyms</h3>
                  <div className="antonym-cards-container">
                    {antonymData}
                  </div>
                </div>)}
              </>
            )}
          </div>
        )}
      </section>
    );    
  }    

export default ThesaurusContainer;

ThesaurusContainer.propTypes = {
  selectedWord: PropTypes.string.isRequired
}