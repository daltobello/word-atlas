import Definition from "../Definition/Definition";
import { useState, useEffect } from "react";
import { getThesaurus } from "../../apiCalls";
import ThesaurusDetails from "../ThesaurusDetails/ThesaurusDetails";
import "./ThesaurusContainer.css";

function ThesaurusContainer({ selectedWord, setNetworkError }) {
  const [wordDetails, setWordDetails] = useState({});

  useEffect(() => {
    if (selectedWord) {
      getThesaurus(selectedWord)
        .then((wordDetails) => {
          setWordDetails(wordDetails[0]);
          // console.log("wordDetails out of fetch", wordDetails[0])
        })
        .catch((error) => setNetworkError(error.message));
    }
  }, [selectedWord]);

  const mapThesaurusWords = (details) => {
    return details.map((detailArr, rIndex) => {
      return detailArr?.map((detail, index) => (
        <ThesaurusDetails key={index} detail={detail} rIndex={rIndex} />
      ));
    });
  };

  if(Object.keys(wordDetails).length === 0) {
    return null
  }
  const synonymData = mapThesaurusWords(wordDetails.syns)
  const antonymData = mapThesaurusWords(wordDetails.ants)

  return (
    <div>
      <div className="syns-list">
        <h3>Synonyms</h3>
        {synonymData}
      </div>
      <div className="ants-list">
        <h3>Antonyms</h3>
        {antonymData}
      </div>
    </div>
  );
}

export default ThesaurusContainer;