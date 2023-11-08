import "./WordContainer.css";
import Definition from "../Definition/Definition";

function WordContainer({ selectedWord }) {
  console.log("selected word inside WordContainer", selectedWord.meanings)


    
  return (
      <div>
        {/* <Definition wordDetail={word} /> */}
      </div>
    )
}

export default WordContainer;