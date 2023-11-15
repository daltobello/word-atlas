import "./ThesaurusDetails.css"
import PropTypes from "prop-types"

function ThesaurusDetails({detail, rIndex, selectedWord}) {

  console.log("selectedWord insideThesaurusDetails", selectedWord)

  let cardClass = ""
  if(rIndex === 0) {
    cardClass = "dark-gray"
  } else if(rIndex === 1) {
    cardClass = "gray"
  } else if(rIndex === 2) {
    cardClass = "light-gray"
  }

  return (
    <div className={`thes-detail-cards ${cardClass}`}>
      <div >
        <div className="thes-word">{selectedWord}</div>
      </div>
      <p className="thes-word">{detail}</p>
    </div>
  )
}

ThesaurusDetails.propTypes = {
detail: PropTypes.string.isRequired,
rIndex: PropTypes.number.isRequired
}

export default ThesaurusDetails