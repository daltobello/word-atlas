import "./WordContainer.css";
import Definition from "../Definition/Definition";

function WordContainer({ selectedWord }) {

if(Object.keys(selectedWord).length === 0) {
  return null
} else {
  // console.log("selected word inside WordContainer", selectedWord)

// target the definition, set to own variable, pass to Definition component
// same with phonetics


const definitions = selectedWord.meanings.map((definition, index) => {
return <Definition key={index} definitions={definition}/>
})

// const phonetic = selectedWord.phonetics[0].audio

  return (
      <div className="upper-section">
        <div className="word">
          <h1>{selectedWord.word}</h1>
          <p>{selectedWord.phonetic}</p>
          <button className="phonetic-audio-btn"></button>
          {definitions}
        </div>
      </div>
    )
}

}

export default WordContainer;



