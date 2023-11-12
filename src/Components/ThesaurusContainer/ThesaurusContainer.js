import "./ThesaurusContainer.css";
import { useState, useEffect } from "react";
import { getThesaurus } from "../../apiCalls";
import ThesaurusDetails from "../ThesaurusDetails/ThesaurusDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import PropTypes from 'prop-types';

function ThesaurusContainer({ selectedWord }) {
  const [wordDetails, setWordDetails] = useState({});
  const [networkError, setNetworkError] = useState("")

  useEffect(() => {
    if (selectedWord) {
      getThesaurus(selectedWord)
        .then((wordData) => setWordDetails(wordData[0]))
        .catch((error) => {
          setNetworkError(error.message);
        });
    }
    return () => {
      resetError();
    };
  }, [selectedWord]);

  if (wordDetails === undefined) {
    return null
  }

  const resetError = () => {
    setNetworkError("");
  };

  const mapThesaurusWords = (details) => {
    return details.map((detailArr, rIndex) => {
      return detailArr?.map((detail, index) => (
        <ThesaurusDetails key={index} detail={detail} rIndex={rIndex} />
      ));
    });
  };

    const synonymData = wordDetails.syns && Array.isArray(wordDetails.syns) ? mapThesaurusWords(wordDetails.syns) : null;
    const antonymData = wordDetails.ants && Array.isArray(wordDetails.ants) ? mapThesaurusWords(wordDetails.ants) : null;

    const handleUndefinedArray = (array) => {
      return array.filter((element) => element === undefined).length === array.length;
    };
  
  return (
    <section className="thesaurus-section">
      {networkError ? (
        <ErrorPage networkError={networkError} resetError={resetError} />
      ) : Object.keys(wordDetails).length > 0 ? (
        <div className="all-words">
          {handleUndefinedArray(synonymData) ? null : (
          <div className="syns-list">
            <h3 className="synonym-heading">Synonyms</h3>
            <div className="synonym-cards-container">
              {synonymData}
            </div>
          </div>
          )}
          {handleUndefinedArray(antonymData) ? null : (
            <div className="ants-list">
              <h3 className="antonym-heading">Antonyms</h3>
              <div className="antonym-cards-container">
                {antonymData}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </section>
  );
}

export default ThesaurusContainer;

ThesaurusContainer.propTypes = {
  selectedWord: PropTypes.string.isRequired
}