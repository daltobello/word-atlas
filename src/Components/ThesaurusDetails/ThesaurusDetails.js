import "./ThesaurusDetails.css"
import PropTypes from "prop-types"

function ThesaurusDetails({detail, rIndex}) {

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
      <p className="thes-word">{detail}</p>
    </div>
  )
}

ThesaurusDetails.propTypes = {
detail: PropTypes.string.isRequired,
rIndex: PropTypes.number.isRequired
}

export default ThesaurusDetails