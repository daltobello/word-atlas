import "./ThesaurusDetails.css"
import PropTypes from "prop-types"

function ThesaurusDetails({detail, rIndex}) {
  console.log("detail", detail)
  let cardClass = ""
  if(rIndex === 0) {
    // card class is red
    cardClass = "red-card"
  }
  return (
    <div className={`thes-detail-cards ${cardClass}`}>
      <p className="thes-word">{detail}</p>
    </div>
  )
}

ThesaurusDetails.propTypes = {
detail: PropTypes.string.isRequired
}

export default ThesaurusDetails