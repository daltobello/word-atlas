import "./ThesaurusContainer.css";
import { useState, useEffect } from "react";
import { getThesaurus } from "../../apiCalls";
import ThesaurusDetails from "../ThesaurusDetails/ThesaurusDetails";
import ErrorPage from "../ErrorPage/ErrorPage";

function ThesaurusContainer({ selectedWord }) {
  const [wordDetails, setWordDetails] = useState({});
  const [networkError, setNetworkError] = useState("")

  useEffect(() => {
    if (selectedWord) {
      getThesaurus(selectedWord)
        .then((wordDetails) => {
          setWordDetails(wordDetails[0]);
        })
        .catch((error) => {
          setNetworkError(error.message)
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
        <ThesaurusDetails key={index} detail={detail} rIndex={rIndex} />
      ));
    });
  };

  const synonymData = wordDetails.syns ? mapThesaurusWords(wordDetails.syns) : null
  const antonymData = wordDetails.ants ? mapThesaurusWords(wordDetails.ants) : null

  return (
    <section className="thesaurus-section">
      {networkError ? (
        <ErrorPage networkError={networkError} resetError={resetError}/>
      ) :  Object.keys(wordDetails).length > 0 ? (
      <div className="all-words">
        <div className="syns-list">
          <h3 className="synonym-heading">Synonyms</h3>
          {synonymData}
        </div>
        <div className="ants-list">
          <h3 className="antonym-heading">Antonyms</h3>
          {antonymData}
        </div>
      </div>
      ) : null }
    </section>
  );
}

export default ThesaurusContainer;