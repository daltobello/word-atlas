import React from "react";
import "./Definition.css";

function Definition({ definitions }) {
    const wordMeaning = definitions.definitions.map((meaning, index) => {
      return (
        <section key={index} className="definition-container">
        <ul>
          <li className="definition">{meaning.definition}</li>
        </ul>
        { meaning.example && <p className="example">"{meaning.example}"</p>}
        </section>
      )
    })
  
  return (
    <article className="def-by-part-of-speech-container">
      <div className="part-of-speech-wrapper">
        <p className="part-of-speech">{definitions.partOfSpeech}</p>
      </div>
      <p className="meaning">Meaning</p>
    {wordMeaning}
  </article>
  );
}

export default Definition;
